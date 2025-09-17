let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");


let modal = document.getElementById("modal");
let modalpic = document.getElementById("modalpic");
let modbio = document.getElementById("modbio");
let modname = document.getElementById("modname");
let close = document.getElementById("close");
let price = document.getElementById("price");
let linkvm = document.getElementById("linkvm");


let f1 = document.getElementById("f1");
let f2 = document.getElementById("f2");
let f3 = document.getElementById("f3");
let f4 = document.getElementById("f4");

let img = document.getElementById("img");

// Function to set modal size and image styling
function setModalStyle() {
    modal.style.display = "flex";
    // Make modal smaller
    document.getElementById("mcontent").style.width = "60%";
    // Set consistent image size for all pictures
    modalpic.style.width = "120px";
    modalpic.style.height = "120px";
    modalpic.style.objectFit = "contain";
}

btn1.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="openai-chatgpt-CTA.png";
    modname.innerHTML = "ChatGPT";
    modbio.innerHTML= "A conversational AI that can answer questions, generate text, write code, and assist with learning.";
    f1.innerHTML = "Natural, human-like conversations";
    f2.innerHTML = "Strong in coding + debugging";
    f3.innerHTML = "Multilingual support";
    f4.innerHTML = "Best for: Quick examples: \"Students, Writers, Developers\"";
    price.innerHTML="Free, ChatGPT Plus ($20/mo)";
    linkvm.href= "https://chatgpt.com/?utm_source=google&utm_medium=paidsearch_brand&utm_campaign=GOOG_C_SEM_GBR_Core_CHT_BAU_ACQ_PER_MIX_ALL_APAC_IN_EN_032525&utm_term=chatgpt&utm_content=177344203135&utm_ad=744003610701&utm_match=e&gad_source=1&gad_campaignid=22370388714&gbraid=0AAAAA-IW-UUcDESwbLdBP7mOtJ8li0dYo&gclid=Cj0KCQjwwsrFBhD6ARIsAPnUFD1W_zGIEffMEgudepmIZ5Xq9qdQWB7O6TpFyrOKusL9wDQl3o5wSGYaAmfGEALw_wcB";
})

btn2.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="icons8-claude-ai-240.png";
    modname.innerHTML = "Claude";
    modbio.innerHTML= "A safe, ethical AI assistant focused on helpful, honest, and harmless responses.";
    f1.innerHTML = "Great for summarizing long texts";
    f2.innerHTML = "Handles very long context windows";
    f3.innerHTML = "Focus on safe + reliable outputs";
    f4.innerHTML = "Best for: Researchers, professionals, coders";
    price.innerHTML="Free & Pro plans";
    linkvm.href = "https://claude.ai/new";
})

btn3.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="icons8-perplexity-ai-144.png";
    modname.innerHTML = "Perplexity AI";
    modbio.innerHTML= "An AI-powered search engine that gives cited answers with real-time information.";
    f1.innerHTML = "Provides sources for every answer";
    f2.innerHTML = "Combines search + AI chat";
    f3.innerHTML = "Real-time web access";
    f4.innerHTML = "Best For: Research, students, journalists";
    price.innerHTML="Free & Pro ($20/mo)";
    linkvm.href = "https://www.perplexity.ai/";
})

btn4.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="icons8-gemini-ai-144.png";
    modname.innerHTML = "Gemini";
    modbio.innerHTML= "Google's flagship AI that understands text, code, and images.";
    f1.innerHTML = "Multimodal (text + image input)";
    f2.innerHTML = "Deep integration with Google apps";
    f3.innerHTML = "Strong in reasoning & logic";
    f4.innerHTML = "Best For: Google ecosystem users, researchers, coders";
    price.innerHTML="Free & Pro (via Google One AI Premium $20/mo)";
    linkvm.href = "https://gemini.google.com/app";
})

btn5.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="icons8-midjourney-480.png";
    modname.innerHTML = "MidJourney";
    modbio.innerHTML= "AI art generator that creates high-quality images from text prompts.";
    f1.innerHTML = "Stunning realistic + artistic images";
    f2.innerHTML = "Wide style customization";
    f3.innerHTML = "Constantly improving quality";
    f4.innerHTML = "Best For: Designers, artists, marketers";
    price.innerHTML="Paid plans only (from $10/mo)";
    linkvm.href = "https://www.midjourney.com/home";
})

btn6.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="stabled.jpg";
    modname.innerHTML = "Stable Diffusion";
    modbio.innerHTML= "Open-source AI image model for customizable and self-hosted art generation.";
    f1.innerHTML = "Free & open-source";
    f2.innerHTML = "Custom model training (LoRA, checkpoints)";
    f3.innerHTML = "ControlNet & advanced tweaks";
    f4.innerHTML = "Best For: Developers, hobbyists, creators";
    price.innerHTML="Free (open-source), third-party UIs may charge";
    linkvm.href = "https://stablediffusionweb.com/";
})

