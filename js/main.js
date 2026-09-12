(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, className, html) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  function renderHero() {
    $("#heroName").textContent = PORTFOLIO.name;
    $("#heroRole").textContent = PORTFOLIO.role;
    $("#heroSummary").textContent = PORTFOLIO.summary;
    const stats = $("#heroStats");
    PORTFOLIO.stats.forEach((s) => {
      const item = el("div", "stat");
      item.innerHTML = `<strong>${s.value}</strong><span>${s.label}</span>`;
      stats.appendChild(item);
    });
  }

  function renderCareer() {
    const wrap = $("#careerTimeline");
    PORTFOLIO.career.forEach((c) => {
      const item = el("article", "timeline-item");
      const duties = c.duties.length
        ? `<ul class="timeline-duties">${c.duties.map((d) => `<li>${d}</li>`).join("")}</ul>`
        : "";
      const stack = c.stack.length
        ? `<div class="chip-row">${c.stack.map((s) => `<span class="chip">${s}</span>`).join("")}</div>`
        : "";
      item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-body">
          <div class="timeline-head">
            <h3>${c.company}</h3>
            <span class="timeline-period">${c.period}</span>
          </div>
          ${c.dept ? `<p class="timeline-dept">${c.dept}${c.title ? " · " + c.title : ""}</p>` : ""}
          ${duties}
          ${stack}
        </div>`;
      wrap.appendChild(item);
    });
  }

  function renderProjectFilters() {
    const companies = ["전체", ...new Set(PORTFOLIO.projects.map((p) => p.company))];
    const wrap = $("#projectFilters");
    companies.forEach((company, i) => {
      const btn = el("button", "filter-btn" + (i === 0 ? " active" : ""), company);
      btn.dataset.company = company;
      btn.addEventListener("click", () => {
        wrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjectList(company);
      });
      wrap.appendChild(btn);
    });
  }

  function renderProjectList(filter) {
    const list = $("#projectList");
    list.innerHTML = "";
    const items = PORTFOLIO.projects.filter(
      (p) => filter === "전체" || !filter || p.company === filter
    );
    items.forEach((p) => {
      const card = el("article", "project-card");
      const work = p.work.length
        ? `<div class="project-block"><h4>작업내용</h4><ul>${p.work.map((w) => `<li>${w}</li>`).join("")}</ul></div>`
        : "";
      const result = p.result.length
        ? `<div class="project-block"><h4>주요성과</h4><ul>${p.result.map((r) => `<li>${r}</li>`).join("")}</ul></div>`
        : "";
      card.innerHTML = `
        <div class="project-head">
          <span class="project-tag">${p.company}</span>
          <span class="project-period">${p.period}</span>
        </div>
        <h3>${p.title}</h3>
        ${p.role ? `<p class="project-role">${p.role}</p>` : ""}
        ${p.overview ? `<p class="project-overview">${p.overview}</p>` : ""}
        <div class="project-details">
          ${work}
          ${result}
        </div>`;
      list.appendChild(card);
    });
  }

  function renderEducation() {
    const wrap = $("#educationList");
    PORTFOLIO.education.forEach((e) => {
      const card = el("div", "edu-card");
      card.innerHTML = `
        <div class="edu-head">
          <h3>${e.school}</h3>
          <span class="edu-date">${e.date}</span>
        </div>
        <p class="edu-major">${e.major}</p>
        <p class="edu-detail">${e.detail}</p>`;
      wrap.appendChild(card);
    });
  }

  function renderCerts() {
    const grid = $("#certGrid");
    PORTFOLIO.certs.forEach((c) => {
      const card = el("div", "cert-card");
      card.innerHTML = `
        <h3>${c.name}</h3>
        <p class="cert-org">${c.org}</p>
        <p class="cert-date">${c.date}${c.note ? " · " + c.note : ""}</p>`;
      grid.appendChild(card);
    });
  }

  function setupNav() {
    const toggle = $("#navToggle");
    const links = $("#navLinks");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  renderHero();
  renderCareer();
  renderProjectFilters();
  renderProjectList("전체");
  renderEducation();
  renderCerts();
  setupNav();
  $("#year").textContent = new Date().getFullYear();
})();
