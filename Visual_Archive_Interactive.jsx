const { useState, useEffect } = React;

const CATS = [
  "All","Immersive Environment / Perceptual Systems","Wearables / Body-Centric Interaction",
  "Generative Systems / Algorithmic Aesthetics","Minimal Materiality / Spatial Calm",
  "Feedback Systems / Embodied Tech","Conceptual Systems / Representation",
  "Data Immersion / Computational Aesthetics","Biometric Interaction / Collective Presence",
];

const CC = {
  "Immersive Environment / Perceptual Systems":"#f5a623",
  "Wearables / Body-Centric Interaction":"#c471ed",
  "Generative Systems / Algorithmic Aesthetics":"#50e3c2",
  "Minimal Materiality / Spatial Calm":"#d4c5a9",
  "Feedback Systems / Embodied Tech":"#e74c3c",
  "Conceptual Systems / Representation":"#7ec8e3",
  "Data Immersion / Computational Aesthetics":"#4ecdc4",
  "Biometric Interaction / Collective Presence":"#ff6b6b",
};

// Image URLs: primary = confirmed working from fetched pages or Wikimedia Commons
const DATA = [
  { id:1, title:"Ascent (white)", artist:"Karolina Halatek", year:"2020",
    medium:"Installation with light and haze",
    img:"https://static.designboom.com/wp-content/uploads/2022/10/light-fog-installation-karolina-halatek-ascent-designboom-600-1.jpg",
    citation:'Halatek, Karolina. Ascent (white), 2020. Installation with light and haze.',
    url:"https://www.karolinahalatek.com/Ascent-white",
    annotation:"Envelops viewers in a vertical spiral of light and atmospheric haze, transforming negative space into a luminous environment.",
    cat:"Immersive Environment / Perceptual Systems",
    relevance:"Exemplifies my interest in environments that alter internal experience rather than presenting information.",
    kw:["immersive","light + atmosphere","perception","spatial experience"],
    grad:"linear-gradient(135deg,#0a0a2e,#1a1a3e,#f5f5ff)" },

  { id:2, title:"Returning the Gaze", artist:"Behnaz Farahi", year:"2022",
    medium:"Cyber-physical robotic installation",
    img:"https://behnazfarahi.com/returning-the-gaze/returning-the-gaze-01.jpg",
    citation:'Farahi, Behnaz. Returning the Gaze, 2022. Robotic installation for ANNAKIKI Milan Fashion Week.',
    url:"https://behnazfarahi.com/returning-the-gaze/",
    annotation:"A model wears a headpiece with cameras tracking her eyes; her gaze is enlarged on monitors on robotic arms, directed back at observers.",
    cat:"Wearables / Body-Centric Interaction",
    relevance:"Explores how technology mediates interpersonal experience through bodily presence and agency.",
    kw:["wearables","body interface","social interaction","responsive technology"],
    grad:"linear-gradient(135deg,#0d0020,#2a0845,#c471ed)" },

  { id:3, title:"Software Portfolio", artist:"Katharina Brunner", year:"2024",
    medium:"Digital generative artworks",
    img:"https://katharinabrunner.de/wp-content/uploads/2023/08/generative-art-katharina-brunner-1.png",
    citation:'Brunner, Katharina. Software Portfolio, 2024. Digital generative artworks.',
    url:"https://katharinabrunner.de/software-portfolio/",
    annotation:"Algorithmically generated geometric compositions revealing subtle variation through rule-based systems.",
    cat:"Generative Systems / Algorithmic Aesthetics",
    relevance:"Embodies my interest in processes over static forms — rule sets that generate experience.",
    kw:["generative art","algorithmic logic","systems behavior","emergent form"],
    grad:"linear-gradient(135deg,#0a1a0d,#1a3a2d,#50e3c2)" },

  { id:4, title:"Residential Interior Project", artist:"Rikai Interior", year:"2023",
    medium:"Minimal interior design",
    img:"https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/3bf26e145577599.629c2f9a0b3a1.jpg",
    citation:'Rikai Interior. Residential Interior Project, 2023.',
    url:"https://www.behance.net/gallery/145577599/Respublika_31",
    annotation:"Calm, minimal interior emphasizing soft materials, neutral tones, and quiet composition.",
    cat:"Minimal Materiality / Spatial Calm",
    relevance:"Reveals my preference for balanced environments — how space and material intervene in perception.",
    kw:["minimalism","spatial calm","materiality","atmosphere"],
    grad:"linear-gradient(135deg,#1a1812,#2a261e,#d4c5a9)" },

  { id:5, title:'"monument" 1 for V. Tatlin', artist:"Dan Flavin", year:"1964",
    medium:"Fluorescent light installation",
    img:"https://cdn.sanity.io/images/juzvn5an/release-adp/93e9ec6973ac508d940bbe53a033ce1bb0452ec9-1440x1920.jpg?w=800",
    citation:'Flavin, Dan. "monument" 1 for V. Tatlin, 1964. Fluorescent light. MoMA, New York.',
    url:"https://www.davidzwirner.com/artworks/dan-flavin--monument-1-for-v-tatlin-11300",
    annotation:"Industrial fluorescent lights arranged to define space through glow and shadow rather than mass.",
    cat:"Immersive Environment / Perceptual Systems",
    relevance:"Shows how light installations shape space and bodily navigation without screens.",
    kw:["light installation","spatial experience","perceptual shift","minimal systems"],
    grad:"linear-gradient(135deg,#1a0a00,#cc8844,#fff)" },

  { id:6, title:"TV Buddha", artist:"Nam June Paik", year:"1974",
    medium:"Closed-circuit video sculpture",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Nam_June_Paik_TV-Buddha.jpg/800px-Nam_June_Paik_TV-Buddha.jpg",
    citation:'Paik, Nam June. TV Buddha, 1974. Closed-circuit video sculpture.',
    url:"https://en.wikipedia.org/wiki/TV_Buddha",
    annotation:"A Buddha statue observes its own live video feed, collapsing subject and viewer into a feedback loop.",
    cat:"Feedback Systems / Embodied Tech",
    relevance:"Connects to my interest in interaction loops and embodiment.",
    kw:["feedback loop","embodiment","interactive systems","mediation"],
    grad:"linear-gradient(135deg,#0f0a0a,#2a1515,#e74c3c)" },

  { id:7, title:"(Dés)Ordres", artist:"Vera Molnár", year:"1974",
    medium:"Digital plotter drawing",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Desordres_by_Vera_Molnar.jpg/800px-Desordres_by_Vera_Molnar.jpg",
    citation:'Molnár, Vera. (Dés)Ordres, 1974. Digital plotter drawing.',
    url:"https://en.wikipedia.org/wiki/Vera_Moln%C3%A1r",
    annotation:"Compositions created with algorithmic rules and mechanical plotters — system and repetition over subjective mark making.",
    cat:"Generative Systems / Algorithmic Aesthetics",
    relevance:"Supports my interest in rules-based visual systems.",
    kw:["generative art","algorithmic systems","ordered form","process"],
    grad:"linear-gradient(135deg,#f5f5f0,#e0e0d8,#333)" },

  { id:8, title:"Princesse X", artist:"Constantin Brancusi", year:"1915–16",
    medium:"Bronze sculpture",
    img:"https://upload.wikimedia.org/wikipedia/en/a/a5/Brancusi_Princess_X.jpg",
    citation:'Brancusi, Constantin. Princesse X, 1915–16. Bronze.',
    url:"https://en.wikipedia.org/wiki/Princess_X",
    annotation:"Sleek, near-abstract bronze form exploring bodily suggestion through minimal curve and surface.",
    cat:"Minimal Materiality / Spatial Calm",
    relevance:"Resonates with soft minimalism and embodied suggestion.",
    kw:["minimal form","body suggestion","material surface","abstraction"],
    grad:"linear-gradient(135deg,#1a1810,#c4a050,#f0e8d0)" },

  { id:9, title:"One and Three Chairs", artist:"Joseph Kosuth", year:"1965",
    medium:"Conceptual installation",
    img:"https://upload.wikimedia.org/wikipedia/en/e/e5/One_and_Three_Chairs.jpg",
    citation:'Kosuth, Joseph. One and Three Chairs, 1965. MoMA, New York.',
    url:"https://www.moma.org/collection/works/81435",
    annotation:'Juxtaposes a chair, its photograph, and its dictionary definition — interrogating representation and presence.',
    cat:"Conceptual Systems / Representation",
    relevance:"Systems that mediate understanding, not just represent form.",
    kw:["conceptual art","representation","language","embodiment"],
    grad:"linear-gradient(135deg,#0a0f14,#1a2530,#7ec8e3)" },

  { id:10, title:"The Weather Project", artist:"Olafur Eliasson", year:"2003",
    medium:"Installation with monofrequency lamps and mist",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TheWeatherProject.jpg/1024px-TheWeatherProject.jpg",
    citation:'Eliasson, Olafur. The Weather Project, 2003. Tate Modern, London.',
    url:"https://www.tate.org.uk/whats-on/tate-modern/unilever-series/unilever-series-olafur-eliasson-weather-project",
    annotation:"Industrial light and mist simulate a sunrise within the Turbine Hall.",
    cat:"Immersive Environment / Perceptual Systems",
    relevance:"Supports my focus on experience and perception — transforming how visitors relate to light and each other.",
    kw:["immersion","environment","light experience","perception","collective presence"],
    grad:"linear-gradient(135deg,#1a0800,#cc6600,#ffcc00)" },

  { id:11, title:"Afrum I (White)", artist:"James Turrell", year:"1967",
    medium:"Cross Corner Projection",
    img:"https://upload.wikimedia.org/wikipedia/en/7/72/Afrum_Pale_Blue_2023.jpg",
    citation:'Turrell, James. Afrum I (White), 1967. Guggenheim Museum, New York.',
    url:"https://en.wikipedia.org/wiki/James_Turrell",
    annotation:"High-intensity light projection casts a glowing cube in a darkened room — entirely constructed by perception.",
    cat:"Immersive Environment / Perceptual Systems",
    relevance:"The viewer is complicit in constructing what they see — directly informs my interest in active perceptual co-creation.",
    kw:["perceptual art","light projection","illusion","spatial perception"],
    grad:"linear-gradient(135deg,#000022,#000044,#8888ff)" },

  { id:12, title:"Pulse Room", artist:"Rafael Lozano-Hemmer", year:"2006",
    medium:"Interactive installation with light bulbs and heart rate sensors",
    img:"https://www.lozano-hemmer.com/image_sets/pulse_room/manchester_2007/pulse_room_manchester_2007_10.jpg",
    citation:'Lozano-Hemmer, Rafael. Pulse Room, 2006. MoMA, New York.',
    url:"https://www.lozano-hemmer.com/pulse_room.php",
    annotation:"Up to 300 bulbs flash in sync with participants' heartbeats — a cumulative archive of biological rhythms.",
    cat:"Biometric Interaction / Collective Presence",
    relevance:"Externalizes involuntary biological signals — the body made visible and shared.",
    kw:["biometric data","heartbeat","interactive installation","collective embodiment"],
    grad:"linear-gradient(135deg,#100a0a,#2a0a0a,#ff6b6b)" },

  { id:13, title:"Archive Dreaming", artist:"Refik Anadol", year:"2017",
    medium:"Immersive media installation with machine learning",
    img:"https://refikanadol.com/wp-content/uploads/2024/03/9-RAS_Archive_Dreaming_2017_Photo_by_Refik_Anadol_Studio-1536x1024.jpg",
    citation:'Anadol, Refik. Archive Dreaming, 2017. SALT Research, Istanbul.',
    url:"https://refikanadol.com/works/archive-dreaming/",
    annotation:"ML algorithms sort 1.7M documents; when idle, the installation 'dreams' of unexpected correlations.",
    cat:"Data Immersion / Computational Aesthetics",
    relevance:"Introduces machine intelligence as creative collaborator into immersive environments.",
    kw:["machine learning","data visualization","immersive architecture","AI art"],
    grad:"linear-gradient(135deg,#050510,#0a0a30,#4ecdc4)" },

  { id:14, title:"data.tron", artist:"Ryoji Ikeda", year:"2007",
    medium:"Audiovisual installation",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ryoji_Ikeda_-_data-verse_1_%2851463538704%29.jpg/1024px-Ryoji_Ikeda_-_data-verse_1_%2851463538704%29.jpg",
    citation:'Ikeda, Ryoji. data.tron, 2007. Co-produced by Le Fresnoy and Forma.',
    url:"https://www.ryojiikeda.com/project/datamatics/",
    annotation:"Each pixel mathematically calculated; projected with synchronized sound immersing visitors in data streams.",
    cat:"Data Immersion / Computational Aesthetics",
    relevance:"Austere mathematical pole of data-driven immersion — counterpoint to Anadol.",
    kw:["data art","mathematical visualization","audiovisual","digital sublime"],
    grad:"linear-gradient(135deg,#000,#001100,#00ff00)" },

  { id:15, title:"Third Hand", artist:"Stelarc", year:"1980–1998",
    medium:"Prosthetic performance with electronics",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Stelarc%2C_Ear_on_Arm.jpg/800px-Stelarc%2C_Ear_on_Arm.jpg",
    citation:'Stelarc. Third Hand, 1980–1998. Prosthetic performance.',
    url:"https://en.wikipedia.org/wiki/Stelarc",
    annotation:"Mechanical hand attached as additional appendage, controlled by muscle signals. Performed over two decades.",
    cat:"Wearables / Body-Centric Interaction",
    relevance:"Radicalizes wearables — prosthetic as excess, extending embodied agency.",
    kw:["prosthetic augmentation","body extension","performance art","cyborg"],
    grad:"linear-gradient(135deg,#0d0a1a,#1a1030,#c471ed)" },

  { id:16, title:"Crystal Universe", artist:"teamLab", year:"2018",
    medium:"Interactive LED installation",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/TeamLab_Borderless%2C_Crystal_Universe.jpg/1024px-TeamLab_Borderless%2C_Crystal_Universe.jpg",
    citation:'teamLab. Wander through the Crystal World, 2018. teamLab Borderless, Tokyo.',
    url:"https://www.teamlab.art/e/tokyo/",
    annotation:"Immersive room of LED lights with mirrors creating an infinite crystalline universe responsive to visitors.",
    cat:"Immersive Environment / Perceptual Systems",
    relevance:"Extends Eliasson into the digital age — environments without fixed boundaries.",
    kw:["immersive environment","interactive light","borderless","participatory art"],
    grad:"linear-gradient(135deg,#000020,#001050,#00ccff)" },

  { id:17, title:"Infinity Mirrored Room", artist:"Yayoi Kusama", year:"2013",
    medium:"Mirrors, LED lighting, acrylic balls, water",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Infinity_mirror_room_-_Yayoi_Kusama_-_Henie_Onstad_Kunstsenter_2015_%2825007503420%29.jpg/800px-Infinity_mirror_room_-_Yayoi_Kusama_-_Henie_Onstad_Kunstsenter_2015_%2825007503420%29.jpg",
    citation:'Kusama, Yayoi. Infinity Mirrored Room, 2013. The Broad, Los Angeles.',
    url:"https://www.thebroad.org/art/yayoi-kusama/infinity-mirrored-room-souls-millions-light-years-away",
    annotation:"Mirrored chamber of LEDs extending infinitely, dissolving boundaries between body and void.",
    cat:"Immersive Environment / Perceptual Systems",
    relevance:"Introduces interiority and isolation within immersion.",
    kw:["infinity","mirrors","immersion","bodily dissolution","perceptual environment"],
    grad:"linear-gradient(135deg,#000010,#110022,#ff44aa)" },

  { id:18, title:"Rain Room", artist:"Random International", year:"2012",
    medium:"Water, solenoid valves, 3D tracking cameras",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Random_International_-_Rain_Room_2012_%282%29.jpg/1024px-Random_International_-_Rain_Room_2012_%282%29.jpg",
    citation:'Random International. Rain Room, 2012. Originally Barbican, London.',
    url:"https://random-international.com/work/rain-room/",
    annotation:"Continuous rainfall pauses above visitors detected by 3D tracking — body shapes the system.",
    cat:"Feedback Systems / Embodied Tech",
    relevance:"Extends the feedback loop into the tactile domain — body as sensor and trigger.",
    kw:["responsive environment","body tracking","rain simulation","interactive systems"],
    grad:"linear-gradient(135deg,#0a0a0f,#1a1a2f,#4488aa)" },

  { id:19, title:"Kinematics Dress", artist:"Nervous System", year:"2014",
    medium:"3D-printed nylon, generative design algorithm",
    img:"https://n-e-r-v-o-u-s.com/projects/sets/kinematics-dress/content/hi/kinematics-dress_1.jpg",
    citation:'Rosenkrantz & Louis-Rosenberg. Kinematics Dress, 2014. MoMA, New York.',
    url:"https://n-e-r-v-o-u-s.com/blog/?p=6280",
    annotation:"3D-printed dress of thousands of interlocking panels, uniquely shaped by folding and draping algorithms.",
    cat:"Generative Systems / Algorithmic Aesthetics",
    relevance:"Merges generative systems with body-centric interaction — algorithmic logic on the body.",
    kw:["generative design","3D printing","wearable","computational fabrication"],
    grad:"linear-gradient(135deg,#1a1a1a,#333,#aaddcc)" },

  { id:20, title:"Sonic Meditations", artist:"Pauline Oliveros", year:"1974",
    medium:"Text score and performance practice",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Pauline_Oliveros_at_ONCE_Festival_1966.jpg/800px-Pauline_Oliveros_at_ONCE_Festival_1966.jpg",
    citation:'Oliveros, Pauline. Sonic Meditations, 1974. Smith Publications.',
    url:"https://paulineoliveros.us/deep-listening/",
    annotation:"Text-based scores for deep, attentive listening — treating listening as creative, embodied act.",
    cat:"Conceptual Systems / Representation",
    relevance:"Introduces auditory dimension — paralleling Turrell in the acoustic domain.",
    kw:["deep listening","sonic practice","perception","embodiment","participatory score"],
    grad:"linear-gradient(135deg,#0a0f14,#15202a,#7ec8e3)" },
];

