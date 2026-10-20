const projects = [
  {
    title: "NieR:Automata",
    type: "Translation",
    platform: ["PC"],
    status: "Dalam pengembangan",
    description: "Proyek localization Bahasa Indonesia dan tools pendukung.",
    symbol: "N:A"
  },
  {
    title: "Final Fantasy XV",
    type: "Translation",
    platform: ["PC"],
    status: "Dalam pengembangan",
    description: "Proyek terjemahan teks game dengan workflow extraction/import.",
    symbol: "FFXV"
  },
  {
    title: "Sword and Fairy 7",
    type: "Translation / Mod",
    platform: ["PC"],
    status: "Eksperimental",
    description: "Eksperimen localization Bahasa Indonesia berbasis mod.",
    symbol: "S&F 7"
  },
  {
    title: "Project Android",
    type: "Mod",
    platform: ["Android"],
    status: "Segera",
    description: "Koleksi proyek mod dan tools untuk game Android.",
    symbol: "APK"
  },
  {
    title: "Project PS4",
    type: "Translation",
    platform: ["PS4"],
    status: "Rencana",
    description: "Tempat untuk proyek localization konsol.",
    symbol: "PS4"
  },
  {
    title: "Project PS5",
    type: "Mod",
    platform: ["PS5"],
    status: "Rencana",
    description: "Tempat untuk proyek dan dokumentasi modding.",
    symbol: "PS5"
  }
];

const tools = [
  ["CSV Text Tool", "Ekstrak dan import teks CSV untuk workflow translation.", "Tools"],
  ["TMX Editor", "Editor sederhana untuk membantu proses translation memory.", "Localization"],
  ["Text Extractor", "Kumpulan utilitas extraction dan reinsertion teks.", "Tools"]
];

const articles = [
  ["Panduan Memasang Mod Game", "Tutorial", "Panduan dasar memasang mod dengan struktur file yang benar."],
  ["Workflow Terjemahan Game", "Translation", "Dari extraction, translation, sampai import kembali ke game."],
  ["Mengatasi Masalah Mod", "Troubleshooting", "Langkah pengecekan ketika game tidak membaca file mod."]
];

const projectGrid = document.getElementById("projectGrid");
const toolGrid = document.getElementById("toolGrid");
const articleGrid = document.getElementById("articleGrid");
const emptyProjects = document.getElementById("emptyProjects");
const searchInput = document.getElementById("searchInput");
let activeFilter = "all";

function renderProjects() {
  const q = searchInput.value.toLowerCase().trim();
  const result = projects.filter(p => {
    const matchesFilter = activeFilter === "all" || p.platform.includes(activeFilter);
    const haystack = `${p.title} ${p.type} ${p.status} ${p.description} ${p.platform.join(" ")}`.toLowerCase();
    return matchesFilter && haystack.includes(q);
  });

  projectGrid.innerHTML = result.map(p => `
    <article class="card">
      <div class="card-cover">${p.symbol}</div>
      <div class="card-body">
        <div class="badges">
          <span class="badge">${p.type}</span>
          ${p.platform.map(x => `<span class="badge">${x}</span>`).join("")}
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="card-footer">
          <span>${p.status}</span><span>Detail →</span>
        </div>
      </div>
    </article>
  `).join("");

  emptyProjects.style.display = result.length ? "none" : "block";
}

function renderTools() {
  toolGrid.innerHTML = tools.map(([title, desc, tag]) => `
    <article class="card">
      <div class="card-body">
        <div class="badges"><span class="badge">${tag}</span></div>
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="card-footer"><span>RizalCNProject</span><span>Segera →</span></div>
      </div>
    </article>
  `).join("");
}

function renderArticles() {
  articleGrid.innerHTML = articles.map(([title, tag, desc]) => `
    <article class="article">
      <div class="article-tag">${tag.toUpperCase()}</div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="card-footer"><span>RizalCNProject</span><span>Baca →</span></div>
    </article>
  `).join("");
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderProjects();
  });
});

searchInput.addEventListener("input", renderProjects);

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open"));
});

renderProjects();
renderTools();
renderArticles();
