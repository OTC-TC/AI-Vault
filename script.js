/* =============================================
   AI Vault — script.js
   ============================================= */

// ── Tool data ─────────────────────────────────
// emoji: shown as avatar in cards, modal, compare
const toolData = {
  chatgpt:     { emoji:"🤖", ac:"#10a37f", name:"ChatGPT",           bio:"A conversational AI that can answer questions, generate text, write code, and assist with learning.", f1:"Natural, human-like conversations", f2:"Strong in coding & debugging", f3:"Multilingual support in 90+ languages", f4:"Best for: Students, Writers, Developers", price:"Free · ChatGPT Plus ($20/mo)", link:"https://chatgpt.com/" },
  claude:      { emoji:"🧠", ac:"#cc785c", name:"Claude",            bio:"A safe, ethical AI assistant focused on helpful, honest, and harmless responses with an unusually long context window.", f1:"Great for summarising long texts", f2:"Handles up to 200k token context windows", f3:"Focus on safe & reliable outputs", f4:"Best for: Researchers, professionals, coders", price:"Free & Pro plans", link:"https://claude.ai/new" },
  perplexity:  { emoji:"🔎", ac:"#20b2aa", name:"Perplexity AI",     bio:"An AI-powered search engine that gives cited, real-time answers instead of blue links.", f1:"Provides sources for every answer", f2:"Combines search & AI chat", f3:"Real-time web access", f4:"Best for: Research, students, journalists", price:"Free & Pro ($20/mo)", link:"https://www.perplexity.ai/" },
  gemini:      { emoji:"✨", ac:"#4285f4", name:"Gemini",            bio:"Google's flagship AI that understands text, code, and images with deep Google ecosystem integration.", f1:"Multimodal (text + image input)", f2:"Deep integration with Google apps", f3:"Strong in reasoning & logic", f4:"Best for: Google ecosystem users, researchers, coders", price:"Free & Pro (Google One AI Premium $20/mo)", link:"https://gemini.google.com/app" },
  grok:        { emoji:"🌀", ac:"#e7e9ea", name:"Grok",              bio:"xAI's bold, witty chatbot with real-time access to X (Twitter) data and fewer content restrictions.", f1:"Real-time X/Twitter data access", f2:"Less restricted, more direct responses", f3:"Image generation with Aurora", f4:"Best for: News, analysis, X power users", price:"Free (basic) · X Premium ($8/mo)", link:"https://grok.com/" },
  mistral:     { emoji:"🌬️", ac:"#f97316", name:"Mistral AI",        bio:"A fast, efficient European AI with strong open-weight models and a developer-friendly API.", f1:"Open-weight models available", f2:"Extremely fast inference speed", f3:"Strong multilingual performance", f4:"Best for: Developers, EU-based users, open-source fans", price:"Free (Le Chat) · API pay-as-you-go", link:"https://chat.mistral.ai/" },
  copilot:     { emoji:"🪟", ac:"#0078d4", name:"Microsoft Copilot", bio:"Microsoft's AI assistant powered by GPT-4, built into Windows, Edge, and the Microsoft 365 suite.", f1:"Built into Windows 11 & Office apps", f2:"Web browsing & image generation", f3:"Free with a Microsoft account", f4:"Best for: Office users, Windows users, businesses", price:"Free · Microsoft 365 Copilot ($30/user/mo)", link:"https://copilot.microsoft.com/" },
  metaai:      { emoji:"👾", ac:"#0668e1", name:"Meta AI",           bio:"Meta's free AI assistant powered by Llama, embedded directly in WhatsApp, Instagram, and Facebook.", f1:"Built into WhatsApp, Instagram, Messenger", f2:"Completely free to use", f3:"Image generation included", f4:"Best for: Casual users, social media, everyday tasks", price:"Free", link:"https://www.meta.ai/" },
  midjourney:  { emoji:"🖼️", ac:"#9b59b6", name:"MidJourney",        bio:"Industry-leading AI art generator that creates breathtaking images from text prompts via Discord or web.", f1:"Stunning realistic + artistic images", f2:"Wide style & aspect ratio control", f3:"Active community & style references", f4:"Best for: Designers, artists, marketers", price:"Paid plans only (from $10/mo)", link:"https://www.midjourney.com/home" },
  stable:      { emoji:"⚙️", ac:"#e74c3c", name:"Stable Diffusion",  bio:"Open-source AI image model for fully customisable, self-hosted art generation with thousands of community models.", f1:"Free & open-source", f2:"Custom model training (LoRA, checkpoints)", f3:"ControlNet & advanced tweaks", f4:"Best for: Developers, hobbyists, creators", price:"Free (open-source) · third-party UIs may charge", link:"https://stablediffusionweb.com/" },
  dalle:       { emoji:"🎭", ac:"#10a37f", name:"DALL·E 3",          bio:"OpenAI's image generator integrated directly into ChatGPT for high-quality, prompt-accurate visuals.", f1:"Generates detailed images from text", f2:"Integrated in ChatGPT & Bing", f3:"Better prompt understanding than v2", f4:"Best for: Quick design, marketing, content creators", price:"Free (limited) · Paid via ChatGPT Plus", link:"https://openai.com/dall-e-3" },
  canva:       { emoji:"🎨", ac:"#00c4cc", name:"Canva AI",           bio:"AI-powered features inside Canva for text-to-image, Magic Write, background removal, and design suggestions.", f1:"AI text-to-image generation", f2:"Magic Write (AI copywriting)", f3:"Instant design templates", f4:"Best for: Social media managers, marketers, beginners", price:"Free & Pro plans", link:"https://www.canva.com/ai-assistant/" },
  firefly:     { emoji:"🦋", ac:"#ff6b35", name:"Adobe Firefly",     bio:"Adobe's generative AI trained on licensed content — safe for commercial use and integrated into Creative Cloud.", f1:"Commercially safe image generation", f2:"Integrated into Photoshop & Illustrator", f3:"Generative fill & expand", f4:"Best for: Designers, photographers, brands", price:"Free (25 credits/mo) · Premium via Creative Cloud", link:"https://firefly.adobe.com/" },
  leonardo:    { emoji:"🦁", ac:"#c0392b", name:"Leonardo AI",       bio:"A powerful AI image and game asset generator with fine-tuned models, canvas editing, and motion generation.", f1:"150 free credits per day", f2:"Fine-tuned models for game assets", f3:"Motion & video generation", f4:"Best for: Game devs, concept artists, creators", price:"Free (150 credits/day) · Paid from $12/mo", link:"https://leonardo.ai/" },
  ideogram:    { emoji:"🔤", ac:"#8e44ad", name:"Ideogram",          bio:"AI image generator that excels at accurately rendering text inside images — a major weakness of most AI art tools.", f1:"Best-in-class text rendering in images", f2:"Realistic & artistic styles", f3:"Free tier available", f4:"Best for: Marketers, designers, social media", price:"Free (10 priority/day) · Paid from $8/mo", link:"https://ideogram.ai/" },
  runway:      { emoji:"🎬", ac:"#00d2ff", name:"Runway",            bio:"Professional AI video creation and editing suite used by Hollywood studios and indie creators alike.", f1:"Text-to-video generation", f2:"AI-powered video editing tools", f3:"Green screen & background removal", f4:"Best for: Content creators, video editors, marketers", price:"Free trial & Paid plans (from $15/mo)", link:"https://runwayml.com/" },
  sora:        { emoji:"🌊", ac:"#10a37f", name:"Sora",              bio:"OpenAI's groundbreaking text-to-video model capable of generating cinematic, realistic video clips up to 20 seconds.", f1:"Up to 20-second realistic video clips", f2:"High visual fidelity & physics simulation", f3:"Storyboard & remix features", f4:"Best for: Filmmakers, advertisers, creatives", price:"Included with ChatGPT Plus ($20/mo)", link:"https://sora.com/" },
  kling:       { emoji:"🎥", ac:"#ff4757", name:"Kling AI",          bio:"Kuaishou's advanced video generation model producing hyper-realistic footage from text or image prompts.", f1:"Hyper-realistic video generation", f2:"Image-to-video & text-to-video", f3:"Lip sync & character consistency", f4:"Best for: Creators, marketers, filmmakers", price:"Free tier · Paid from $10/mo", link:"https://klingai.com/" },
  pika:        { emoji:"⚡", ac:"#ffa502", name:"Pika",              bio:"Turn any idea, image, or video into a cinematic clip with Pika's fast and expressive AI video engine.", f1:"Text & image to video", f2:"Modify & extend existing videos", f3:"Fast generation & easy sharing", f4:"Best for: Social media creators, storytellers", price:"Free tier · Paid from $8/mo", link:"https://pika.art/" },
  elevenlabs:  { emoji:"🎙️", ac:"#ff6b9d", name:"ElevenLabs",        bio:"The gold standard for AI voice cloning and text-to-speech — ultra-realistic voices in 30+ languages.", f1:"Ultra-realistic voice cloning", f2:"30+ languages & accents", f3:"AI dubbing & sound effects", f4:"Best for: Podcasters, YouTubers, audiobook creators", price:"Free (10k chars/mo) · Paid from $5/mo", link:"https://elevenlabs.io/" },
  suno:        { emoji:"🎵", ac:"#a29bfe", name:"Suno",              bio:"Create complete, radio-quality songs with vocals, instruments, and lyrics from just a text prompt.", f1:"Full songs with vocals from text", f2:"Wide genre & style support", f3:"Extend & remix existing songs", f4:"Best for: Musicians, content creators, hobbyists", price:"Free (50 credits/day) · Paid from $8/mo", link:"https://suno.com/" },
  udio:        { emoji:"🎶", ac:"#fd79a8", name:"Udio",              bio:"AI music generation with exceptional audio quality — create full tracks with custom styles, genres, and moods.", f1:"High-fidelity music generation", f2:"Fine-grained style & mood control", f3:"Extend tracks & add custom lyrics", f4:"Best for: Musicians, producers, creatives", price:"Free (1,200 credits/mo) · Paid from $10/mo", link:"https://udio.com/" },
  adobepodcast:{ emoji:"🎤", ac:"#ff6b35", name:"Adobe Podcast",     bio:"Adobe's AI audio tool that removes background noise and enhances voice recordings to studio quality in seconds.", f1:"Mic Check & Enhance Speech AI", f2:"Removes background noise instantly", f3:"Studio-quality audio from any mic", f4:"Best for: Podcasters, remote workers, educators", price:"Free (beta) · Paid via Adobe subscription", link:"https://podcast.adobe.com/" },
  cursor:      { emoji:"💻", ac:"#00d2ff", name:"Cursor",            bio:"A VS Code-like editor built from the ground up with AI — autocomplete, explain, and debug entire codebases.", f1:"AI pair programmer built-in", f2:"Understands your full codebase context", f3:"Multi-line autocomplete & natural language chat", f4:"Best for: Developers, students, startups", price:"Free & Pro plans ($20/mo)", link:"https://cursor.com/" },
  github:      { emoji:"🐙", ac:"#6e5494", name:"GitHub Copilot",    bio:"An AI coding assistant by Microsoft that suggests code completions directly in VS Code, JetBrains, and more.", f1:"Autocomplete entire functions", f2:"Learns from your coding style", f3:"Integrates with VS Code, JetBrains", f4:"Best for: Programmers, teams, students", price:"$10/mo (free for verified students)", link:"https://github.com/features/copilot" },
  grammarly:   { emoji:"✏️", ac:"#15c39a", name:"Grammarly AI",      bio:"AI-powered writing assistant for grammar, spelling, clarity, tone, and style improvements across any app.", f1:"Grammar & spelling correction", f2:"Tone detection & suggestions", f3:"AI rewriting & idea generation", f4:"Best for: Students, professionals, writers", price:"Free & Premium plans ($12/mo)", link:"https://www.grammarly.com/" },
  notion:      { emoji:"📝", ac:"#ffffff", name:"Notion AI",         bio:"AI built directly into Notion that can draft, summarise, translate, and brainstorm inside your workspace.", f1:"AI writing & summarisation in-app", f2:"Q&A over your entire workspace", f3:"Translate & auto-fill databases", f4:"Best for: Teams, students, project managers", price:"Add-on $8/member/mo (Notion required)", link:"https://www.notion.so/product/ai" },
  jasper:      { emoji:"📣", ac:"#ff6640", name:"Jasper",            bio:"Enterprise-grade AI copywriting platform for marketing teams — ads, blogs, emails, and brand voice management.", f1:"Brand voice & tone training", f2:"100+ copywriting templates", f3:"Team collaboration features", f4:"Best for: Marketing teams, agencies, brands", price:"From $39/mo", link:"https://www.jasper.ai/" },
  copyai:      { emoji:"📋", ac:"#7c3aed", name:"Copy.ai",           bio:"AI-powered go-to-market platform for generating sales copy, email sequences, and marketing content at scale.", f1:"Sales email & ad copy generation", f2:"GTM workflows & automations", f3:"Multi-language support", f4:"Best for: Sales teams, marketers, startups", price:"Free (2,000 words/mo) · Paid from $36/mo", link:"https://www.copy.ai/" },
  gamma:       { emoji:"📊", ac:"#f59e0b", name:"Gamma",             bio:"AI that generates stunning slide presentations, documents, and webpages from a simple text prompt in seconds.", f1:"Full decks from a single prompt", f2:"Beautiful themes & layouts", f3:"Export to PowerPoint or PDF", f4:"Best for: Students, presenters, teams", price:"Free (400 credits) · Paid from $8/mo", link:"https://gamma.app/" },
  napkin:      { emoji:"🗺️", ac:"#06b6d4", name:"Napkin AI",         bio:"Instantly transforms your text into diagrams, charts, infographics, and visual explainers — no design skills needed.", f1:"Text-to-diagram in one click", f2:"Flowcharts, timelines, mind maps", f3:"Editable & exportable visuals", f4:"Best for: Consultants, educators, writers", price:"Free beta · Paid plans coming", link:"https://www.napkin.ai/" },
};

