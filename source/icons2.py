import base64
def S(inner,gaps=()):
    g=''.join(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="#000"/>' for x,y,w,h in gaps)
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><mask id="m"><rect width="24" height="24" fill="#fff"/>'+g+'</mask></defs>'
            '<g mask="url(#m)" fill="#000">'+inner+'</g></svg>')
st=lambda d,w=2.2:f'<path d="{d}" fill="none" stroke="#000" stroke-width="{w}"/>'
FR=lambda x,y,w,h,t=2.2:f'<path d="M{x} {y}h{w}v{h}h-{w}z M{x+t} {y+t}v{h-2*t}h{w-2*t}v-{h-2*t}z" fill-rule="evenodd"/>'
I={}
I['folder']=S('<path d="M2 4h8l2 3h10v14H2z M4.2 9.2v9.6h15.6V9.2z" fill-rule="evenodd"/>',[(9.6,17,1.6,6)])
I['folder2']=S('<path d="M2 4h8l2 3h10v14H2z M4.2 9.2v9.6h15.6V9.2z" fill-rule="evenodd"/><rect x="7" y="12" width="10" height="1.8"/><rect x="7" y="15.2" width="6" height="1.8"/>',[(9.6,3,1.6,3)])
I['home']=S('<path d="M12 2.2L23 11.5H20.6V21.5H3.4V11.5H1z M5.6 11.6v7.7h12.8v-7.7L12 6.2z" fill-rule="evenodd"/><rect x="10" y="14.5" width="4" height="7"/>',[(17,5,1.6,3.4)])
I['doc']=S(FR(5,2,14,20)+'<rect x="9" y="11" width="6" height="1.8"/><rect x="9" y="14.6" width="6" height="1.8"/>',[(15.6,1,1.6,4)])
I['cv']=S(FR(5,2,14,20)+'<circle cx="12" cy="10.2" r="2.2"/><path d="M8 18.2a4 4 0 0 1 8 0z"/>',[(15.6,1,1.6,4)])
I['mail']=S(FR(2,5,20,14)+st('M4 6.6L12 13l8-6.4',2),[(11.2,4,1.8,3)])
I['terminal']=S(FR(2,4,20,16)+st('M6 9l4 3-4 3',2.2)+'<rect x="12" y="14.6" width="6" height="1.9"/>',[(17,3,1.6,4)])
I['notes']=S(FR(6,3,15,18)+'<rect x="2" y="7" width="6" height="2"/><rect x="2" y="11" width="6" height="2"/><rect x="2" y="15" width="6" height="2"/><rect x="10" y="8" width="7" height="1.8"/><rect x="10" y="12" width="5" height="1.8"/>',[(14,2,1.6,3)])
I['github']=S('<circle cx="6.5" cy="5.5" r="2.7"/><circle cx="6.5" cy="18.5" r="2.7"/><circle cx="17.5" cy="9" r="2.7"/><rect x="5.5" y="7.6" width="2" height="8.8"/>'+st('M17.5 11.5v1q0 3-5 3.5h-2.5',2),[(4,11.2,5,1.4)])
I['linkedin']=S('<circle cx="5" cy="5.2" r="2.3"/><rect x="2.8" y="9.5" width="4.4" height="12"/><path d="M10 9.5h3.6v1.7c.8-1.3 2.2-1.9 3.8-1.9 3 0 4.6 1.8 4.6 5.2v7h-4v-6.4c0-1.5-.7-2.2-1.9-2.2-1.2 0-2.1.8-2.1 2.4v6.2h-4z"/>')
I['box']=S('<path d="M12 2l9.5 5L12 12 2.5 7z"/><path d="M2.5 9.4L11 13.8V22L2.5 17.4z"/><path d="M21.5 9.4L13 13.8V22l8.5-4.6z"/>')
I['headset']=S(st('M4.2 14v-2a7.8 7.8 0 0 1 15.6 0v2',2.2)+'<rect x="2" y="13" width="5" height="8"/><rect x="17" y="13" width="5" height="8"/>'+st('M19.5 21q0 1.6-4.5 1.8',1.8),[(11.2,3,1.6,2.5)])
I['pill']=S('<g transform="rotate(-45 12 12)"><path d="M9.5 8H6a4 4 0 0 0 0 8h3.5z"/><path d="M11.5 8H18a4 4 0 0 1 0 8h-6.5z M13.2 10v4H18a2 2 0 0 0 0-4z" fill-rule="evenodd"/></g>')
I['graph']=S(st('M3 3v18h18',2.2)+st('M7 16.5l4-5 3 3 5-7',2.2)+'<circle cx="19" cy="7.5" r="1.8"/>')
I['book']=S('<path d="M2.5 4H10a2 2 0 0 1 2 2v15.5a2 2 0 0 0-2-2H2.5z"/><path d="M21.5 4H14a2 2 0 0 0-2 2v15.5a2 2 0 0 1 2-2h7.5z"/>',[(11.2,3,1.6,2)])
I['globe']=S('<circle cx="12" cy="12" r="9.5" fill="none" stroke="#000" stroke-width="2.2"/><ellipse cx="12" cy="12" rx="4.2" ry="9.5" fill="none" stroke="#000" stroke-width="2"/><rect x="2" y="11" width="20" height="2"/>')
I['speaker']=S('<path d="M2.5 9h4l6-5v16l-6-5h-4z"/>'+st('M15.5 8.8a4.6 4.6 0 0 1 0 6.4',2)+st('M18.4 5.8a8.8 8.8 0 0 1 0 12.4',2))
I['mute']=S('<path d="M2.5 9h4l6-5v16l-6-5h-4z"/>'+st('M16 9.5l5.5 5M21.5 9.5l-5.5 5',2.2))
I['sun']=S('<circle cx="12" cy="12" r="4.6"/>'+st('M12 1.5v3.2M12 19.3v3.2M1.5 12h3.2M19.3 12h3.2M4.6 4.6l2.2 2.2M17.2 17.2l2.2 2.2M19.4 4.6l-2.2 2.2M6.8 17.2l-2.2 2.2',2.2))
I['moon']=S('<path d="M20.5 15A9 9 0 0 1 9 3.5a9 9 0 1 0 11.5 11.5z"/>')
I['grid']=S('<rect x="2.5" y="3" width="11" height="8"/><rect x="15.5" y="3" width="6" height="8"/><rect x="2.5" y="13" width="6" height="8"/><rect x="10.5" y="13" width="11" height="8"/>')
I['logo']=S('<rect x="1.5" y="3" width="3.4" height="18"/><rect x="4.9" y="3" width="6" height="3.2"/><rect x="10.6" y="5.2" width="3.4" height="5"/><rect x="4.9" y="9.6" width="6" height="3.2"/><path d="M7.8 13.2h3.6l3.4 7.8h-3.8z"/><rect x="15.6" y="3" width="7.4" height="3.2"/><rect x="17.8" y="6.2" width="3.4" height="14.8"/>',[(4.6,9,0.0,0)])
I['note']=I['doc']
I['heart']=I['logo']
# window keys
I['g-min']=S('<rect x="5" y="16" width="14" height="3"/>')
I['g-max']=S(FR(4.5,4.5,15,15,2.6))
I['g-close']=S('<path d="M5 7.2L7.2 5 19 16.8 16.8 19z"/><path d="M16.8 5L19 7.2 7.2 19 5 16.8z"/>')
I['g-rest']=S(FR(8.5,3.5,12,12,2.4)+'<path d="M3.5 8.5h11v11h-11z M5.8 10.8v6.4h6.4v-6.4z" fill-rule="evenodd"/>')
I['g-grip']=S('<path d="M22 8L8 22M22 14L14 22M22 20L20 22" stroke="#000" stroke-width="2" fill="none"/>')

