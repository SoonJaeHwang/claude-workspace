(function () {
  const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const form = document.getElementById("guestbookForm");
  const nameInput = document.getElementById("guestbookName");
  const messageInput = document.getElementById("guestbookMessage");
  const submitBtn = document.getElementById("guestbookSubmit");
  const status = document.getElementById("guestbookStatus");
  const list = document.getElementById("guestbookList");
  const empty = document.getElementById("guestbookEmpty");

  function formatDate(iso) {
    const d = new Date(iso);
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function renderEntries(entries) {
    list.innerHTML = "";
    if (!entries.length) {
      list.appendChild(empty);
      empty.textContent = "아직 남겨진 방명록이 없습니다. 첫 메시지를 남겨보세요!";
      return;
    }
    entries.forEach((entry) => {
      const card = document.createElement("article");
      card.className = "guestbook-entry";
      card.innerHTML = `
        <div class="guestbook-entry-head">
          <span class="guestbook-entry-name">${escapeHtml(entry.name)}</span>
          <span class="guestbook-entry-date">${formatDate(entry.created_at)}</span>
        </div>
        <p class="guestbook-entry-message">${escapeHtml(entry.message)}</p>`;
      list.appendChild(card);
    });
  }

  async function loadEntries() {
    const { data, error } = await db
      .from("guestbook")
      .select("name, message, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      empty.textContent = "방명록을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.";
      list.innerHTML = "";
      list.appendChild(empty);
      return;
    }
    renderEntries(data);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    if (!name || !message) return;

    submitBtn.disabled = true;
    status.textContent = "등록 중...";

    const { error } = await db.from("guestbook").insert({ name, message });

    submitBtn.disabled = false;

    if (error) {
      status.textContent = "등록에 실패했습니다. 잠시 후 다시 시도해주세요.";
      return;
    }

    status.textContent = "";
    form.reset();
    loadEntries();
  });

  loadEntries();
})();