function Img({d,style,onClick}){
  const [ok,setOk]=useState(true);
  const a=CC[d.cat]||"#888";
  if(!ok) return <div style={{...style,background:d.grad,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:16,textAlign:"center",cursor:onClick?"pointer":"default"}} onClick={onClick}>
    <div style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:15,color:"#fff",opacity:.9,textShadow:"0 2px 8px rgba(0,0,0,.6)",marginBottom:4}}>{d.title}</div>
    <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:a}}>{d.artist}, {d.year}</div>
  </div>;
  return <img src={d.img} alt={d.title} referrerPolicy="no-referrer" crossOrigin="anonymous" onError={()=>setOk(false)} onClick={onClick} style={{...style,objectFit:"cover",cursor:onClick?"pointer":"default"}} />;
}

function Card({d,onClick,i}){
  const a=CC[d.cat]||"#888";
  const [h,setH]=useState(false);
  return <div onClick={()=>onClick(d)} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
    cursor:"pointer",background:"#111113",borderRadius:12,overflow:"hidden",
    border:h?`1px solid ${a}44`:"1px solid rgba(255,255,255,.06)",
    transform:h?"translateY(-6px) scale(1.01)":"none",boxShadow:h?`0 12px 40px ${a}22`:"none",
    transition:"all .35s cubic-bezier(.4,0,.2,1)",animation:`fi .5s ease both`,animationDelay:`${i*.04}s`,
  }}>
    <div style={{position:"relative",paddingTop:"70%",overflow:"hidden",background:"#0a0a0c"}}>
      <div style={{position:"absolute",inset:0}}><Img d={d} style={{width:"100%",height:"100%",display:"block"}}/></div>
      <div style={{position:"absolute",top:10,left:10,background:"rgba(0,0,0,.7)",backdropFilter:"blur(8px)",color:a,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20,fontFamily:"'JetBrains Mono',monospace"}}>{String(d.id).padStart(2,"0")}</div>
    </div>
    <div style={{padding:"14px 16px 18px"}}>
      <div style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:16,color:"#f0ece4",lineHeight:1.25,marginBottom:4}}>{d.title}</div>
      <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginBottom:10}}>{d.artist}, {d.year}</div>
      <span style={{fontSize:9,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",color:a,background:`${a}15`,padding:"3px 8px",borderRadius:4,letterSpacing:.3,textTransform:"uppercase"}}>{d.cat.split(" / ")[0]}</span>
    </div>
  </div>;
}

function Detail({d,onClose}){
  const a=CC[d.cat]||"#888";
  const [imgFull,setImgFull]=useState(false);
  useEffect(()=>{const h=e=>{if(e.key==="Escape"){imgFull?setImgFull(false):onClose();}};window.addEventListener("keydown",h);return()=>window.removeEventListener("keydown",h);},[onClose,imgFull]);

  if(imgFull) return <div onClick={()=>setImgFull(false)} style={{position:"fixed",inset:0,zIndex:2000,background:"rgba(0,0,0,.95)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out",padding:20,animation:"fi .2s ease"}}>
    <img src={d.img} alt={d.title} referrerPolicy="no-referrer" crossOrigin="anonymous" style={{maxWidth:"95vw",maxHeight:"95vh",objectFit:"contain",borderRadius:8}} onError={e=>{e.currentTarget.style.display="none";}}/>
    <div style={{position:"absolute",bottom:20,left:"50%",transform:"translateX(-50%)",fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"#666"}}>Click anywhere or press Esc to close</div>
  </div>;

  return <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:1000,background:"rgba(0,0,0,.88)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,animation:"fi .25s ease"}}>
    <div onClick={e=>e.stopPropagation()} style={{background:"#131315",borderRadius:16,maxWidth:900,width:"100%",maxHeight:"90vh",overflow:"auto",border:`1px solid ${a}30`,boxShadow:`0 30px 80px rgba(0,0,0,.6)`,animation:"su .35s cubic-bezier(.4,0,.2,1)"}}>
      <button onClick={onClose} style={{position:"sticky",top:12,float:"right",marginRight:12,zIndex:10,background:"rgba(255,255,255,.08)",border:"none",color:"#aaa",width:36,height:36,borderRadius:"50%",cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
      <div style={{width:"100%",height:400,overflow:"hidden",borderRadius:"16px 16px 0 0",cursor:"zoom-in"}} onClick={()=>setImgFull(true)}>
        <Img d={d} style={{width:"100%",height:"100%",display:"block"}}/>
        <div style={{position:"relative",top:-36,textAlign:"center"}}>
          <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"rgba(255,255,255,.5)",background:"rgba(0,0,0,.5)",padding:"4px 12px",borderRadius:12,backdropFilter:"blur(4px)"}}>Click image to view full size</span>
        </div>
      </div>
      <div style={{padding:"16px 36px 36px"}}>
        <div style={{display:"inline-block",fontSize:10,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:a,background:`${a}18`,padding:"4px 12px",borderRadius:6,letterSpacing:.5,textTransform:"uppercase",marginBottom:14}}>{d.cat}</div>
        <h2 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:30,fontWeight:400,color:"#f0ece4",margin:"8px 0 4px",lineHeight:1.2}}>{d.title}</h2>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:"#999",marginBottom:20}}>{d.artist} · {d.year} · {d.medium}</div>
        {[{l:"Annotation",t:d.annotation},{l:"Relevance to My Interests",t:d.relevance}].map(s=><div key={s.l} style={{marginBottom:18}}>
          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,fontWeight:700,color:"#666",letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>{s.l}</div>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,lineHeight:1.7,color:"#ccc",margin:0}}>{s.t}</p>
        </div>)}
        <div style={{background:"rgba(255,255,255,.03)",borderLeft:`3px solid ${a}55`,padding:"12px 16px",borderRadius:"0 8px 8px 0",marginBottom:18}}>
          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,fontWeight:700,color:"#666",letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>Citation</div>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,lineHeight:1.6,color:"#aaa",margin:0,fontStyle:"italic"}}>{d.citation}</p>
          {d.url&&<a href={d.url} target="_blank" rel="noopener noreferrer" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:a,textDecoration:"none",display:"inline-block",marginTop:6,borderBottom:`1px solid ${a}44`}}>{d.url.replace(/https?:\/\//,"").substring(0,55)}</a>}
        </div>
        <div style={{display:"flex",flexWrap:"wrap",gap:6}}>{d.kw.map(k=><span key={k} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"#888",background:"rgba(255,255,255,.05)",padding:"4px 10px",borderRadius:20}}>{k}</span>)}</div>
      </div>
    </div>
  </div>;
}

