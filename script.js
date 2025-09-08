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
        Array.from(heading).forEach(h => h.style.display = "none");
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
        Array.from(heading).forEach(h => h.style.display = "none");
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
        Array.from(heading).forEach(h => h.style.display = "none");
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
        Array.from(heading).forEach(h => h.style.display = "none");
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
        Array.from(heading).forEach(h => h.style.display = "none");
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
        Array.from(heading).forEach(h => h.style.display = "none");
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
        Array.from(heading).forEach(h => h.style.display = "none");
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
        Array.from(heading).forEach(h => h.style.display = "none");
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
        Array.from(heading).forEach(h => h.style.display = "none");
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
        Array.from(heading).forEach(h => h.style.display = "none");
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
        Array.from(heading).forEach(h => h.style.display = "none");
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
        Array.from(heading).forEach(h => h.style.display = "none");
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
    Array.from(heading).forEach(h => h.style.display = "none");
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
    Array.from(heading).forEach(h => h.style.display = "none");
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
    Array.from(heading).forEach(h => h.style.display = "none");
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
    Array.from(heading).forEach(h => h.style.display = "none");
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
    Array.from(heading).forEach(h => h.style.display = "none");
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
    pd.style.border = "none";
    ig.style.border = "none";
    vg.style.border = "none";
    cd.style.border = "none";
    cb.style.border = "none";
    free.style.border = "none";
    paid.style.border = "2px solid gold";
})