btn7.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="dalle.webp";
    modname.innerHTML = "DALL·E 3";
    modbio.innerHTML= "OpenAI's image generator integrated with ChatGPT for high-quality, creative visuals.";
    f1.innerHTML = "Generates detailed images from text";
    f2.innerHTML = "Integrated in ChatGPT & Bing";
    f3.innerHTML = "Consistent, realistic results";
    f4.innerHTML = "Best For: Quick design, marketing, content creators";
    price.innerHTML="Free (limited), Paid via ChatGPT Plus";
    linkvm.href = "https://openai.com/index/dall-e-2/";
})

btn8.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="icons8-canva-144.png";
    modname.innerHTML = "Canva AI";
    modbio.innerHTML= "AI-powered features inside Canva for text-to-image, Magic Write, and design suggestions.";
    f1.innerHTML = "AI text-to-image generation";
    f2.innerHTML = "Magic Write (AI copywriting)";
    f3.innerHTML = "Instant design templates";
    f4.innerHTML = "Best For: Social media managers, marketers, beginners";
    price.innerHTML="Free & Pro plans";
    linkvm.href = "https://www.canva.com/ai-assistant/";
})

btn9.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="icons8-cursor-ai-144.png";
    modname.innerHTML = "Cursor";
    modbio.innerHTML= "A VS Code-like editor built with AI to autocomplete, debug, and explain code.";
    f1.innerHTML = "AI pair programmer";
    f2.innerHTML = "Built-in code explanations";
    f3.innerHTML = "Works offline + with local projects";
    f4.innerHTML = "Best For: Developers, students, startups";
    price.innerHTML="Free & Pro plans";
    linkvm.href ="https://cursor.com/";
})

btn10.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="icons8-runway-500.png";
    modname.innerHTML = "Runway";
    modbio.innerHTML= "AI tool for generating and editing videos from text prompts.";
    f1.innerHTML = "Text-to-video generation";
    f2.innerHTML = "AI-powered video editing tools";
    f3.innerHTML = "Green screen & background removal";
    f4.innerHTML = "Best For: Content creators, video editors, marketers";
    price.innerHTML="Free trial & Paid plans";
    linkvm.href = "https://runwayml.com/";
})

btn11.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="icons8-github-copilot-144.png";
    modname.innerHTML = "GitHub Copilot";
    modbio.innerHTML= "An AI coding assistant that suggests code completions directly in your editor.";
    f1.innerHTML = "Autocomplete entire functions";
    f2.innerHTML = "Learns from your coding style";
    f3.innerHTML = "Integrates with VS Code, JetBrains";
    f4.innerHTML = "Best For: Programmers, teams, students";
    price.innerHTML="$10/mo (students free)";
    linkvm.href = "https://github.com/features/copilot";  
})

btn12.addEventListener("click",()=>{
    setModalStyle();
    modalpic.src ="grammarly-1.svg";
    modname.innerHTML = "Grammarly AI";
    modbio.innerHTML= "AI-powered writing tool for grammar, clarity, and tone improvements.";
    f1.innerHTML = "Grammar + spelling correction";
    f2.innerHTML = "Tone detection & suggestions";
    f3.innerHTML = "AI rewriting + idea generation";
    f4.innerHTML = "Best For: Students, professionals, writers";
    price.innerHTML="Free & Premium plans";
    linkvm.href = "https://www.grammarly.com/";
})

close.addEventListener("click",()=>{
    modal.style.display = "none";
})



//Search//
let reset = document.getElementById("reset");
let search = document.getElementById("search");
let seabtn = document.getElementById("seabtn");
let chatgpt = document.getElementById("chatgpt");
let claude = document.getElementById("claude");
let perplexity = document.getElementById("perplexity");
let gemini = document.getElementById("gemini");
let midjourney = document.getElementById("midjourney");
let stable = document.getElementById("stable");
let dalle = document.getElementById("dalle");
let canva = document.getElementById("canva");
let cursor = document.getElementById("cursor");
let runway = document.getElementById("runway");
let github = document.getElementById("github");
let grammarly = document.getElementById("grammarly");

let heading = document.getElementsByClassName("heading");


