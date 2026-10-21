import math,base64,json
from fontTools.ttLib import TTFont
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.recordingPen import DecomposingRecordingPen
from fontTools import subset

def poly_area(p): return sum(p[i][0]*p[(i+1)%len(p)][1]-p[(i+1)%len(p)][0]*p[i][1] for i in range(len(p)))/2
def circle(cx,cy,r,n=14):return [(cx+r*math.cos(2*math.pi*i/n),cy+r*math.sin(2*math.pi*i/n)) for i in range(n)]
def seg(a,b,w):
    dx,dy=b[0]-a[0],b[1]-a[1];L=math.hypot(dx,dy) or 1;nx,ny=-dy/L*w/2,dx/L*w/2
    return [(a[0]+nx,a[1]+ny),(b[0]+nx,b[1]+ny),(b[0]-nx,b[1]-ny),(a[0]-nx,a[1]-ny)]
def stroke(pts,w):
    out=[]
    for a,b in zip(pts,pts[1:]):out.append(seg(a,b,w))
    for p in pts:out.append(circle(p[0],p[1],w/2))
    return out
def bez(p0,p1,p2,p3,n=10):
    return [tuple((1-t)**3*p0[k]+3*(1-t)**2*t*p1[k]+3*(1-t)*t*t*p2[k]+t**3*p3[k] for k in (0,1)) for t in [i/n for i in range(n+1)]]

def build(src,out,sw,xh,cap,asc,gapl,gapc,K):
    f=TTFont(src)
    for t in ('fpgm','prep','cvt ','hdmx','VDMX','LTSH','gasp'):
        if t in f: del f[t]
    gs=f.getGlyphSet();cm=f.getBestCmap();order=f.getGlyphOrder()[:]
    def bounds(ch):
        bp=BoundsPen(gs);gs[cm[ord(ch)]].draw(bp);return bp.bounds
    def base_contours(ch):
        rp=DecomposingRecordingPen(gs);gs[cm[ord(ch)]].draw(rp);return rp
    def make(ch,mark,newch):
        b=bounds(ch);x0,y0,x1,y1=b;cx=(x0+x1)/2;top=y1
        extra=[]
        up=ch.isupper() or ch in 'l'
        if mark=='acute':
            ay=top+(gapc if up else gapl)
            extra=stroke([(cx-sw*.9*K,ay),(cx+sw*.2*K,ay+sw*1.5*K),(cx+sw*1.5*K,ay+sw*2.7*K)],sw*1.05)
        elif mark=='dot':
            ay=top+(gapc if up else gapl)+sw*.8
            extra=[circle(cx,ay+sw*.5*K,sw*.95)]
        elif mark=='ogonek':
            bx=x1-(x1-x0)*.22;by=y0
            extra=stroke(bez((bx,by+8),(bx+sw*.2*K,by-sw*1.2*K),(bx+sw*1.3*K,by-sw*2.4*K),(bx+sw*2.8*K,by-sw*2.0*K)),sw*1.0)
        elif mark=='stroke':
            h=y1-y0;extra=stroke([(x0-sw*.4,y0+h*.28),(x1+sw*.6,y0+h*.58)],sw*1.0)
        pen=TTGlyphPen(gs)
        rp=base_contours(ch);rp.replay(pen)
        for c in extra:
            if poly_area(c)>0:c=c[::-1]   # clockwise = outer in TrueType
            pen.moveTo((round(c[0][0]),round(c[0][1])))
            for p in c[1:]:pen.lineTo((round(p[0]),round(p[1])))
            pen.closePath()
        g=pen.glyph();name='u%04X'%ord(newch)
        if name not in f['glyf'].glyphs:order.append(name)
        f['glyf'][name]=g;adv=f['hmtx'][cm[ord(ch)]][0]
        if mark=='ogonek':adv+=0
        f['hmtx'][name]=(adv,0)
        for t in f['cmap'].tables:
            if t.isUnicode():t.cmap[ord(newch)]=name
    pairs=[('a','ogonek','ą'),('e','ogonek','ę'),('A','ogonek','Ą'),('E','ogonek','Ę'),('c','acute','ć'),('C','acute','Ć'),('n','acute','ń'),('N','acute','Ń'),('s','acute','ś'),('S','acute','Ś'),('z','acute','ź'),('Z','acute','Ź'),('z','dot','ż'),('Z','dot','Ż'),('l','stroke','ł'),('L','stroke','Ł'),('o','acute','ó'),('O','acute','Ó')]
    for ch,mk,nc in pairs:
        if ord(nc) in cm and nc in 'óÓ' and 'sh' in src: continue
        make(ch,mk,nc)
    f.setGlyphOrder(order)
    f['glyf'].glyphOrder=order
    f.save(out)
# put the licensed original fonts next to this file as biro.ttf and sh.ttf, then run this script


# stronger comma for Simple Handmade
f=TTFont('sh2.ttf');cm=f.getBestCmap();gs=f.getGlyphSet();nm=cm[ord(',')]
pen=TTGlyphPen(gs)
for c in [circle(62,22,27)]+stroke(bez((66,10),(70,-30),(55,-70),(30,-105)),28):
    if poly_area(c)>0:c=c[::-1]
    pen.moveTo((round(c[0][0]),round(c[0][1])))
    for p in c[1:]:pen.lineTo((round(p[0]),round(p[1])))
    pen.closePath()
f['glyf'][nm]=pen.glyph();f['hmtx'][nm]=(150,0);f.save('sh2.ttf')