// ── Modal ─────────────────────────────────────
const modal    = document.getElementById("modal");
const closeBtn = document.getElementById("close");

function openModal(key) {
  const d = toolData[key]; if (!d) return;
  document.getElementById("modal-avatar").textContent     = d.emoji;
  document.getElementById("modal-avatar").style.background= `color-mix(in srgb, ${d.ac} 15%, #1a1a26)`;
  document.getElementById("modal-avatar").style.border    = `1px solid color-mix(in srgb, ${d.ac} 30%, transparent)`;
  document.getElementById("modname").textContent  = d.name;
  document.getElementById("modbio").textContent   = d.bio;
  document.getElementById("f1").textContent = d.f1;
  document.getElementById("f2").textContent = d.f2;
  document.getElementById("f3").textContent = d.f3;
  document.getElementById("f4").textContent = d.f4;
  document.getElementById("price").textContent    = d.price;
  document.getElementById("linkvm").href          = d.link;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ── Wire all "Details →" buttons ──────────────
document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.key));
});

// ── Card & heading visibility ─────────────────
const allCards = document.querySelectorAll(".tool-card");
const allHeads = document.querySelectorAll(".section-label");
const allGrids = document.querySelectorAll(".tools-grid");

function showAll() {
  allCards.forEach(c => c.style.display = "flex");
  allHeads.forEach(h => h.style.display = "flex");
  allGrids.forEach(g => g.style.display = "grid");
}