seabtn.addEventListener("click",()=>{
    if(search.value === "ChatGPT"){
        console.log("009");
        chatgpt.style.display = "block";
        claude.style.display = "none";
        perplexity.style.display = "none";
        gemini.style.display = "none";
        midjourney.style.display = "none";
        stable.style.display = "none";
        dalle.style.display = "none";
        canva.style.display = "none";
        cursor.style.display = "none";
        runway.style.display = "none";
        github.style.display = "none";
        grammarly.style.display = "none";
        head1.style.display = "block";
        head2.style.display = "none";
        head3.style.display = "none";
    } else if (search.value === "Claude AI"){
        console.log("009");
        chatgpt.style.display = "none";
        claude.style.display = "block";
        perplexity.style.display = "none";
        gemini.style.display = "none";
        midjourney.style.display = "none";
        stable.style.display = "none";
        dalle.style.display = "none";
        canva.style.display = "none";
        cursor.style.display = "none";
        runway.style.display = "none";
        github.style.display = "none";
        grammarly.style.display = "none";
        head1.style.display = "block";
        head2.style.display = "none";
        head3.style.display = "none";
    }  else if(search.value === "Perplexity"){
        console.log("009");
        chatgpt.style.display = "none";
        claude.style.display = "none";
        perplexity.style.display = "block";
        gemini.style.display = "none";
        midjourney.style.display = "none";
        stable.style.display = "none";
        dalle.style.display = "none";
        canva.style.display = "none";
        cursor.style.display = "none";
        runway.style.display = "none";
        github.style.display = "none";
        grammarly.style.display = "none"; 
         head1.style.display = "block";
        head2.style.display = "none";
        head3.style.display = "none";
    }  else if(search.value === "Gemini"){
        console.log("009");
        chatgpt.style.display = "none";
        claude.style.display = "none";
        perplexity.style.display = "none";
        gemini.style.display = "block";
        midjourney.style.display = "none";
        stable.style.display = "none";
        dalle.style.display = "none";
        canva.style.display = "none";
        cursor.style.display = "none";
        runway.style.display = "none";
        github.style.display = "none";
        grammarly.style.display = "none";
        head1.style.display = "block";
        head2.style.display = "none";
        head3.style.display = "none";
    }   else if(search.value === "MidJourney"){
        console.log("009");
        chatgpt.style.display = "none";
        claude.style.display = "none";
        perplexity.style.display = "none";
        gemini.style.display = "none";
        midjourney.style.display = "block";
        stable.style.display = "none";
        dalle.style.display = "none";
        canva.style.display = "none";
        cursor.style.display = "none";
        runway.style.display = "none";
        github.style.display = "none";
        grammarly.style.display = "none";
        head1.style.display = "none";
        head2.style.display = "block";
        head3.style.display = "none";
    }
    else if(search.value === "Stable Diffusion"){
        console.log("009");
        chatgpt.style.display = "none";
        claude.style.display = "none";
        perplexity.style.display = "none";
        gemini.style.display = "none";
        midjourney.style.display = "none";
        stable.style.display = "block";
        dalle.style.display = "none";
        canva.style.display = "none";
        cursor.style.display = "none";
        runway.style.display = "none";
        github.style.display = "none";
        grammarly.style.display = "none";
        head1.style.display = "none";
        head2.style.display = "block";
        head3.style.display = "none";
    }  
    else if(search.value === "DALL.E 3"){
        console.log("009");
        chatgpt.style.display = "none";
        claude.style.display = "none";
        perplexity.style.display = "none";
        gemini.style.display = "none";
        midjourney.style.display = "none";
        stable.style.display = "none";
        dalle.style.display = "block";
        canva.style.display = "none";
        cursor.style.display = "none";
        runway.style.display = "none";
        github.style.display = "none";
        grammarly.style.display = "none";
        head1.style.display = "none";
        head2.style.display = "block";
        head3.style.display = "none";
    }  
    else if(search.value === "Canva AI"){
        console.log("009");
        chatgpt.style.display = "none";
        claude.style.display = "none";
        perplexity.style.display = "none";
        gemini.style.display = "none";
        midjourney.style.display = "none";
        stable.style.display = "none";
        dalle.style.display = "none";
        canva.style.display = "block";
        cursor.style.display = "none";
        runway.style.display = "none";
        github.style.display = "none";
        grammarly.style.display = "none";
        head1.style.display = "none";
        head2.style.display = "block";
        head3.style.display = "none";
    }  
    else if(search.value === "Cursor"){
        console.log("009");
        chatgpt.style.display = "none";
        claude.style.display = "none";
        perplexity.style.display = "none";
        gemini.style.display = "none";
        midjourney.style.display = "none";
        stable.style.display = "none";
        dalle.style.display = "none";
        canva.style.display = "none";
        cursor.style.display = "block";
        runway.style.display = "none";
        github.style.display = "none";
        grammarly.style.display = "none";
        head1.style.display = "none";
        head2.style.display = "none";
        head3.style.display = "block";
    }
    else if(search.value === "Runway"){
        console.log("009");
        chatgpt.style.display = "none";
        claude.style.display = "none";
        perplexity.style.display = "none";
        gemini.style.display = "none";
        midjourney.style.display = "none";
        stable.style.display = "none";
        dalle.style.display = "none";
        canva.style.display = "none";
        cursor.style.display = "none";
        runway.style.display = "block";
        github.style.display = "none";
        grammarly.style.display = "none";
        head1.style.display = "none";
        head2.style.display = "none";
        head3.style.display = "block";
    }    
    else if(search.value === "Github Copilot"){
        console.log("009");
        chatgpt.style.display = "none";
        claude.style.display = "none";
        perplexity.style.display = "none";
        gemini.style.display = "none";
        midjourney.style.display = "none";
        stable.style.display = "none";
        dalle.style.display = "none";
        canva.style.display = "none";
        cursor.style.display = "none";
        runway.style.display = "none";
        github.style.display = "block";
        grammarly.style.display = "none";
        head1.style.display = "none";
        head2.style.display = "none";
        head3.style.display = "block";
    }  
    else if(search.value === "Grammarly AI"){
        console.log("009");
        chatgpt.style.display = "none";
        claude.style.display = "none";
        perplexity.style.display = "none";
        gemini.style.display = "none";
        midjourney.style.display = "none";
        stable.style.display = "none";
        dalle.style.display = "none";
        canva.style.display = "none";
        cursor.style.display = "none";
        runway.style.display = "none";
        github.style.display = "none";
        grammarly.style.display = "block";
        head1.style.display = "none";
        head2.style.display = "none";
        head3.style.display = "block";
    } 
    else{
        alert("No Results Found");
    } 
})


