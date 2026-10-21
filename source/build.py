import re, json, sys
import os
HERE=os.path.dirname(os.path.abspath(__file__));os.chdir(HERE);sys.path.insert(0,HERE)
import icons2
OUT=sys.argv[1] if len(sys.argv)>1 else os.path.join(HERE,'..','public','site.html')
data=open('data_raw.js',encoding='utf8').read()
facts=open('facts_raw.html',encoding='utf8').read()
facts=facts[:facts.index('<div id="ctxmenu"')]
# ---- copy purge (dashes, middots, arrows, marks, emoji) ----
def purge(s):
    T=[("Finishing my B.Eng. thesis — graduating February 2027.","Finishing my B.Eng. thesis, graduating February 2027."),
       ("— team project, 3 people","(team project, 3 people)"),("— projekt zespołowy, 3 osoby","(projekt zespołowy, 3 osoby)"),
       ("Robert Tworek — Technical","Robert Tworek, Technical"),("Robert Tworek — Informatyka","Robert Tworek, Informatyka"),
       ("2018 — now","2018 to now"),("2018 — obecnie","2018 do dziś"),("2022 — obecnie","2022 do dziś"),("2022 — present","2022 to present"),
       ("2018 — June 2022","2018 to June 2022"),("2018 — czerwiec 2022","2018 do czerwca 2022"),("2018 — 2022","2018 to 2022"),
       ("Copied ✓","Copied"),("Skopiowano ✓","Skopiowano"),("← Back to desktop","Back"),("← Wróć do pulpitu","Wróć")]
    for a,b in T: s=s.replace(a,b)
    s=re.sub(r'(<h4>[^<]*?) — ',r'\1 / ',s)
    s=re.sub(r' — (?=(C#|React|xUnit|Python/Django))',': ',s)
    s=re.sub(r' — (?=[A-ZĄĆĘŁŃÓŚŹŻ])','. ',s)
    s=s.replace(' — ',', ').replace('—',',').replace('–','-')
    s=s.replace(' · ',' / ').replace('·','/')
    s=s.replace(' →','').replace('→','to').replace('←','')
    s=s.replace(' ✓','').replace('✓','').replace('…','...')
    EM=re.compile('[\U0001F300-\U0001FAFF☀-➿⬀-⯿️‍]')
    s=re.sub(r'\s*'+EM.pattern+r'+(?=[\'"`<])','',s)
    s=re.sub(EM.pattern+r'+\s?','',s)
    return s
data=purge(data); facts=purge(facts)
data,nA=re.subn(r'\s*<p>[^<]*Aqua Dial[^<]*</p>','',data); print('aqua removed',nA)
# the notes data references an obsolete "Notes" prefix; nothing else to patch
tracks=[{'src':f'music/track{n:02d}.mp3','title':f'Hopeful Memories {n}'} for n in range(1,13)]
F=json.load(open('fonts.json'))
css=open('card.css').read()
for k,v in F.items(): css=css.replace('{{F_%s}}'%k.upper(),v)
css=icons2.css()+css
js=open('card.js').read().replace('{{DATA}}',data)
facts=facts.replace('<div id="facts">','<div id="facts" class="ov" role="dialog" aria-label="Plain text view">',1).replace('<a class="back" id="facts-close" role="button" tabindex="0" data-k="facts_back">← Back to desktop</a>','<a class="back" id="facts-close" role="button" tabindex="0" data-k="facts_back">Back to the deck</a>')
html=f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Robert Tworek | Junior C#/.NET Developer</title>
<meta name="description" content="Robert Tworek, Junior C#/.NET Developer. A portfolio laid out as a deck of printed cards: projects, background and a plain-text summary.">
<meta property="og:title" content="Robert Tworek | Junior C#/.NET Developer">
<meta property="og:description" content="A portfolio laid out as a deck of printed cards: projects, background and a plain-text summary.">
<meta property="og:type" content="website">
<meta property="og:image" content="https://portfoliotworekrobert.vercel.app/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#b4501f">
<style>
{css}
</style>
</head>
<body>
<a class="skip" href="#facts" data-k="aria_skip">Skip to a plain text view</a>
<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
 <filter id="duo" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="table" tableValues=".227 .957"/><feFuncG type="table" tableValues=".122 .918"/><feFuncB type="table" tableValues=".059 .847"/></feComponentTransfer></filter>
 <filter id="duo-w" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="table" tableValues="0.169 0.965"/><feFuncG type="table" tableValues="0.071 0.902"/><feFuncB type="table" tableValues="0.094 0.863"/></feComponentTransfer></filter><filter id="duo-u" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="table" tableValues="0.137 0.953"/><feFuncG type="table" tableValues="0.110 0.906"/><feFuncB type="table" tableValues="0.047 0.784"/></feComponentTransfer></filter><filter id="duo-r" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="table" tableValues="0.290 0.965"/><feFuncG type="table" tableValues="0.165 0.925"/><feFuncB type="table" tableValues="0.180 0.871"/></feComponentTransfer></filter><filter id="duo-h" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="table" tableValues="0.231 0.969"/><feFuncG type="table" tableValues="0.141 0.929"/><feFuncB type="table" tableValues="0.071 0.824"/></feComponentTransfer></filter><filter id="duo-n" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="table" tableValues=".141 .957"/><feFuncG type="table" tableValues=".078 .918"/><feFuncB type="table" tableValues=".047 .847"/></feComponentTransfer></filter>
</svg>
<header id="top">
 <div class="ctl"><a class="key" href="https://github.com/roposropos" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><i class="ic" style="--m:var(--i-github)"></i></a><a class="key" href="https://linkedin.com/in/tworekrobert" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><i class="ic" style="--m:var(--i-linkedin)"></i></a></div>
 <div class="ctl">
  <button class="key" id="snd-btn" aria-pressed="true"></button>
  <button class="key" id="lang-btn">PL</button>
  <button class="key" id="theme-btn"></button>
  <button class="key" id="facts-btn"></button>
 </div>
</header>
<main id="stage">
 <div id="deck"><div id="cards"></div></div>
 <button class="key side l" id="prev"><i class="ic" style="--m:var(--i-left)"></i></button>
 <button class="key side r" id="next"><i class="ic" style="--m:var(--i-right)"></i></button>
</main>
<nav id="rail" aria-label="Cards"></nav>
<div id="lb" class="ov" role="dialog" aria-modal="true"><button class="key x" aria-label="Close"><i class="ic" style="--m:var(--i-g-close)"></i></button><button class="key p" aria-label="Previous"><i class="ic" style="--m:var(--i-left)"></i></button><img alt=""><div class="cp"></div><button class="key n" aria-label="Next"><i class="ic" style="--m:var(--i-right)"></i></button></div>
{facts}
<div id="toast" role="status" aria-live="polite"></div>
<script>
{js}
</script>
</body>
</html>
'''
open(OUT,'w',encoding='utf8').write(html)
print('wrote',OUT,len(html))
body=re.sub(r'base64,[A-Za-z0-9+/=]{200,}','',html)
EM=re.compile('[\U0001F300-\U0001FAFF☀-➿⬀-⯿️‍]')
print({p:body.count(p) for p in ('—','–','·','→','←','✓','…','&mdash;','&middot;') if body.count(p)},'emoji',len(EM.findall(body)))