function filterByCat(cats) {
  // cats: array of data-cat strings, or 'all'
  allHeads.forEach(h => {
    const show = cats === "all" || cats.includes(h.dataset.cat);
    h.style.display = show ? "flex" : "none";
  });
  allGrids.forEach(g => {
    const anyVisible = [...g.querySelectorAll(".tool-card")].some(c => {
      if (cats === "all") return true;
      return cats.includes(c.dataset.cat);
    });
    g.style.display = anyVisible ? "grid" : "none";
  });
  allCards.forEach(c => {
    const show = cats === "all" || cats.includes(c.dataset.cat);
    c.style.display = show ? "flex" : "none";
  });
}

function filterByKeys(keys) {
  // Show only specific keys regardless of category
  allCards.forEach(c => { c.style.display = keys.includes(c.dataset.key) ? "flex" : "none"; });
  allGrids.forEach(g => {
    const anyVisible = [...g.querySelectorAll(".tool-card")].some(c => c.style.display !== "none");
    g.style.display = anyVisible ? "grid" : "none";
  });
  allHeads.forEach(h => {
    const grid = document.getElementById("grid-" + h.dataset.cat);
    const anyVisible = grid && [...grid.querySelectorAll(".tool-card")].some(c => c.style.display !== "none");
    h.style.display = anyVisible ? "flex" : "none";
  });
}