reset.addEventListener("click",()=>{
    chatgpt.style.display = "block";
    claude.style.display = "block";
    perplexity.style.display = "block";
    gemini.style.display = "block";
    midjourney.style.display = "block";
    stable.style.display = "block";
    dalle.style.display = "block";
    canva.style.display = "block";
    cursor.style.display = "block";
    runway.style.display = "block";
    github.style.display = "block";
    grammarly.style.display = "block";
    Array.from(heading).forEach(h => h.style.display = "block");
    cb.style.border = "none";
    ig.style.border = "none";
    vg.style.border = "none";
    cd.style.border = "none";
    pd.style.border = "none";
    free.style.border = "none"
    paid.style.border = "none";
});


let cb = document.getElementById("cb");
let ig = document.getElementById("ig");
let vg = document.getElementById("vg");
let cd = document.getElementById("cd");
let pd = document.getElementById("pd");
let free = document.getElementById("free");
let paid = document.getElementById("paid");
let head1 = document.getElementById("head1");
let head2 = document.getElementById("head2");
let head3 = document.getElementById("head3");


cb.addEventListener("click",()=>{
    chatgpt.style.display = "block";
    claude.style.display = "block";
    perplexity.style.display = "block";
    gemini.style.display = "block";
    midjourney.style.display = "none";
    stable.style.display = "none";
    dalle.style.display = "none";
    canva.style.display = "none";
    cursor.style.display = "none";
    runway.style.display = "none";
    github.style.display = "none";
    grammarly.style.display = "none";
    head1.style.display = "block";
    head2.style.display = "none";
    head3.style.display = "none";
    cb.style.border = "2px solid gold";
    ig.style.border = "none";
    vg.style.border = "none";
    cd.style.border = "none";
    pd.style.border = "none";
    free.style.border = "none";
    paid.style.border = "none";

})
ig.addEventListener("click",()=>{
    chatgpt.style.display = "none";
    claude.style.display = "none";
    perplexity.style.display = "none";
    gemini.style.display = "none";
    midjourney.style.display = "block";
    stable.style.display = "block";
    dalle.style.display = "block";
    canva.style.display = "block";
    cursor.style.display = "none";
    runway.style.display = "none";
    github.style.display = "none";
    grammarly.style.display = "none";
    head1.style.display = "none";
    head2.style.display = "block";
    head3.style.display = "none";
    ig.style.border = "2px solid gold";
    cb.style.border = "none";
    vg.style.border = "none";
    cd.style.border = "none";
    pd.style.border = "none";
    free.style.border = "none";
    paid.style.border = "none";
})
vg.addEventListener("click",()=>{
    chatgpt.style.display = "none";
    claude.style.display = "none";
    perplexity.style.display = "none";
    gemini.style.display = "none";
    midjourney.style.display = "none";
    stable.style.display = "none";
    dalle.style.display = "none";
    canva.style.display = "none";
    cursor.style.display = "none";
    runway.style.display = "block";
    github.style.display = "none";
    grammarly.style.display = "none";
    head1.style.display = "none";
    head2.style.display = "none";
    head3.style.display = "block";
    vg.style.border = "2px solid gold";
    ig.style.border = "none";
    cb.style.border = "none";
    cd.style.border = "none";
    pd.style.border = "none";
    free.style.border = "none";
    paid.style.border = "none";
})
cd.addEventListener("click",()=>{
    chatgpt.style.display = "none";
    claude.style.display = "none";
    perplexity.style.display = "none";
    gemini.style.display = "none";
    midjourney.style.display = "none";
    stable.style.display = "none";
    dalle.style.display = "none";
    canva.style.display = "none";
    cursor.style.display = "block";
    runway.style.display = "none";
    github.style.display = "block";
    grammarly.style.display = "none";
    head1.style.display = "none";
        head2.style.display = "none";
        head3.style.display = "block";
    cd.style.border = "2px solid gold";
    ig.style.border = "none";
    vg.style.border = "none";
    cb.style.border = "none";
    pd.style.border = "none";
    free.style.border = "none";
    paid.style.border = "none";
})
pd.addEventListener("click",()=>{
    chatgpt.style.display = "none";
    claude.style.display = "none";
    perplexity.style.display = "none";
    gemini.style.display = "none";
    midjourney.style.display = "none";
    stable.style.display = "none";
    dalle.style.display = "none";
    canva.style.display = "none";
    cursor.style.display = "none";
    runway.style.display = "none";
    github.style.display = "none";
    grammarly.style.display = "block";
    head1.style.display = "none";
        head2.style.display = "none";
        head3.style.display = "block";
    pd.style.border = "2px solid gold";
    ig.style.border = "none";
    vg.style.border = "none";
    cd.style.border = "none";
    cb.style.border = "none";
    free.style.border = "none";
    paid.style.border = "none";
})