I['prev']=S('<rect x="4" y="5" width="3" height="14"/><path d="M20 5v14L8.5 12z"/>')
I['next']=S('<rect x="17" y="5" width="3" height="14"/><path d="M4 5v14l11.5-7z"/>')
I['play']=S('<path d="M6 3.5v17L21 12z"/>')
I['pause']=S('<rect x="5" y="4" width="5" height="16"/><rect x="14" y="4" width="5" height="16"/>')
I['search']=S('<path d="M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z M10 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" fill-rule="evenodd"/><path d="M14.6 16.2l2-1.8 5.6 5.6-2 2z"/>')
I['link']=S('<path d="M13 3h8v8h-2.4V6.7L10.9 14.4 9.2 12.7l7.7-7.7H13z"/><path d="M3 7h6v2.2H5.2v9.6h9.6V15H17v6H3z"/>')

I['flip']=S('<path d="M2 4.5h13V2l7 4-7 4V7.5H2z"/><path d="M22 15.5H9V13l-7 4 7 4v-2.5h13z"/>')
I['left']=S('<path d="M15.5 3L6 12l9.5 9 2.5-2.6L11.4 12 18 5.6z"/>')
I['right']=S('<path d="M8.5 3L18 12l-9.5 9L6 18.4 12.6 12 6 5.6z"/>')
I['star']=S('<path d="M12 1.5l2.9 7.6 8.1.4-6.3 5.1 2.1 7.9L12 18l-6.8 4.5 2.1-7.9L1 9.5l8.1-.4z"/>')
def datauri(n): return 'data:image/svg+xml;base64,'+base64.b64encode(I[n].encode()).decode()
def css():
    v=':root{'+''.join(f'--i-{n}:url("{datauri(n)}");' for n in I)+'}\n'
    v+='.px{display:inline-block;width:18px;height:18px;flex:none;vertical-align:-4px;background:currentColor;-webkit-mask:var(--m) center/contain no-repeat;mask:var(--m) center/contain no-repeat;}\n'
    v+='.px.s2{width:34px;height:34px;vertical-align:middle;}.px.s3{width:48px;height:48px;vertical-align:middle;}.px.s15{width:26px;height:26px;vertical-align:-7px;}\n'
    v+=''.join(f'.px-{n}{{--m:var(--i-{n});}}\n' for n in I)
    return v
if __name__=='__main__':
    import cairosvg
    from PIL import Image
    names=[n for n in I if not n.startswith('g-')]; W=len(names)
    sheet=Image.new('RGB',(W*72,80),'#efe8d6')
    for i,n in enumerate(names):
        png=cairosvg.svg2png(bytestring=I[n].encode(),output_width=56,output_height=56)
        open('/tmp/ic.png','wb').write(png); im=Image.open('/tmp/ic.png').convert('RGBA')
        sheet.paste((27,26,23),(i*72+8,12),im)
    sheet.save('/tmp/iconsheet.png'); print(W)