// free / paid keys
const freeKeys = ["chatgpt","claude","perplexity","gemini","grok","mistral","copilot","metaai","stable","dalle","canva","firefly","leonardo","ideogram","pika","kling","elevenlabs","suno","udio","adobepodcast","cursor","grammarly","copyai","gamma","napkin","notion"];
const paidOnlyKeys = ["midjourney","github","jasper","runway","sora"];

// ── Tabs ──────────────────────────────────────
const tabs = document.querySelectorAll(".tab");
function setActiveTab(id) { tabs.forEach(t => t.classList.toggle("active", t.id === id)); }

document.getElementById("tab-all").addEventListener("click", () => { showAll(); setActiveTab("tab-all"); clearSearch(); });
document.getElementById("cb").addEventListener("click",      () => { filterByCat(["chat"]);    setActiveTab("cb");    clearSearch(); });
document.getElementById("ig").addEventListener("click",      () => { filterByCat(["image"]);   setActiveTab("ig");    clearSearch(); });
document.getElementById("vg").addEventListener("click",      () => { filterByCat(["video"]);   setActiveTab("vg");    clearSearch(); });
document.getElementById("au").addEventListener("click",      () => { filterByCat(["audio"]);   setActiveTab("au");    clearSearch(); });
document.getElementById("cd").addEventListener("click",      () => { filterByCat(["code"]);    setActiveTab("cd");    clearSearch(); });
document.getElementById("pd").addEventListener("click",      () => { filterByCat(["writing"]); setActiveTab("pd");    clearSearch(); });
document.getElementById("free").addEventListener("click",    () => { filterByKeys(freeKeys);   setActiveTab("free");  clearSearch(); });
document.getElementById("paid").addEventListener("click",    () => { filterByKeys(paidOnlyKeys); setActiveTab("paid"); clearSearch(); });