free.addEventListener("click",()=>{
    chatgpt.style.display = "block";
    claude.style.display = "block";
    perplexity.style.display = "block";
    gemini.style.display = "block";
    midjourney.style.display = "none";
    stable.style.display = "block";
    dalle.style.display = "block";
    canva.style.display = "block";
    cursor.style.display = "block";
    runway.style.display = "none";
    github.style.display = "none";
    grammarly.style.display = "block";
    head1.style.display = "block";
    head2.style.display = "block";
    head3.style.display = "block";
    pd.style.border = "none";
    ig.style.border = "none";
    vg.style.border = "none";
    cd.style.border = "none";
    cb.style.border = "none";
    free.style.border = "2px solid gold";
    paid.style.border = "none";
})


paid.addEventListener("click",()=>{
    chatgpt.style.display = "none";
    claude.style.display = "none";
    perplexity.style.display = "none";
    gemini.style.display = "none";
    midjourney.style.display = "block";
    stable.style.display = "none";
    dalle.style.display = "none";
    canva.style.display = "none";
    cursor.style.display = "none";
    runway.style.display = "block";
    github.style.display = "block";
    grammarly.style.display = "none";
    head1.style.display = "none";
    head2.style.display = "block";
    head3.style.display = "block";
    pd.style.border = "none";
    ig.style.border = "none";
    vg.style.border = "none";
    cd.style.border = "none";
    cb.style.border = "none";
    free.style.border = "none";
    paid.style.border = "2px solid gold";
})


let AI = {
    "chatgpt":{
        pic:"chatgpt-6.svg",
        namey:"ChatGPT",
        publisher:"Open AI",
        work:"Chat Bot",
        platforms:"Web, Desktop, Mobile, API",
        price:"Free, ChatGPT Plus ($20/mo)",
    },
    "claude":{
        pic:"icons8-claude-ai-240.png",
        namey:"Claude",
        publisher:"Anthropic",
        work:"Chat Bot",
        platforms:"Web, Desktop, Mobile, API",
        price:"Free & Pro plans",
    },
     "perplexity":{
        pic:"icons8-perplexity-ai-144.png",
        namey:"Perplexity AI",
        publisher:"Perplexity AI, Inc.",
        work:"Chat Bot",
        platforms:"Web, Desktop, Mobile, API",
        price:"Free & Pro ($20/mo)",
    },
    "gemini":{
        pic:"icons8-gemini-ai-144.png",
        namey:"Gemini",
        publisher:"META",
        work:"Chat Bot",
        platforms:"Web, Desktop, Mobile, API",
        price:"Free & Pro (via Google One AI Premium $20/mo)",
    },
    "midjourney":{
        pic:"icons8-midjourney-480.png",
        namey:"Mid journey",
        publisher:"Midjourney, Inc.",
        work:"Image Genarators",
        platforms:"Web , Dekstop",
        price:"Paid plans only (from $10/mo)",
    },
    "stable diffusion":{
        pic:"stabled.jpg",
        namey:"Stable Diffusion",
        publisher:"Stability AI",
        work:"Image Genarators",
        platforms:"Web , Dekstop",
        price:"Free (open-source), third-party UIs may charge",
    },
    "DALL·E 3":{
        pic:"dalle.webp",
        namey:"DALL·E 3",
        publisher:"Open AI",
        work:"Image Genarators",
        platforms:"Web , Dekstop",
        price:"Free (limited), Paid via ChatGPT Plus",
    },
    "canva ai":{
        pic:"icons8-canva-144.png",
        namey:"Canva AI",
        publisher:"Canva Pty Ltd",
        work:"Image Genarators",
        platforms:"Web , Dekstop , Mobile",
        price:"Free & Pro plans",
    },
    "cursor ai":{
        pic:"icons8-cursor-ai-144.png",
        namey:"Cursor AI",
        publisher:"Anysphere",
        work:"AI Code Editor",
        platforms:"Dekstop",
        price:"Free & Pro plans",
    },
    "runway ai":{
        pic:"icons8-runway-500.png",
        namey:"Runway AI",
        publisher:"none",
        work:"Video Genarator",
        platforms:"Dekstop",
        price:"Free trial & Paid plans",
    },
     "github copilot":{
        pic:"icons8-github-copilot-144.png",
        namey:"Github Copilot",
        publisher:"Microsoft",
        work:"AI Code Assistant",
        platforms:"Dekstop",
        price:"$10/mo (students free)",
    },
    "grammarly ai":{
        pic:"grammarly-1.svg",
        namey:"Grammarly AI",
        publisher:" Grammarly, Inc",
        work:"AI Writing Tool",
        platforms:"Dekstop , Mobile",
        price:"Free & Premium plans",
    },

}