function App(){
  const [f,setF]=useState("All");
  const [sel,setSel]=useState(null);
  const [v,setV]=useState("grid");
  const list=f==="All"?DATA:DATA.filter(d=>d.cat===f);
  return <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
      *{margin:0;padding:0;box-sizing:border-box}
      ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,.1);border-radius:3px}
      @keyframes fi{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
      @keyframes su{from{opacity:0;transform:translateY(30px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes gs{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
    `}</style>
    <div style={{minHeight:"100vh",background:"#09090b",color:"#f0ece4",fontFamily:"'DM Sans',sans-serif"}}>
      <header style={{padding:"48px 36px 32px",borderBottom:"1px solid rgba(255,255,255,.05)"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,fontWeight:600,letterSpacing:3,color:"#555",textTransform:"uppercase",marginBottom:10}}>ARS Visual Culture · Spring 2026</div>
          <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(32px,5vw,52px)",fontWeight:400,lineHeight:1.1,marginBottom:8,background:"linear-gradient(135deg,#f0ece4,#c4a882,#f0ece4)",backgroundSize:"200% 200%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"gs 6s ease infinite"}}>Annotated Image Archive</h1>
          <p style={{fontSize:14,color:"#666",maxWidth:600,lineHeight:1.6,marginBottom:4}}>20 images exploring immersive environments, perceptual systems, embodied interaction, generative aesthetics, and the mediation of experience through technology.</p>
          <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"#444"}}>Jack Yuan · Parsons School of Design</p>
        </div>
      </header>
      <div style={{padding:"18px 36px",borderBottom:"1px solid rgba(255,255,255,.04)",position:"sticky",top:0,zIndex:100,background:"rgba(9,9,11,.92)",backdropFilter:"blur(16px)"}}>
        <div style={{maxWidth:1280,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
          <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
            {CATS.map(c=>{const act=f===c;const col=c==="All"?"#888":(CC[c]||"#888");
              return <button key={c} onClick={()=>setF(c)} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,fontWeight:act?700:500,padding:"5px 12px",borderRadius:20,border:act?`1px solid ${col}`:"1px solid rgba(255,255,255,.08)",background:act?`${col}20`:"transparent",color:act?col:"#666",cursor:"pointer",transition:"all .2s",letterSpacing:.3}}>{c==="All"?`All (${DATA.length})`:c.split(" / ")[0]}</button>})}
          </div>
          <div style={{display:"flex",gap:4}}>
            {["grid","list"].map(m=><button key={m} onClick={()=>setV(m)} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,padding:"5px 10px",borderRadius:6,border:v===m?"1px solid rgba(255,255,255,.2)":"1px solid rgba(255,255,255,.06)",background:v===m?"rgba(255,255,255,.08)":"transparent",color:v===m?"#ddd":"#555",cursor:"pointer",textTransform:"uppercase",letterSpacing:1}}>{m}</button>)}
          </div>
        </div>
      </div>
      <div style={{padding:"14px 36px 0",maxWidth:1280,margin:"0 auto"}}><span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"#444"}}>{list.length} {list.length===1?"work":"works"}{f!=="All"&&` in ${f}`}</span></div>
      <main style={{padding:"20px 36px 60px",maxWidth:1280,margin:"0 auto"}}>
        {v==="grid"?<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:20}}>
          {list.map((d,i)=><Card key={d.id} d={d} onClick={setSel} i={i}/>)}
        </div>:<div style={{display:"flex",flexDirection:"column",gap:10}}>
          {list.map((d,i)=>{const a=CC[d.cat]||"#888";
            return <div key={d.id} onClick={()=>setSel(d)} style={{display:"flex",gap:18,alignItems:"center",padding:"14px 18px",background:"#111113",borderRadius:10,border:"1px solid rgba(255,255,255,.05)",cursor:"pointer",transition:"all .25s",animation:`fi .4s ease both`,animationDelay:`${i*.03}s`}}>
              <div style={{width:72,height:72,borderRadius:8,overflow:"hidden",flexShrink:0}}><Img d={d} style={{width:72,height:72}}/></div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:16,color:"#f0ece4",marginBottom:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{d.title}</div>
                <div style={{fontSize:12,color:"#777"}}>{d.artist} · {d.year}</div>
              </div>
              <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:a,background:`${a}15`,padding:"3px 10px",borderRadius:12,whiteSpace:"nowrap",flexShrink:0}}>{d.cat.split(" / ")[0]}</span>
              <span style={{fontSize:22,color:"#333",flexShrink:0}}>→</span>
            </div>})}
        </div>}
      </main>
      <footer style={{padding:"24px 36px",borderTop:"1px solid rgba(255,255,255,.04)",textAlign:"center"}}><div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"#333",letterSpacing:1}}>Visual Archive · ARS Visual Culture · Parsons School of Design · Spring 2026</div></footer>
    </div>
    {sel&&<Detail d={sel} onClose={()=>setSel(null)}/>}
  </>;
}

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