// ── Search ────────────────────────────────────
const searchInput = document.getElementById("search");
const resetBtn    = document.getElementById("reset");
const emptyState  = document.getElementById("search-empty");

const searchIndex = [
  { key:"chatgpt",      terms:"chatgpt chat gpt openai chatbot writing code gpt-4 students writers developers" },
  { key:"claude",       terms:"claude anthropic chatbot safe ethical reasoning research professionals long context" },
  { key:"perplexity",   terms:"perplexity search engine chatbot real-time citations sources research journalists" },
  { key:"gemini",       terms:"gemini google chatbot multimodal image reasoning google docs workspace" },
  { key:"grok",         terms:"grok xai elon musk twitter x chatbot real-time news witty aurora" },
  { key:"mistral",      terms:"mistral ai french european open source chatbot fast developer api lightweight" },
  { key:"copilot",      terms:"microsoft copilot windows office 365 bing chatbot free productivity edge" },
  { key:"metaai",       terms:"meta ai facebook whatsapp instagram llama free chatbot social media" },
  { key:"midjourney",   terms:"midjourney image art generator design realistic artistic style paid designers artists" },
  { key:"stable",       terms:"stable diffusion image art generator open source free developer lora controlnet" },
  { key:"dalle",        terms:"dalle dall-e openai image generator text-to-image creative marketing bing" },
  { key:"canva",        terms:"canva image design magic write template social media marketing beginner" },
  { key:"firefly",      terms:"adobe firefly image generator commercial safe photoshop illustrator creative cloud" },
  { key:"leonardo",     terms:"leonardo ai image generator game assets concept art motion free credits" },
  { key:"ideogram",     terms:"ideogram image generator text rendering logo typography accurate font" },
  { key:"runway",       terms:"runway video generator text-to-video editing green screen background creator" },
  { key:"sora",         terms:"sora openai text-to-video video generator cinematic realistic clips" },
  { key:"kling",        terms:"kling ai kuaishou video generator realistic hyper-realistic lip sync" },
  { key:"pika",         terms:"pika video generator text-to-video image-to-video social media clips fast" },
  { key:"elevenlabs",   terms:"elevenlabs voice cloning text to speech tts audio podcast realistic voice dubbing" },
  { key:"suno",         terms:"suno music generator song ai vocals lyrics genre audio" },
  { key:"udio",         terms:"udio music generator audio song ai high fidelity genre mood producer" },
  { key:"adobepodcast", terms:"adobe podcast audio enhance speech noise removal studio quality mic podcast" },
  { key:"cursor",       terms:"cursor code editor ide vscode ai autocomplete debug pair programmer developer" },
  { key:"github",       terms:"github copilot microsoft code autocomplete vscode jetbrains programmer team student" },
  { key:"grammarly",    terms:"grammarly grammar spelling writing tone rewrite ai student professional writer" },
  { key:"notion",       terms:"notion ai notes workspace productivity writing summarise translate brainstorm team" },
  { key:"jasper",       terms:"jasper ai copywriting marketing brand voice ads email blog enterprise" },
  { key:"copyai",       terms:"copy ai copywriting sales email marketing gtm workflow automation startup" },
  { key:"gamma",        terms:"gamma ai slides presentation deck document webpage powerpoint free student" },
  { key:"napkin",       terms:"napkin ai diagram visual infographic flowchart text-to-diagram explain" },
];