let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let sub = document.getElementById("sub");
let pic1 = document.getElementById("pic1");
let name1 = document.getElementById("name1");
let parent1 = document.getElementById("parent1");
let work1 = document.getElementById("work1");
let platforms1 = document.getElementById("platforms1");
let price1 = document.getElementById("price1");



let pic2 = document.getElementById("pic2");
let name2 = document.getElementById("name2");
let parent2 = document.getElementById("parent2");
let work2 = document.getElementById("work2");
let platforms2 = document.getElementById("platforms2");
let price2 = document.getElementById("price2");



let com1 = document.getElementById("com1");
let com2 = document.getElementById("com2");


sub.addEventListener("click",()=>{

    com1.style.display = "flex";
    com2.style.display = "flex";


    if (option1.value === "Chatgpt") { 
        pic1.src = AI["chatgpt"].pic;
        name1.innerHTML ="Name: "+AI["chatgpt"].namey;
        parent1.innerHTML = "Parent CO: "+AI["chatgpt"].publisher;
        work1.innerHTML = "Type: "+AI["chatgpt"].work;
        platforms1.innerHTML = "Platforms: "+AI["chatgpt"].platforms;
        price1.innerHTML = "Price: "+AI["chatgpt"].price;
    } 
     else  if (option1.value === "Claude") { 
        pic1.src = AI["claude"].pic;
        name1.innerHTML ="Name: "+AI["claude"].namey;
        parent1.innerHTML = "Parent CO: "+AI["claude"].publisher;
        work1.innerHTML = "Type: "+AI["claude"].work;
        platforms1.innerHTML = "Platforms: "+AI["claude"].platforms;
        price1.innerHTML = "Price: "+AI["claude"].price;
    }
    else  if (option1.value === "Perplexity") { 
        pic1.src = AI["perplexity"].pic;
        name1.innerHTML ="Name: "+AI["perplexity"].namey;
        parent1.innerHTML = "Parent CO: "+AI["perplexity"].publisher;
        work1.innerHTML = "Type: "+AI["perplexity"].work;
        platforms1.innerHTML = "Platforms: "+AI["perplexity"].platforms;
        price1.innerHTML = "Price: "+AI["perplexity"].price;
    }
    else  if (option1.value === "Gemini") { 
        pic1.src = AI["gemini"].pic;
        name1.innerHTML ="Name: "+AI["gemini"].namey;
        parent1.innerHTML = "Parent CO: "+AI["gemini"].publisher;
        work1.innerHTML = "Type: "+AI["gemini"].work;
        platforms1.innerHTML = "Platforms: "+AI["gemini"].platforms;
        price1.innerHTML = "Price: "+AI["gemini"].price;
    }
    else  if (option1.value === "Mid Journey") { 
        pic1.src = AI["midjourney"].pic;
        name1.innerHTML ="Name: "+AI["midjourney"].namey;
        parent1.innerHTML = "Parent CO: "+AI["midjourney"].publisher;
        work1.innerHTML = "Type: "+AI["midjourney"].work;
        platforms1.innerHTML = "Platforms: "+AI["midjourney"].platforms;
        price1.innerHTML = "Price: "+AI["midjourney"].price;
    }
    else  if (option1.value === "Stable Diffusion") { 
        pic1.src = AI["stable diffusion"].pic;
        name1.innerHTML ="Name: "+AI["stable diffusion"].namey;
        parent1.innerHTML = "Parent CO: "+AI["stable diffusion"].publisher;
        work1.innerHTML = "Type: "+AI["stable diffusion"].work;
        platforms1.innerHTML = "Platforms: "+AI["stable diffusion"].platforms;
        price1.innerHTML = "Price: "+AI["stable diffusion"].price;
    }
    else  if (option1.value === "DALL·E") { 
        pic1.src = AI["DALL·E 3"].pic;
        name1.innerHTML ="Name: "+AI["DALL·E 3"].namey;
        parent1.innerHTML = "Parent CO: "+AI["DALL·E 3"].publisher;
        work1.innerHTML = "Type: "+AI["DALL·E 3"].work;
        platforms1.innerHTML = "Platforms: "+AI["DALL·E 3"].platforms;
        price1.innerHTML = "Price: "+AI["DALL·E 3"].price;
    }
    else  if (option1.value === "Canva AI") { 
        pic1.src = AI["canva ai"].pic;
        name1.innerHTML ="Name: "+AI["canva ai"].namey;
        parent1.innerHTML = "Parent CO: "+AI["canva ai"].publisher;
        work1.innerHTML = "Type: "+AI["canva ai"].work;
        platforms1.innerHTML = "Platforms: "+AI["canva ai"].platforms;
        price1.innerHTML = "Price: "+AI["canva ai"].price;
    }
    else  if (option1.value === "Cursor") { 
        pic1.src = AI["cursor ai"].pic;
        name1.innerHTML ="Name: "+AI["cursor ai"].namey;
        parent1.innerHTML = "Parent CO: "+AI["cursor ai"].publisher;
        work1.innerHTML = "Type: "+AI["cursor ai"].work;
        platforms1.innerHTML = "Platforms: "+AI["cursor ai"].platforms;
        price1.innerHTML = "Price: "+AI["cursor ai"].price;
    }
    else  if (option1.value === "Runway") { 
        pic1.src = AI["runway ai"].pic;
        name1.innerHTML ="Name: "+AI["runway ai"].namey;
        parent1.innerHTML = "Parent CO: "+AI["runway ai"].publisher;
        work1.innerHTML = "Type: "+AI["runway ai"].work;
        platforms1.innerHTML = "Platforms: "+AI["runway ai"].platforms;
        price1.innerHTML = "Price: "+AI["runway ai"].price;
    }
    else  if (option1.value === "GitHub Copilot") { 
        pic1.src = AI["github copilot"].pic;
        name1.innerHTML ="Name: "+AI["github copilot"].namey;
        parent1.innerHTML = "Parent CO: "+AI["github copilot"].publisher;
        work1.innerHTML = "Type: "+AI["github copilot"].work;
        platforms1.innerHTML = "Platforms: "+AI["github copilot"].platforms;
        price1.innerHTML = "Price: "+AI["github copilot"].price;
    }
    else  if (option1.value === "Grammarly") { 
        pic1.src = AI["grammarly ai"].pic;
        name1.innerHTML ="Name: "+AI["grammarly ai"].namey;
        parent1.innerHTML = "Parent CO: "+AI["grammarly ai"].publisher;
        work1.innerHTML = "Type: "+AI["grammarly ai"].work;
        platforms1.innerHTML = "Platforms: "+AI["grammarly ai"].platforms;
        price1.innerHTML = "Price: "+AI["grammarly ai"].price;
    }







    if (option2.value === "Chatgpt") { 
        pic2.src = AI["chatgpt"].pic;
        name2.innerHTML ="Name: "+AI["chatgpt"].namey;
        parent2.innerHTML = "Parent CO: "+AI["chatgpt"].publisher;
        work2.innerHTML = "Type: "+AI["chatgpt"].work;
        platforms2.innerHTML = "Platforms: "+AI["chatgpt"].platforms;
        price2.innerHTML = "Price: "+AI["chatgpt"].price;
    } 
     else  if (option2.value === "Claude") { 
        pic2.src = AI["claude"].pic;
        name2.innerHTML ="Name: "+AI["claude"].namey;
        parent2.innerHTML = "Parent CO: "+AI["claude"].publisher;
        work2.innerHTML = "Type: "+AI["claude"].work;
        platforms2.innerHTML = "Platforms: "+AI["claude"].platforms;
        price2.innerHTML = "Price: "+AI["claude"].price;
    }
    else  if (option2.value === "Perplexity") { 
        pic2.src = AI["perplexity"].pic;
        name2.innerHTML ="Name: "+AI["perplexity"].namey;
        parent2.innerHTML = "Parent CO: "+AI["perplexity"].publisher;
        work2.innerHTML = "Type: "+AI["perplexity"].work;
        platforms2.innerHTML = "Platforms: "+AI["perplexity"].platforms;
        price2.innerHTML = "Price: "+AI["perplexity"].price;
    }
    else  if (option2.value === "Gemini") { 
        pic2.src = AI["gemini"].pic;
        name2.innerHTML ="Name: "+AI["gemini"].namey;
        parent2.innerHTML = "Parent CO: "+AI["gemini"].publisher;
        work2.innerHTML = "Type: "+AI["gemini"].work;
        platforms2.innerHTML = "Platforms: "+AI["gemini"].platforms;
        price2.innerHTML = "Price: "+AI["gemini"].price;
    }
    else  if (option2.value === "Mid Journey") { 
        pic2.src = AI["midjourney"].pic;
        name2.innerHTML ="Name: "+AI["midjourney"].namey;
        parent2.innerHTML = "Parent CO: "+AI["midjourney"].publisher;
        work2.innerHTML = "Type: "+AI["midjourney"].work;
        platforms2.innerHTML = "Platforms: "+AI["midjourney"].platforms;
        price2.innerHTML = "Price: "+AI["midjourney"].price;
    }
    else  if (option2.value === "Stable Diffusion") { 
        pic2.src = AI["stable diffusion"].pic;
        name2.innerHTML ="Name: "+AI["stable diffusion"].namey;
        parent2.innerHTML = "Parent CO: "+AI["stable diffusion"].publisher;
        work2.innerHTML = "Type: "+AI["stable diffusion"].work;
        platforms2.innerHTML = "Platforms: "+AI["stable diffusion"].platforms;
        price2.innerHTML = "Price: "+AI["stable diffusion"].price;
    }
    else  if (option2.value === "DALL·E") { 
        pic2.src = AI["DALL·E 3"].pic;
        name2.innerHTML ="Name: "+AI["DALL·E 3"].namey;
        parent2.innerHTML = "Parent CO: "+AI["DALL·E 3"].publisher;
        work2.innerHTML = "Type: "+AI["DALL·E 3"].work;
        platforms2.innerHTML = "Platforms: "+AI["DALL·E 3"].platforms;
        price2.innerHTML = "Price: "+AI["DALL·E 3"].price;
    }
    else  if (option2.value === "Canva AI") { 
        pic2.src = AI["canva ai"].pic;
        name2.innerHTML ="Name: "+AI["canva ai"].namey;
        parent2.innerHTML = "Parent CO: "+AI["canva ai"].publisher;
        work2.innerHTML = "Type: "+AI["canva ai"].work;
        platforms2.innerHTML = "Platforms: "+AI["canva ai"].platforms;
        price2.innerHTML = "Price: "+AI["canva ai"].price;
    }
    else  if (option2.value === "Cursor") { 
        pic2.src = AI["cursor ai"].pic;
        name2.innerHTML ="Name: "+AI["cursor ai"].namey;
        parent2.innerHTML = "Parent CO: "+AI["cursor ai"].publisher;
        work2.innerHTML = "Type: "+AI["cursor ai"].work;
        platforms2.innerHTML = "Platforms: "+AI["cursor ai"].platforms;
        price2.innerHTML = "Price: "+AI["cursor ai"].price;
    }
    else  if (option2.value === "Runway") { 
        pic2.src = AI["runway ai"].pic;
        name2.innerHTML ="Name: "+AI["runway ai"].namey;
        parent2.innerHTML = "Parent CO: "+AI["runway ai"].publisher;
        work2.innerHTML = "Type: "+AI["runway ai"].work;
        platforms2.innerHTML = "Platforms: "+AI["runway ai"].platforms;
        price2.innerHTML = "Price: "+AI["runway ai"].price;
    }
    else  if (option2.value === "GitHub Copilot") { 
        pic2.src = AI["github copilot"].pic;
        name2.innerHTML ="Name: "+AI["github copilot"].namey;
        parent2.innerHTML = "Parent CO: "+AI["github copilot"].publisher;
        work2.innerHTML = "Type: "+AI["github copilot"].work;
        platforms2.innerHTML = "Platforms: "+AI["github copilot"].platforms;
        price2.innerHTML = "Price: "+AI["github copilot"].price;
    }
    else  if (option2.value === "Grammarly") { 
        pic2.src = AI["grammarly ai"].pic;
        name2.innerHTML ="Name: "+AI["grammarly ai"].namey;
        parent2.innerHTML = "Parent CO: "+AI["grammarly ai"].publisher;
        work2.innerHTML = "Type: "+AI["grammarly ai"].work;
        platforms2.innerHTML = "Platforms: "+AI["grammarly ai"].platforms;
        price2.innerHTML = "Price: "+AI["grammarly ai"].price;
    }
















})