function fuzzyScore(q, text) {
  const ql = q.toLowerCase(), tl = text.toLowerCase();
  if (tl.includes(ql)) return ql.length * 2;
  let qi = 0, score = 0, last = -1;
  for (let i = 0; i < tl.length && qi < ql.length; i++) {
    if (tl[i] === ql[qi]) { score += i - last === 1 ? 2 : 1; last = i; qi++; }
  }
  return qi === ql.length ? score : 0;
}

function getMatches(q) {
  if (!q) return searchIndex.map(e => ({ ...e, score:1 }));
  return searchIndex.map(e => ({ ...e, score: fuzzyScore(q, e.terms) }))
    .filter(e => e.score > 0).sort((a,b) => b.score - a.score);
}

function highlight(label, q) {
  if (!q) return label;
  const i = label.toLowerCase().indexOf(q.toLowerCase());
  if (i !== -1) return label.slice(0,i) + `<mark>${label.slice(i,i+q.length)}</mark>` + label.slice(i+q.length);
  let r = "", qi = 0, ql = q.toLowerCase();
  for (let i = 0; i < label.length; i++) {
    if (qi < ql.length && label[i].toLowerCase() === ql[qi]) { r += `<mark>${label[i]}</mark>`; qi++; }
    else r += label[i];
  }
  return r;
}

const prettyName = {};
Object.entries(toolData).forEach(([k,v]) => prettyName[k] = v.name);
const catLabel = { chat:"Chat Bot", image:"Image Gen", video:"Video", audio:"Audio AI", code:"Coding", writing:"Writing" };
function getToolCat(key) {
  const card = document.getElementById(key);
  return card ? catLabel[card.dataset.cat] || "" : "";
}

// Dropdown
const dropdown = document.createElement("ul");
dropdown.id = "search-dropdown";
searchInput.parentNode.appendChild(dropdown);

let activeIdx = -1;

function renderDropdown(q, matches) {
  dropdown.innerHTML = ""; activeIdx = -1;
  if (!q || !matches.length) { dropdown.style.display = "none"; return; }
  dropdown.style.display = "block";
  matches.slice(0, 8).forEach((m, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="dd-name">${highlight(prettyName[m.key], q)}</span><span class="dd-cat">${getToolCat(m.key)}</span>`;
    li.dataset.key = m.key;
    li.addEventListener("mousedown", e => { e.preventDefault(); pickSuggestion(m.key); });
    li.addEventListener("mouseover", () => setDDActive(i));
    dropdown.appendChild(li);
  });
}
function setDDActive(i) {
  dropdown.querySelectorAll("li").forEach((l,j) => l.classList.toggle("active", j===i));
  activeIdx = i;
}
function pickSuggestion(key) {
  searchInput.value = prettyName[key];
  dropdown.style.display = "none";
  applyResults([key]);
}

function applyResults(keys) {
  tabs.forEach(t => t.classList.remove("active"));
  if (!keys.length) {
    allCards.forEach(c => c.style.display = "none");
    allHeads.forEach(h => h.style.display = "none");
    allGrids.forEach(g => g.style.display = "none");
    document.getElementById("empty-query").textContent = searchInput.value;
    emptyState.style.display = "flex";
  } else {
    emptyState.style.display = "none";
    filterByKeys(keys);
    document.getElementById("tools-section").scrollIntoView({ behavior:"smooth", block:"start" });
  }
}

function runSearch(q) {
  if (!q.trim()) { clearSearch(); return; }
  const matches = getMatches(q.trim());
  renderDropdown(q, matches);
  const keys = matches.map(m => m.key);
  if (!keys.length) {
    allCards.forEach(c => c.style.display = "none");
    allHeads.forEach(h => h.style.display = "none");
    allGrids.forEach(g => g.style.display = "none");
    document.getElementById("empty-query").textContent = q;
    emptyState.style.display = "flex";
  } else {
    emptyState.style.display = "none";
    filterByKeys(keys);
  }
  tabs.forEach(t => t.classList.remove("active"));
}

function clearSearch() {
  searchInput.value = "";
  dropdown.style.display = "none";
  emptyState.style.display = "none";
}

searchInput.addEventListener("input", () => runSearch(searchInput.value));
searchInput.addEventListener("keydown", e => {
  const items = dropdown.querySelectorAll("li");
  if (e.key === "ArrowDown") { e.preventDefault(); setDDActive(Math.min(activeIdx+1, items.length-1)); }
  else if (e.key === "ArrowUp") { e.preventDefault(); setDDActive(Math.max(activeIdx-1, 0)); }
  else if (e.key === "Enter") {
    e.preventDefault();
    if (activeIdx >= 0 && items[activeIdx]) pickSuggestion(items[activeIdx].dataset.key);
    else { dropdown.style.display = "none"; applyResults(getMatches(searchInput.value.trim()).map(m=>m.key)); }
  } else if (e.key === "Escape") { dropdown.style.display = "none"; }
});
document.addEventListener("click", e => {
  if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) dropdown.style.display = "none";
});
resetBtn.addEventListener("click", () => { showAll(); clearSearch(); setActiveTab("tab-all"); });
document.getElementById("empty-reset").addEventListener("click", () => {
  showAll(); clearSearch(); setActiveTab("tab-all"); searchInput.focus();
});

// ── Compare ───────────────────────────────────
const compareData = {
  "Chatgpt":          { key:"chatgpt",      name:"ChatGPT",           publisher:"OpenAI",          type:"Chat Bot",           platforms:"Web, Desktop, Mobile, API", price:"Free · Plus $20/mo" },
  "Claude":           { key:"claude",       name:"Claude AI",         publisher:"Anthropic",       type:"Chat Bot",           platforms:"Web, Desktop, Mobile, API", price:"Free & Pro plans" },
  "Perplexity":       { key:"perplexity",   name:"Perplexity AI",     publisher:"Perplexity AI",   type:"Chat Bot",           platforms:"Web, Desktop, Mobile, API", price:"Free & Pro ($20/mo)" },
  "Gemini":           { key:"gemini",       name:"Gemini",            publisher:"Google",          type:"Chat Bot",           platforms:"Web, Desktop, Mobile, API", price:"Free & Pro ($20/mo)" },
  "Grok":             { key:"grok",         name:"Grok",              publisher:"xAI",             type:"Chat Bot",           platforms:"Web, Mobile (X)",           price:"Free · X Premium $8/mo" },
  "Mistral":          { key:"mistral",      name:"Mistral AI",        publisher:"Mistral AI",      type:"Chat Bot",           platforms:"Web, API",                  price:"Free · API pay-as-you-go" },
  "Copilot":          { key:"copilot",      name:"Microsoft Copilot", publisher:"Microsoft",       type:"Chat Bot",           platforms:"Web, Desktop, Mobile",      price:"Free · M365 $30/user/mo" },
  "MetaAI":           { key:"metaai",       name:"Meta AI",           publisher:"Meta",            type:"Chat Bot",           platforms:"Web, WhatsApp, Instagram",  price:"Free" },
  "Mid Journey":      { key:"midjourney",   name:"MidJourney",        publisher:"Midjourney Inc.", type:"Image Generator",    platforms:"Web, Discord",              price:"From $10/mo" },
  "Stable Diffusion": { key:"stable",       name:"Stable Diffusion",  publisher:"Stability AI",   type:"Image Generator",    platforms:"Web, Desktop",              price:"Free (open-source)" },
  "DALL·E":           { key:"dalle",        name:"DALL·E 3",          publisher:"OpenAI",          type:"Image Generator",    platforms:"Web",                       price:"Free (limited) · Plus $20/mo" },
  "Canva AI":         { key:"canva",        name:"Canva AI",          publisher:"Canva Pty Ltd",   type:"Image Generator",    platforms:"Web, Desktop, Mobile",      price:"Free & Pro plans" },
  "Firefly":          { key:"firefly",      name:"Adobe Firefly",     publisher:"Adobe",           type:"Image Generator",    platforms:"Web, Photoshop, Illustrator",price:"Free (25 credits) · CC subscription" },
  "Leonardo":         { key:"leonardo",     name:"Leonardo AI",       publisher:"Leonardo AI",     type:"Image Generator",    platforms:"Web",                       price:"Free (150 credits/day) · From $12/mo" },
  "Ideogram":         { key:"ideogram",     name:"Ideogram",          publisher:"Ideogram AI",     type:"Image Generator",    platforms:"Web",                       price:"Free · From $8/mo" },
  "Runway":           { key:"runway",       name:"Runway",            publisher:"Runway AI Inc.",  type:"Video Generator",    platforms:"Web, Desktop",              price:"Free trial · From $15/mo" },
  "Sora":             { key:"sora",         name:"Sora",              publisher:"OpenAI",          type:"Video Generator",    platforms:"Web",                       price:"ChatGPT Plus ($20/mo)" },
  "Kling":            { key:"kling",        name:"Kling AI",          publisher:"Kuaishou",        type:"Video Generator",    platforms:"Web, App",                  price:"Free tier · From $10/mo" },
  "Pika":             { key:"pika",         name:"Pika",              publisher:"Pika Labs",       type:"Video Generator",    platforms:"Web",                       price:"Free tier · From $8/mo" },
  "ElevenLabs":       { key:"elevenlabs",   name:"ElevenLabs",        publisher:"ElevenLabs",      type:"Audio AI",           platforms:"Web, API",                  price:"Free (10k chars/mo) · From $5/mo" },
  "Suno":             { key:"suno",         name:"Suno",              publisher:"Suno AI",         type:"Audio AI",           platforms:"Web, Mobile",               price:"Free (50 credits/day) · From $8/mo" },
  "Udio":             { key:"udio",         name:"Udio",              publisher:"Udio",            type:"Audio AI",           platforms:"Web",                       price:"Free (1,200 credits/mo) · From $10/mo" },
  "AdobePodcast":     { key:"adobepodcast", name:"Adobe Podcast",     publisher:"Adobe",           type:"Audio AI",           platforms:"Web",                       price:"Free beta · Adobe subscription" },
  "Cursor":           { key:"cursor",       name:"Cursor",            publisher:"Anysphere",       type:"AI Code Editor",     platforms:"Desktop",                   price:"Free & Pro ($20/mo)" },
  "GitHub Copilot":   { key:"github",       name:"GitHub Copilot",    publisher:"Microsoft",       type:"AI Code Assistant",  platforms:"Desktop",                   price:"$10/mo (free for students)" },
  "Grammarly":        { key:"grammarly",    name:"Grammarly AI",      publisher:"Grammarly Inc.",  type:"Writing Tool",       platforms:"Desktop, Mobile, Web",      price:"Free & Premium ($12/mo)" },
  "Notion":           { key:"notion",       name:"Notion AI",         publisher:"Notion Labs",     type:"Productivity AI",    platforms:"Web, Desktop, Mobile",      price:"Add-on $8/member/mo" },
  "Jasper":           { key:"jasper",       name:"Jasper",            publisher:"Jasper AI",       type:"Copywriting AI",     platforms:"Web",                       price:"From $39/mo" },
  "CopyAI":           { key:"copyai",       name:"Copy.ai",           publisher:"Copy.ai Inc.",    type:"Copywriting AI",     platforms:"Web",                       price:"Free (2k words/mo) · From $36/mo" },
  "Gamma":            { key:"gamma",        name:"Gamma",             publisher:"Gamma App",       type:"Presentation AI",    platforms:"Web",                       price:"Free (400 credits) · From $8/mo" },
  "Napkin":           { key:"napkin",       name:"Napkin AI",         publisher:"Napkin AI",       type:"Visual AI",          platforms:"Web",                       price:"Free beta" },
};

function fillCompare(slot, val) {
  const d = compareData[val]; if (!d) return;
  const td = toolData[d.key];
  const av = document.getElementById("comp-av" + slot);
  if (td && av) {
    av.textContent = td.emoji;
    av.style.background = `color-mix(in srgb, ${td.ac} 15%, #1a1a26)`;
    av.style.border = `1px solid color-mix(in srgb, ${td.ac} 30%, transparent)`;
    av.style.width = "64px"; av.style.height = "64px"; av.style.borderRadius = "16px";
    av.style.display = "flex"; av.style.alignItems = "center"; av.style.justifyContent = "center";
    av.style.fontSize = "32px"; av.style.marginBottom = "4px";
  }
  document.getElementById("name"      + slot).textContent = d.name;
  document.getElementById("parent"    + slot).textContent = "By " + d.publisher;
  document.getElementById("work"      + slot).textContent = "Type: " + d.type;
  document.getElementById("platforms" + slot).textContent = "Platforms: " + d.platforms;
  document.getElementById("price"     + slot).textContent = "Price: " + d.price;
  document.getElementById("com"       + slot).style.display = "flex";
}

document.getElementById("sub").addEventListener("click", () => {
  fillCompare(1, document.getElementById("option1").value);
  fillCompare(2, document.getElementById("option2").value);
  document.getElementById("comp-vs-label").style.display = "block";
  document.getElementById("comp-result").scrollIntoView({ behavior:"smooth" });
});

// update live tool count
document.getElementById("tool-count").textContent = Object.keys(toolData).length;
