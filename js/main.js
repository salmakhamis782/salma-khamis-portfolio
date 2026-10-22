(function () {
  if (typeof anime === 'undefined' || typeof PORTFOLIO_DATA === 'undefined') { document.documentElement.classList.remove('js'); return; }
  const { animate, createTimeline, stagger, utils, createAnimatable } = anime;
  const D = PORTFOLIO_DATA;
  const root = document.documentElement;
  const params = new URLSearchParams(location.search);
  const still = params.has('still');
  const reduced = still || matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  if (params.has('flat')) document.body.classList.add('is-flat');
  const safe = u => /^(https?:|mailto:)/i.test(String(u || '').trim()) ? esc(String(u).trim()) : '';

  const UI = {
    en: {
      brand: 'Salma Khamis',
      'nav.roleTag': 'Senior Full-Stack Web Developer',
      'nav.arch': 'Architecture', 'nav.work': 'Work', 'nav.playground': 'Ask about me', 'nav.skills': 'Skills', 'nav.awards': 'Awards', 'nav.experience': 'Experience', 'nav.contact': 'Contact', 'nav.hire': 'Hire me',
      'hud.status': 'SYS.ONLINE', 'hud.stack': 'STACK:',
      'hero.workingIn': 'Mastery across', 'hero.seeWork': 'View 21 Projects ↓', 'hero.tryPlay': '⚡ Ask about me', 'hero.cv': 'Download CV',
      'card.verified': 'FULL-STACK VERIFIED',
      'stats.projects': 'platforms shipped', 'stats.years': 'years full-stack', 'stats.awards': 'accredited titles', 'stats.roles': 'roles & programs',
      'arch.eyebrow': 'What I Do · Full-Stack Engineering', 'arch.title': 'End-to-end <span class="grad">web architecture.</span>', 'arch.sub': 'From pixel-perfect responsive interfaces in React & Angular to secure Laravel/Node.js APIs, custom bilingual CMS dashboards, and optimized relational databases.',
      'pipe.eyebrow': 'Interactive Full-Stack Data Flow', 'pipe.title': 'Trace a Live Production Request', 'pipe.ready': 'PIPELINE ACTIVE · 99.9% UPTIME ARCHITECTURE', 'pipe.run': '▶ Simulate Request Flow',
      'work.eyebrow': 'Featured Work · 21 Live & Commercial Builds', 'work.title': 'Featured <span class="grad">Client Projects.</span>', 'work.sub': 'Production web platforms, enterprise portals, and custom admin dashboards delivered for clients across Egypt & the Gulf.',
      'work.showAll': 'Show all 21 projects (+12) ↓', 'work.showLess': 'Show fewer projects ↑',
      'card.viewLive': 'View live ↗', 'card.private': 'Private / Internal',
      'play.eyebrow': 'Interactive Q&A & Solution Planner', 'play.title': 'Ask <span class="grad">about me.</span>', 'play.sub': 'Ask my portfolio assistant anything on the left, or select what you need built on the right to see the exact architecture and live reference builds.',
      'play.badge': 'Online', 'play.askBtn': 'Ask ↵',
      'lab.eyebrow': 'Solution Blueprint & Hiring Fit', 'lab.title': 'What Are We Building Together?', 'lab.sub': 'Select a platform type or engineering role below to see my proven full-stack architecture, deliverables, and live reference builds.',
      'lab.speed': '3D Orbit Velocity', 'lab.shape': '3D Geometry Mode', 'lab.matchTitle': 'Click a technology to inspect production impact:',
      'skills.eyebrow': 'Technical Stack & Core Proficiencies', 'skills.title': 'Technical skills <span class="grad">&amp; architecture.</span>', 'skills.sub': 'Core technologies, frameworks, databases and engineering practices applied across production systems.',
      'awards.eyebrow': 'National & International Recognition', 'awards.title': 'Honors <span class="grad">&amp; awards.</span>', 'awards.sub': 'National championships, international podium honors and competitive robotics victories. Select any title below to inspect the competition brief.',
      'exp.eyebrow': 'Work History & Technical Leadership', 'exp.title': 'Professional <span class="grad">experience.</span>', 'exp.sub': '5+ years delivering enterprise software, leading technical teams and instructing web development.',
      'contact.eyebrow': 'Available for commercial & senior roles', 'contact.title': 'Let\'s build <span class="grad grad--animate">something bold.</span>', 'contact.lead': 'Direct channels for software engineering positions, commercial web platforms and architectural consultations. Fastest reply on WhatsApp.', 'contact.remote': 'Global remote · Hybrid in Cairo / Giza · Open to relocation',
      'form.title': 'Send a Direct Message', 'form.name': 'Your Name', 'form.email': 'Your Email', 'form.msg': 'Project Brief or Role Details', 'form.send': 'Send Message →',
      'form.sending': 'Sending...', 'form.errReq': 'Please fill in your name, email, and message.', 'form.errEmail': 'Please enter a valid email address.',
      'form.ok': '✓ Message prepared! Replace YOUR_FORM_ID in index.html with your Formspree ID to receive submissions directly, or email salmakhamis782@gmail.com.',
      'form.errNet': 'Could not send right now. Please email salmakhamis782@gmail.com directly.',
      all: 'All', visit: 'View live', nolink: 'Private / internal build', education: 'Education', languages: 'Languages',
      whatsapp: 'WhatsApp / Voice', email: 'Direct email', linkedin: 'LinkedIn', github: 'GitHub', location: 'Location',
      hintWa: 'Fastest response · direct chat', hintMail: 'Briefs, RFPs, interview scheduling', hintIn: 'Work history & recommendations', hintGh: 'Code & open repositories',
      cats: { realestate: 'Real estate', fullstack: 'Full-stack', laravel: 'Laravel', corporate: 'Corporate', iot: 'IoT & hardware', frontend: 'Front-end', ecommerce: 'E-commerce' },
      stages: [
        'Full-Stack Web Development',
        'Frontend → API → Database',
        '21 Production Platforms',
        'Ask About Me & Stack Matcher',
        'Technical Skills & Honors',
        'Let\'s Build Together'
      ],
      title: ['I', 'architect', '*full-stack', '|', 'platforms', 'that', '*ship', '*fast', '|', 'and', 'scale', '**boldly.']
    }
  };

  const lang = 'en';
  try { localStorage.removeItem('lang'); } catch (e) {}
  const T = k => UI.en[k] ?? k;
  const L = (obj, key) => obj[key];
  const Lx = (obj, en) => obj[en];

  const NO_LOGO = new Set(['upscale-egypt', 'al-arabyia']);
  const CAT_COLORS = {
    realestate: ['#1e3a8a', '#2563eb'],
    fullstack: ['#1d4ed8', '#38bdf8'],
    laravel: ['#0369a1', '#06b6d4'],
    corporate: ['#172554', '#3b82f6'],
    iot: ['#0284c7', '#22d3ee'],
    frontend: ['#2563eb', '#60a5fa'],
    ecommerce: ['#1e40af', '#38bdf8']
  };
  const AWARD_COLORS = {
    gold: ['#38bdf8', '#1d4ed8'],
    silver: ['#60a5fa', '#1e3a8a'],
    cyan: ['#06b6d4', '#0369a1'],
    purple: ['#3b82f6', '#172554'],
    blue: ['#2563eb', '#1e3a8a'],
    emerald: ['#22d3ee', '#0284c7'],
    violet: ['#60a5fa', '#1e40af']
  };

  const LAYER_CONSOLES = {
    fe: `<b>// Frontend Layer · React.js / Angular / ES6+</b>\n<code>render(&lt;BilingualApp dir={lang} theme="3D" /&gt;)\n✓ Lighthouse 98 · First Paint &lt; 0.9s</code>`,
    be: `<b>// Backend Layer · PHP Laravel / Node.js API</b>\n<code>Route::middleware(['auth:rbac','throttle'])->group();\n✓ RESTful JSON · JWT/Session · Zero-Trust Security</code>`,
    db: `<b>// Data & Custom CMS · MySQL / MongoDB</b>\n<code>SELECT units, leads FROM masterplan INDEX(idx_fast);\n✓ 21 Custom Admin Dashboards · Role-Based CMS</code>`
  };

  const PIPELINE_FLOWS = {
    realestate: {
      steps: [
        { title: 'React / ES6+ UI', desc: 'Interactive masterplan & installment calculator', code: 'POST /api/v1/vira/inquiry' },
        { title: 'Laravel / PHP API', desc: 'Sanitizes lead payload & assigns sales agent', code: 'LeadController@store -> validate()' },
        { title: 'MySQL Relational DB', desc: 'Stores unit calculation & client record', code: 'INSERT INTO leads (unit_id, plan)' },
        { title: 'Custom Admin CMS', desc: 'Instant dashboard alert & WhatsApp routing', code: '200 OK · Lead routed in 16ms' }
      ],
      summary: 'VIRA / Upscale / Helm Al Maskan: Real-time unit filtering + automated lead capture.'
    },
    medical: {
      steps: [
        { title: 'Bilingual RTL/LTR UI', desc: 'Patient / Trainee portal in Arabic & English', code: 'GET /portal/results?id=EG-9042' },
        { title: 'RBAC Auth Engine', desc: 'Verifies clinical staff or trainee credentials', code: 'Auth::checkRole(["doctor","trainee"])' },
        { title: 'High-Volume MySQL', desc: 'Fault-tolerant medical records & certificate lookup', code: 'SELECT report_pdf FROM lab_results' },
        { title: 'LMS & Lab Dashboard', desc: 'Generates verified PDF report / KSA certificate', code: '200 OK · Encrypted PDF streamed' }
      ],
      summary: 'Saudi EMS / Ministry of Health / Almokhtabar: High-traffic medical & LMS portals.'
    },
    iot: {
      steps: [
        { title: 'Arduino / Sensors', desc: 'Solar voltage, grid load & vehicle kinetic sensors', code: 'Serial/MQTT -> {"v":24.6,"src":"SOLAR"}' },
        { title: 'Node.js / Web Gateway', desc: 'Streams real-time telemetry & threshold logic', code: 'if (battery < 20%) switchGrid("MAIN")' },
        { title: 'Telemetry Time-Series', desc: 'Logs power consumption & switching events', code: 'db.telemetry.insertOne({ts, kw: 4.2})' },
        { title: 'Remote Control UI', desc: 'Live gauges & manual/auto relay override', code: 'WS_ACK · Relay switched in 12ms' }
      ],
      summary: 'Solar Energy Control & SERA Self-Charging Vehicle: Hardware-to-web IoT telemetry.'
    }
  };

  // ---------- Render DOM ----------
  function render() {
    root.lang = 'en'; root.dir = 'ltr';
    $$('[data-i18n]').forEach(el => el.textContent = T(el.dataset.i18n));
    $$('[data-i18n-html]').forEach(el => el.innerHTML = T(el.dataset.i18nHtml));

    const P = D.profile;
    $('#heroBadge').textContent = P.role;
    $('#heroTitle').innerHTML = T('title').map(w => w === '|' ? '<br>' : `<span class="w${w.startsWith('**') ? ' w--grad2' : w.startsWith('*') ? ' w--grad' : ''}">${esc(w.replace(/^\*+/, ''))}</span>`).join(' ');
    if ($('#heroRole')) $('#heroRole').textContent = P.title_badge + ' · ' + P.role;
    $('#heroSummary').textContent = P.summary_en;
    if ($('#photoLocation')) $('#photoLocation').textContent = '📍 ' + P.location;
    $('#footLocation').textContent = P.location;
    $('#year').textContent = '© ' + new Date().getFullYear();

    const skillsFlat = D.skillCategories.flatMap(c => c.skills);
    const roles = skillsFlat.filter(s => s.xp >= 90).map(s => s.name);
    if ($('#rolesTrack')) $('#rolesTrack').innerHTML = [...roles, roles[0]].map(r => `<b>${esc(r)}</b>`).join('');

    const pillsA = skillsFlat.map(s => `<span class="pill pill--c" style="--c:${s.color}">${esc(s.name)}</span>`).join('');
    const pillsB = Object.keys(CAT_COLORS).map(c => `<span class="pill">${esc(T('cats')[c])}</span>`).join('') + D.achievements.map(a => `<span class="pill">${esc(a.icon)} ${esc(a.title)}</span>`).join('');
    $('#marqueeA').innerHTML = pillsA + pillsA;
    $('#marqueeB').innerHTML = pillsB + pillsB;

    // Render Full-Stack Architecture Pillars
    if (D.fullStackPillars && $('#archPillars')) {
      $('#archPillars').innerHTML = D.fullStackPillars.map(p => `
        <article class="pillar" data-reveal data-tilt data-spotlight style="--c1:${p.color1};--c2:${p.color2}">
          <div class="pillar__top">
            <i class="pillar__icon">${p.icon}</i>
            <span class="pillar__layer">${esc(L(p, 'layer'))}</span>
          </div>
          <h3>${esc(L(p, 'title'))}</h3>
          <p>${esc(L(p, 'desc'))}</p>
          <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
        </article>
      `).join('');
    }

    // Filters & 21 Standardized Cards (16:9 ratio, uniform height, neutral placeholder when no screenshot, clear View live button, one-line result, role, tech tags)
    const counts = D.projects.reduce((m, p) => (m[p.category] = (m[p.category] || 0) + 1, m), {});
    $('#filters').innerHTML = `<button type="button" class="is-on" data-cat="all">${T('all')}<b>${D.projects.length}</b></button>` +
      Object.keys(CAT_COLORS).filter(c => counts[c]).map(c => `<button type="button" data-cat="${c}">${esc(T('cats')[c])}<b>${counts[c]}</b></button>`).join('');

    const roleLabel = L(P, 'role');
    $('#cards').innerHTML = D.projects.map((p, i) => {
      const [c1, c2] = CAT_COLORS[p.category] || CAT_COLORS.fullstack;
      const svg = /\.svg$/.test(p.logo);
      const isPlaceholder = NO_LOGO.has(p.id) || svg;
      const altText = `${p.title} — ${L(p, 'subtitle')}`;
      const media = NO_LOGO.has(p.id)
        ? `<div class="card__placeholder"><span class="card__placeholder-icon">⌘</span><span class="card__word">${esc(p.title)}</span></div>`
        : `<img src="${p.logo}" alt="${esc(altText)}" loading="lazy" decoding="async" width="640" height="360">`;
      const live = safe(p.url);
      const topTags = (p.tags || []).slice(0, 4).map(t => `<span>${esc(t)}</span>`).join('');
      const resultLine = Lx(p, 'result_en', 'result_ar') || L(p, 'subtitle');
      return `<article class="card is-in" data-spotlight data-id="${p.id}" data-cat="${p.category}" data-idx="${i}" style="--c1:${c1};--c2:${c2}">
        <div class="card__chrome"><div class="card__dots"><i></i><i></i><i></i></div><span>${esc(p.urlDisplay || p.id)}</span></div>
        <button type="button" class="card__open" aria-label="${esc(p.title)} — details">
          <div class="card__cover${isPlaceholder ? ' card__cover--neutral' : ''}${svg ? ' card__cover--svg' : ''}">${media}<i class="card__shine"></i><span class="card__badge">${esc(p.badge)}</span></div>
          <div class="card__body">
            <span class="card__role">${esc(roleLabel)}</span>
            <h3>${esc(p.title)}</h3>
            <p class="card__result">${esc(resultLine)}</p>
            <div class="card__tags">${topTags}</div>
          </div>
        </button>
        <div class="card__meta"><span>${esc(p.year)} · ${esc(T('cats')[p.category] || p.category)}</span>${live ? `<a class="btn btn--grad btn--xs card__live" href="${live}" target="_blank" rel="noopener">${T('card.viewLive')}</a>` : `<span class="card__priv">${T('card.private')}</span>`}</div></article>`;
    }).join('');

    // Engineering Metrics & Skills
    $('#metrics').innerHTML = D.engineeringMetrics.map((m, i) => {
      const pairs = [['#1e3a8a', '#3b82f6'], ['#1d4ed8', '#38bdf8'], ['#0369a1', '#06b6d4'], ['#1e40af', '#60a5fa'], ['#2563eb', '#22d3ee']][i % 5];
      return `<div class="bar" data-reveal data-bar="${m.value}" style="--c1:${pairs[0]};--c2:${pairs[1]}"><div class="bar__head"><span>${esc(L(m, 'name'))}</span><b>0%</b></div><div class="bar__track"><i></i></div></div>`;
    }).join('');

    $('#skillgrid').innerHTML = D.skillCategories.map(c => `<div class="skillcat" data-reveal data-spotlight><h3>${esc(L(c, 'title'))}</h3>${c.skills.map(s =>
      `<div class="skill" style="--c:${s.color}"><i></i><span>${esc(s.name)}</span><b>${s.xp}%</b><em>${esc(s.level)}</em></div>`).join('')}</div>`).join('');

    // Awards (Podium Spotlight + Interactive Ledger)
    const renderPodiumCard = (a, idx) => {
      const [c1, c2] = AWARD_COLORS[a.color] || AWARD_COLORS.violet;
      return `
        <div class="podium-card__top">
          <span class="podium-card__tier">HONOR #0${idx + 1} · ${esc(a.tier)}</span>
          <span class="podium-card__year">${esc(a.year)}</span>
        </div>
        <div class="podium-card__hero">
          <i class="podium-card__emblem">${a.icon}</i>
          <div class="podium-card__headings">
            <h3>${esc(a.title)}</h3>
            <span class="podium-card__ribbon">${esc(a.award)}</span>
          </div>
        </div>
        <p class="podium-card__desc">${esc(Lx(a, 'desc_en', 'desc_ar'))}</p>
        <div class="podium-card__stats">
          <div class="podium-stat"><strong>🥇 1st Gold</strong><span>WorldSkills Egypt</span></div>
          <div class="podium-stat"><strong>🌍 Global Silver</strong><span>UNESCO Finals</span></div>
          <div class="podium-stat"><strong>7 Titles</strong><span>National &amp; Global</span></div>
        </div>`;
    };

    const firstA = D.achievements[0];
    const [fc1, fc2] = AWARD_COLORS[firstA.color] || AWARD_COLORS.violet;
    $('#awardgrid').innerHTML = `
      <article class="podium-card" id="awardSpotlight" data-reveal data-spotlight style="--c1:${fc1};--c2:${fc2}">
        ${renderPodiumCard(firstA, 0)}
      </article>
      <div class="award-ledger" id="awardLedger" data-reveal>
        ${D.achievements.map((a, i) => {
          const [c1, c2] = AWARD_COLORS[a.color] || AWARD_COLORS.violet;
          return `<button type="button" class="ledger-row${i === 0 ? ' is-active' : ''}" data-aidx="${i}" style="--c1:${c1};--c2:${c2}">
            <span class="ledger-row__idx">0${i + 1}</span>
            <i class="ledger-row__icon">${a.icon}</i>
            <div class="ledger-row__main">
              <strong>${esc(a.title)}</strong>
              <span>${esc(a.award)}</span>
            </div>
            <div class="ledger-row__meta">
              <span class="ledger-row__tier">${esc(a.tier)}</span>
              <span class="ledger-row__year">${esc(a.year)}</span>
            </div>
          </button>`;
        }).join('')}
      </div>`;

    const spotEl = $('#awardSpotlight');
    $$('#awardLedger .ledger-row').forEach(row => {
      const activate = () => {
        const idx = +row.dataset.aidx;
        const item = D.achievements[idx];
        if (!item || !spotEl) return;
        $$('#awardLedger .ledger-row').forEach(r => r.classList.toggle('is-active', r === row));
        const [c1, c2] = AWARD_COLORS[item.color] || AWARD_COLORS.violet;
        spotEl.style.setProperty('--c1', c1);
        spotEl.style.setProperty('--c2', c2);
        spotEl.innerHTML = renderPodiumCard(item, idx);
        if (!reduced) animate(spotEl, { opacity: [0.65, 1], y: [6, 0], duration: 240, ease: 'out(3)' });
      };
      row.addEventListener('click', activate);
      row.addEventListener('pointerenter', () => { if (fine) activate(); });
    });

    // Experience Timeline
    $('#timeline').innerHTML = D.experience.map(e => {
      const on = /PRESENT|ACTIVE|CURRENT/i.test(e.status + e.period);
      const pts = Lx(e, 'points_en', 'points_ar');
      return `<li data-reveal><span class="timeline__when">${esc(e.period)}</span><div class="timeline__card" data-spotlight>
        <div class="timeline__top"><h3>${esc(L(e, 'role'))}<span>${esc(L(e, 'company'))} · ${esc(e.location)}</span></h3><span class="status${on ? ' status--on' : ''}">${esc(e.status)}</span></div>
        <span class="timeline__badge">${esc(e.badge)}</span>
        <ul>${pts.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></li>`;
    }).join('');

    $('#contactLinks').innerHTML = [
      ['https://wa.me/' + P.phone.replace(/\D/g, ''), T('whatsapp'), P.phone, T('hintWa'), '#1d4ed8', '#38bdf8'],
      ['mailto:' + P.email, T('email'), P.email, T('hintMail'), '#1e3a8a', '#3b82f6'],
      [P.linkedin, T('linkedin'), P.linkedin.replace(/^https?:\/\//, ''), T('hintIn'), '#0369a1', '#06b6d4'],
      [P.github, T('github'), P.github.replace(/^https?:\/\//, ''), T('hintGh'), '#1e40af', '#60a5fa']
    ].filter(x => safe(x[0])).map(([href, label, value, hint, c1, c2]) => `<a class="clink" data-reveal data-magnet href="${safe(href)}" ${/^http/i.test(href) ? 'target="_blank" rel="noopener"' : ''} style="--c1:${c1};--c2:${c2}"><span class="clink__label">${esc(label)}</span><span class="clink__value">${esc(value)}</span><span class="clink__hint">${esc(hint)}</span></a>`).join('');

    bindCards(); bindMagnets(); bindSpotlights(); observe(); tilt();
  }

  // ---------- Interactive Ask About Salma Knowledge Engine ----------
  const termOut = $('#termOutput');

  function renderProjectMiniCards(list) {
    return `<div class="chat-projects">${list.map(p => `
      <button type="button" class="chat-pcard" data-open-id="${esc(p.id)}">
        <div class="chat-pcard__top"><strong>${esc(p.title)}</strong><span>${esc(p.year)} · ↗</span></div>
        <p>${esc(p.result_en || p.subtitle)}</p>
      </button>`).join('')}</div>`;
  }

  function renderFollowUps(items) {
    return `<div class="chat-follow"><span class="chat-follow__lbl">Ask next:</span>${items.map(([cmd, label]) =>
      `<button type="button" data-ask="${esc(cmd)}" data-label="${esc(label)}">${esc(label)}</button>`
    ).join('')}</div>`;
  }

  function bindChatInteractions(container) {
    $$('[data-open-id]', container).forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.openId, btn));
    });
    $$('[data-ask]', container).forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.dataset.ask;
        const lbl = btn.dataset.label || btn.textContent;
        $$('#termChips button').forEach(x => x.classList.toggle('is-active', x.dataset.cmd === cmd));
        handleCommand(cmd, lbl);
      });
    });
  }

  function appendChatEntry(questionText, tag, confidence, bodyHtml, replaceAll = false) {
    if (!termOut) return;
    if (replaceAll) termOut.innerHTML = '';
    const entry = document.createElement('div');
    entry.className = 'chat-entry';
    entry.innerHTML = `
      ${questionText ? `<div class="chat-q">${esc(questionText)}</div>` : ''}
      <div class="chat-a">
        <div class="chat-a__head">
          <span class="chat-a__tag">${esc(tag)}</span>
          <span class="chat-a__conf">${esc(confidence)}</span>
        </div>
        ${bodyHtml}
      </div>`;
    termOut.appendChild(entry);
    bindChatInteractions(entry);
    termOut.scrollTop = termOut.scrollHeight;
    if (!reduced) animate(entry, { opacity: [0, 1], y: [10, 0], duration: 320, ease: 'out(3)' });
  }

  function buildResponse(raw) {
    const q = String(raw || '').trim().toLowerCase();

    if (q === 'whoami' || q.includes('who is') || q.includes('about salma') || q.includes('tell me about') || q === 'about' || q === 'bio' || q === 'who') {
      const top3 = D.projects.slice(0, 3);
      return {
        tag: 'Executive Profile · Salma Khamis',
        conf: 'VERIFIED PORTFOLIO DATA',
        html: `
          <p><b>Salma Khamis</b> is a <em>Senior Full-Stack Web Developer</em> &amp; Technical Instructor based in Egypt, specializing in high-performance commercial platforms, custom bilingual CMS dashboards, and enterprise web architecture.</p>
          <div class="chat-stats">
            <div class="chat-stat"><strong>21 Platforms</strong><span>Shipped to production</span></div>
            <div class="chat-stat"><strong>5+ Years</strong><span>Full-stack delivery</span></div>
            <div class="chat-stat"><strong>1st Gold 🥇</strong><span>WorldSkills Egypt</span></div>
            <div class="chat-stat"><strong>9 Roles</strong><span>Industry &amp; mentoring</span></div>
          </div>
          <p>Click any flagship platform below to inspect its full architecture brief:</p>
          ${renderProjectMiniCards(top3)}
          <div class="chat-actions">
            <a class="chat-act" href="Salma_Khamis_CV.pdf" download>📄 Download CV</a>
            <a class="chat-act" href="#work">🚀 Browse All 21 Projects</a>
          </div>
          ${renderFollowUps([['stack', '🛠️ Tech Arsenal'], ['experience', '📈 Career & Impact'], ['hire', '💼 Hire & Contact']])}`
      };
    }

    if (q === 'stack' || q.includes('arsenal') || q.includes('tech stack') || q.includes('skills') || q.includes('technologies') || q.includes('architecture')) {
      return {
        tag: 'Full-Stack Architecture & Skills',
        conf: '4 CORE LAYERS · 22 TECHNOLOGIES',
        html: `
          <p>Salma architects complete web systems end-to-end — from responsive interfaces to secure APIs and relational schemas:</p>
          <ul class="chat-list">
            <li><b>Frontend Engineering:</b> React.js <em>(95%)</em>, JavaScript ES6+ <em>(98%)</em>, Angular, HTML5/CSS3, Tailwind &amp; Bootstrap, Bilingual RTL/LTR UI systems.</li>
            <li><b>Backend &amp; APIs:</b> PHP 8 &amp; Laravel <em>(96%)</em>, Node.js &amp; Express <em>(90%)</em>, RESTful API design, RBAC Authentication, Python.</li>
            <li><b>Databases &amp; Custom CMS:</b> MySQL schema design &amp; query indexing <em>(95%)</em>, MongoDB <em>(88%)</em>, 21 custom role-based Admin Dashboards.</li>
            <li><b>DevOps &amp; Quality:</b> Git/GitHub CI workflows, Linux/cPanel cloud deployment, Core Web Vitals optimization <em>(&lt;1.1s load times)</em>.</li>
          </ul>
          ${renderFollowUps([['laravel', '🔥 Laravel Projects'], ['react', '⚛️ React Projects'], ['domains', '🏢 Industry Systems']])}`
      };
    }

    if (q === 'projects' || q.includes('top live') || q.includes('flagship') || q.includes('best project') || q.includes('all project')) {
      const picks = [
        D.projects.find(p => p.id === 'vira-real-estate'),
        D.projects.find(p => p.id === 'peta-core'),
        D.projects.find(p => p.id === 'saudi-ems'),
        D.projects.find(p => p.id === 'x-vision'),
        D.projects.find(p => p.id === 'teratronics-react'),
        D.projects.find(p => p.id === 'almokhtabar-lab')
      ].filter(Boolean);
      return {
        tag: 'Flagship Production Platforms (6 of 21)',
        conf: 'CLICK ANY CARD FOR ARCHITECTURE BRIEF',
        html: `
          <p>Here are <b>6 flagship production platforms</b> across Real Estate, SaaS, Healthcare LMS, and Corporate sectors (click any card to open its full case study):</p>
          ${renderProjectMiniCards(picks)}
          ${renderFollowUps([['domains', '🏢 Filter by Industry'], ['stack', '🛠️ Tech Stack'], ['hire', '💼 Discuss Your Project']])}`
      };
    }

    if (q === 'experience' || q.includes('career') || q.includes('work history') || q.includes('companies') || q.includes('roles') || q.includes('instructor') || q.includes('experience')) {
      const topRoles = D.experience.slice(0, 4);
      return {
        tag: 'Career History & Measurable Impact',
        conf: '5+ YEARS · 9 ROLES & PROGRAMS',
        html: `
          <p>Over <b>5+ years</b>, Salma has led full-stack delivery for commercial agencies across Egypt &amp; the Gulf while mentoring hundreds of developers:</p>
          <ul class="chat-list">
            ${topRoles.map(e => `<li><b>${esc(e.role)}</b> at <em>${esc(e.company)}</em> (${esc(e.period)}) — ${esc((e.points_en && e.points_en[0]) || '')}</li>`).join('')}
          </ul>
          <div class="chat-actions">
            <a class="chat-act" href="#experience">📅 View Full 9-Role Timeline</a>
            <a class="chat-act" href="Salma_Khamis_CV.pdf" download>📄 Full CV (PDF)</a>
          </div>
          ${renderFollowUps([['gold', '🏆 WorldSkills Gold'], ['projects', '🚀 Flagship Projects'], ['hire', '💼 Hire Salma']])}`
      };
    }

    if (q === 'domains' || q.includes('industry') || q.includes('real estate') || q.includes('medical') || q.includes('healthcare') || q.includes('iot')) {
      const domainPicks = [
        D.projects.find(p => p.id === 'vira-real-estate'),
        D.projects.find(p => p.id === 'upscale-egypt'),
        D.projects.find(p => p.id === 'saudi-ems'),
        D.projects.find(p => p.id === 'solar-energy-iot')
      ].filter(Boolean);
      return {
        tag: 'Industry Verticals · Egypt & Gulf',
        conf: 'REAL ESTATE · MEDICAL · SAAS · IOT',
        html: `
          <p>Salma's 21 platforms span <b>4 major industry verticals</b>:</p>
          <ul class="chat-list">
            <li><b>Real Estate Platforms (4):</b> Interactive masterplans, unit filters &amp; installment calculators (<em>VIRA</em>, <em>Upscale Egypt</em>, <em>Helm Al Maskan</em>, <em>Al-Arabyia</em>).</li>
            <li><b>Medical &amp; KSA LMS Portals (3):</b> Bilingual healthcare training, encrypted lab portals &amp; certificate verification (<em>Saudi EMS</em>, <em>Ministry of Health</em>, <em>Almokhtabar</em>).</li>
            <li><b>Enterprise SaaS &amp; Corporate (12):</b> RBAC support ticketing, security quote engines &amp; B2B portals (<em>Peta Core</em>, <em>X-Vision</em>, <em>TeraTronics</em>).</li>
            <li><b>IoT &amp; Embedded Systems (2):</b> Hardware-to-web telemetry dashboards (<em>Solar Grid Control</em>, <em>SERA Self-Charging EV</em>).</li>
          </ul>
          ${renderProjectMiniCards(domainPicks)}
          ${renderFollowUps([['projects', '🚀 Top Flagship Builds'], ['stack', '🛠️ Tech Arsenal'], ['hire', '💼 Start a Project']])}`
      };
    }

    if (q === 'gold' || q.includes('award') || q.includes('worldskills') || q.includes('honor') || q.includes('medal') || q.includes('unesco') || q.includes('robocup')) {
      return {
        tag: 'National & International Championships',
        conf: '7 ACCREDITED TITLES',
        html: `
          <p>Salma holds <b>7 national and international competition titles</b> in Web Development, Business Software, and Robotics:</p>
          <ul class="chat-list">
            ${D.achievements.slice(0, 5).map(a => `<li>${esc(a.icon)} <b>${esc(a.title)}</b> — <em>${esc(a.award)}</em> (${esc(a.year)})</li>`).join('')}
          </ul>
          <div class="chat-actions">
            <a class="chat-act" href="#awards">🏆 View All 7 Honors</a>
          </div>
          ${renderFollowUps([['whoami', '👋 Executive Profile'], ['experience', '📈 Career & Impact'], ['hire', '💼 Hire Salma']])}`
      };
    }

    if (q === 'hire' || q.includes('contact') || q.includes('email') || q.includes('whatsapp') || q.includes('phone') || q.includes('remote') || q.includes('available') || q.includes('cv') || q.includes('resume')) {
      return {
        tag: 'Availability & Direct Contact Channels',
        conf: 'OPEN FOR SENIOR ROLES & COMMERCIAL PROJECTS',
        html: `
          <p><b>Why teams hire Salma:</b> Full ownership from Figma/React UI to Laravel/Node APIs and MySQL optimization — backed by <em>21 live commercial builds</em> and <em>WorldSkills National Gold</em> speed.</p>
          <ul class="chat-list">
            <li><b>Work Modes:</b> Global Remote · Hybrid in Cairo / Giza · Open to Relocation.</li>
            <li><b>Direct Email:</b> <em>${esc(D.profile.email)}</em></li>
            <li><b>WhatsApp / Voice:</b> <em>${esc(D.profile.phone)}</em> (Fastest response)</li>
          </ul>
          <div class="chat-actions">
            <a class="chat-act" href="https://wa.me/${D.profile.phone.replace(/\D/g, '')}" target="_blank" rel="noopener">💬 Chat on WhatsApp ↗</a>
            <a class="chat-act" href="mailto:${esc(D.profile.email)}">✉️ Send Email</a>
            <a class="chat-act" href="Salma_Khamis_CV.pdf" download>📄 Download CV</a>
          </div>
          ${renderFollowUps([['projects', '🚀 Flagship Projects'], ['stack', '🛠️ Tech Arsenal'], ['experience', '📈 Career History']])}`
      };
    }

    // Dynamic search across all 21 projects + skills
    const tokens = q.split(/\s+/).filter(t => t.length >= 2);
    const scored = D.projects.map(p => {
      const hay = `${p.id} ${p.title} ${p.subtitle} ${p.desc_en} ${p.result_en || ''} ${p.category} ${(p.tags || []).join(' ')}`.toLowerCase();
      let score = hay.includes(q) ? 5 : 0;
      tokens.forEach(tk => { if (hay.includes(tk)) score += 2; });
      return { p, score };
    }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);

    if (scored.length) {
      const matches = scored.slice(0, 4).map(x => x.p);
      return {
        tag: `Portfolio Search · ${scored.length} Matching Platform${scored.length > 1 ? 's' : ''}`,
        conf: `QUERY: "${raw.toUpperCase()}"`,
        html: `
          <p>Found <b>${scored.length} production platform${scored.length > 1 ? 's' : ''}</b> matching "<em>${esc(raw)}</em>" — click any card below to inspect its architecture &amp; live link:</p>
          ${renderProjectMiniCards(matches)}
          ${renderFollowUps([['projects', '🚀 All Flagship Projects'], ['stack', '🛠️ Full Tech Stack'], ['hire', '💼 Hire Salma']])}`
      };
    }

    return {
      tag: 'Portfolio Assistant Guide',
      conf: 'TRY ANY TOPIC OR PROJECT NAME',
      html: `
        <p>I can answer questions about Salma's <b>21 projects</b>, <b>tech stack</b> (React, Laravel, Node.js, MySQL, IoT), <b>career experience</b>, <b>WorldSkills Gold</b>, or <b>availability</b>.</p>
        ${renderFollowUps([['whoami', '👋 Who is Salma?'], ['projects', '🚀 Flagship Projects'], ['stack', '🛠️ Tech Arsenal'], ['hire', '💼 Hire & Contact']])}`
    };
  }

  function handleCommand(raw, displayLabel) {
    const q = String(raw || '').trim();
    if (!q) return;
    if (q.toLowerCase() === 'clear' || q.toLowerCase() === 'cls') {
      const initRes = buildResponse('whoami');
      appendChatEntry('👋 Who is Salma Khamis?', initRes.tag, initRes.conf, initRes.html, true);
      return;
    }
    const res = buildResponse(q);
    appendChatEntry(displayLabel || q, res.tag, res.conf, res.html, false);
  }

  if (termOut) {
    const initRes = buildResponse('whoami');
    appendChatEntry('👋 Who is Salma Khamis?', initRes.tag, initRes.conf, initRes.html, true);
  }
  $$('#termChips button').forEach(b => b.addEventListener('click', () => {
    $$('#termChips button').forEach(x => x.classList.toggle('is-active', x === b));
    handleCommand(b.dataset.cmd, b.dataset.label || b.textContent);
  }));
  $('#termClearBtn')?.addEventListener('click', () => {
    $$('#termChips button').forEach((x, i) => x.classList.toggle('is-active', i === 0));
    handleCommand('clear');
  });
  $('#termForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const inp = $('#termField');
    if (!inp || !inp.value.trim()) return;
    $$('#termChips button').forEach(x => x.classList.remove('is-active'));
    handleCommand(inp.value, inp.value.trim());
    inp.value = '';
  });

  // ---------- Interactive Solution Blueprint & Hiring Scope Builder ----------
  const SCOPE_BLUEPRINTS = [
    {
      key: 'realestate',
      tab: '🏢 Real Estate Platform',
      title: 'Real Estate & Property Masterplan Portal',
      badge: '4 LIVE PLATFORMS SHIPPED',
      layers: [
        { name: 'Frontend UI', val: 'React / ES6+ · Interactive Filters' },
        { name: 'Backend Engine', val: 'PHP / Laravel · Lead & CRM API' },
        { name: 'Data & CMS', val: 'MySQL · Unit & Installment CMS' }
      ],
      points: [
        'Dynamic unit search, payment plan & installment calculators with <1.1s load time.',
        'Custom bilingual (RTL/LTR) Admin CMS to manage compounds, floorplans & pricing.',
        'Automated WhatsApp & sales-pipeline lead routing with full analytics.'
      ],
      refs: ['vira-real-estate', 'upscale-egypt', 'helm-al-maskan', 'al-arabyia'],
      inquiry: 'Hi Salma, we are looking to build a Real Estate / Property Platform and would love to discuss the architecture and timeline.'
    },
    {
      key: 'medical',
      tab: '🏥 Medical & LMS Portal',
      title: 'Healthcare, Lab Results & KSA LMS Platform',
      badge: '3 ENTERPRISE PORTALS SHIPPED',
      layers: [
        { name: 'Frontend UI', val: 'Bilingual RTL/LTR Accessible UI' },
        { name: 'Backend Engine', val: 'Laravel / Node.js · RBAC Auth' },
        { name: 'Data & CMS', val: 'High-Volume MySQL · PDF Engine' }
      ],
      points: [
        'Role-based portals for patients, doctors, trainees, and accreditation admins.',
        'Automated PDF lab report & accredited KSA training certificate generation.',
        'Hardened security, audit logging, and high-concurrency relational queries.'
      ],
      refs: ['saudi-ems', 'egypt-covid-portal', 'almokhtabar-lab'],
      inquiry: 'Hi Salma, we need a Healthcare / Medical / LMS Portal and would like to discuss your experience with Saudi EMS & medical platforms.'
    },
    {
      key: 'saas',
      tab: '⚡ Enterprise SaaS & B2B',
      title: 'Custom SaaS, Ticketing & B2B Quote Systems',
      badge: '10+ PRODUCTION SYSTEMS',
      layers: [
        { name: 'Frontend UI', val: 'React.js / Angular SPA' },
        { name: 'Backend Engine', val: 'Laravel MVC / RESTful APIs' },
        { name: 'Data & CMS', val: 'MySQL / MongoDB · Multi-Role' }
      ],
      points: [
        'Multi-tenant role-based access control (RBAC), SLA tracking & workflow automation.',
        'Interactive B2B product configurators, quotation engines, and client portals.',
        'Clean modular architecture built for long-term maintainability and fast feature shipping.'
      ],
      refs: ['peta-core', 'x-vision', 'teratronics-react', 'the-road-trading'],
      inquiry: 'Hi Salma, we are building a SaaS / B2B web application and would like to discuss full-stack architecture and development.'
    },
    {
      key: 'ecommerce',
      tab: '🛒 E-Commerce & CMS',
      title: 'E-Commerce Storefront & Custom Admin CMS',
      badge: 'FULL-STACK COMMERCE',
      layers: [
        { name: 'Frontend UI', val: 'Fast Responsive Catalog & Cart' },
        { name: 'Backend Engine', val: 'PHP / Laravel · Order & Inventory' },
        { name: 'Data & CMS', val: 'MySQL · Merchant Dashboard' }
      ],
      points: [
        'Conversion-focused product catalogs, dynamic filtering, and checkout workflows.',
        'Custom merchant dashboard for inventory, promo codes, orders, and customer tiers.',
        'SEO-ready semantic markup, WebP media optimization, and Core Web Vitals tuning.'
      ],
      refs: ['fastfix-store', 'premier-egypt', 'ashmand'],
      inquiry: 'Hi Salma, we want to launch an E-Commerce / Custom CMS platform and would love to discuss our requirements.'
    },
    {
      key: 'role',
      tab: '👩‍💻 Senior Full-Stack Role',
      title: 'Senior Full-Stack Engineer / Technical Lead',
      badge: 'WORLDSKILLS GOLD · 5+ YRS',
      layers: [
        { name: 'Frontend Mastery', val: 'React (95%) · ES6+ (98%) · Angular' },
        { name: 'Backend Mastery', val: 'Laravel (96%) · Node.js (90%)' },
        { name: 'Leadership', val: '21 Shipped · 9 Roles & Mentoring' }
      ],
      points: [
        'End-to-end ownership from UI component systems to REST APIs and database indexing.',
        '1st Place WorldSkills Egypt Gold Medalist in Web Development + 6 national/global honors.',
        'Available for Global Remote roles, Hybrid in Cairo/Giza, or international relocation.'
      ],
      refs: ['vira-real-estate', 'peta-core', 'saudi-ems', 'teratronics-react'],
      inquiry: 'Hi Salma, we have a Senior Full-Stack Developer role open on our team and would love to schedule an interview.'
    }
  ];

  function initScopeBuilder() {
    const tabsBox = $('#scopeTabs'), bodyBox = $('#scopeBody');
    if (!tabsBox || !bodyBox) return;
    tabsBox.innerHTML = SCOPE_BLUEPRINTS.map((s, i) =>
      `<button type="button" role="tab" aria-selected="${i === 0}" class="${i === 0 ? 'is-on' : ''}" data-skey="${s.key}">${esc(s.tab)}</button>`
    ).join('');

    const renderScope = key => {
      const item = SCOPE_BLUEPRINTS.find(s => s.key === key) || SCOPE_BLUEPRINTS[0];
      const refProjects = item.refs.map(id => D.projects.find(p => p.id === id)).filter(Boolean);
      const waUrl = `https://wa.me/${D.profile.phone.replace(/\D/g, '')}?text=${encodeURIComponent(item.inquiry)}`;
      const mailUrl = `mailto:${D.profile.email}?subject=${encodeURIComponent(item.title)}&body=${encodeURIComponent(item.inquiry)}`;
      bodyBox.innerHTML = `
        <div class="scope__top">
          <h4>${esc(item.title)}</h4>
          <span class="scope__badge">${esc(item.badge)}</span>
        </div>
        <div class="scope__layers">
          ${item.layers.map(l => `<div class="scope__layer"><span>${esc(l.name)}</span><strong>${esc(l.val)}</strong></div>`).join('')}
        </div>
        <ul class="scope__list">
          ${item.points.map(pt => `<li>${esc(pt)}</li>`).join('')}
        </ul>
        <div class="scope__refs">
          <span class="scope__refs-lbl">Shipped reference platforms in this category (click to inspect):</span>
          <div class="scope__chips">
            ${refProjects.map(p => `<button type="button" class="scope__chip" data-open-id="${esc(p.id)}">${esc(p.title)} ↗</button>`).join('')}
          </div>
          <div class="scope__cta">
            <a class="btn btn--grad btn--xs" href="${mailUrl}">✉️ Email About This Scope →</a>
            <a class="chat-act" href="${waUrl}" target="_blank" rel="noopener">💬 Discuss on WhatsApp ↗</a>
          </div>
        </div>`;

      $$('[data-open-id]', bodyBox).forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.openId, btn)));
      if (!reduced) animate(bodyBox, { opacity: [0, 1], y: [6, 0], duration: 260, ease: 'out(3)' });
    };

    $$('button', tabsBox).forEach(btn => btn.addEventListener('click', () => {
      $$('button', tabsBox).forEach(x => {
        const on = x === btn;
        x.classList.toggle('is-on', on);
        x.setAttribute('aria-selected', String(on));
      });
      renderScope(btn.dataset.skey);
    }));
    renderScope(SCOPE_BLUEPRINTS[0].key);
  }
  initScopeBuilder();

  // ---------- Midnight Sapphire Blue Brand Palette ----------
  const THEME_PALETTES = {
    crimson: { c1: 0x2563eb, c2: 0x3b82f6, c3: 0x38bdf8 },
    sapphire: { c1: 0x2563eb, c2: 0x3b82f6, c3: 0x38bdf8 }
  };
  const activeTheme = 'sapphire';
  try { localStorage.removeItem('sk_theme_v2'); } catch (e) {}
  root.setAttribute('data-theme', activeTheme);

  // ---------- Live HUD Clock ----------
  function updateClock() {
    const el = $('#hudClock');
    if (!el) return;
    const now = new Date();
    el.textContent = 'CAIRO ' + now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  setInterval(updateClock, 1000); updateClock();

  // ---------- Intersection Observer & Reveal ----------
  let io;
  function observe() {
    if (io) io.disconnect();
    io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target; el.classList.add('is-in'); io.unobserve(el);
        if (el.dataset.bar) {
          const n = +el.dataset.bar, b = el.querySelector('b'), o = { v: 0 };
          animate(el.querySelector('i'), { width: n + '%', duration: 1400, ease: 'out(4)' });
          animate(o, { v: n, duration: 1400, ease: 'out(4)', onUpdate: () => b.textContent = Math.round(o.v) + '%' });
        }
        if (el.classList.contains('skillcat')) animate(el.querySelectorAll('.skill'), { opacity: [0, 1], x: [lang === 'ar' ? 12 : -12, 0], delay: stagger(50), duration: 500, ease: 'out(3)' });
        if (el.classList.contains('stats')) {
          $$('[data-count]', el).forEach(c => { const o = { v: 0 }, to = +c.dataset.count, suf = c.dataset.suffix || ''; animate(o, { v: to, duration: 1600, ease: 'out(3)', onUpdate: () => c.textContent = Math.round(o.v) + suf }); });
          $$('.ring', el).forEach(r => animate(r, { strokeDashoffset: [213.6, 213.6 * (1 - +r.dataset.ring)], duration: 1600, ease: 'out(3)' }));
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    $$('[data-reveal]:not(.hero [data-reveal])').forEach(el => io.observe(el));
    if (reduced) finishAll();
  }

  function finishAll() {
    $$('[data-reveal], .timeline li').forEach(el => el.classList.add('is-in'));
    $$('.skill, .hero__eyebrow, .hero__title .w').forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
    $$('[data-bar]').forEach(el => { el.querySelector('i').style.width = el.dataset.bar + '%'; el.querySelector('b').textContent = el.dataset.bar + '%'; });
    $$('.ring').forEach(r => r.style.strokeDashoffset = 213.6 * (1 - +r.dataset.ring));
    $('.timeline').style.setProperty('--draw', '100%');
  }

  function bindCards() {
    $$('.card__open').forEach(b => b.addEventListener('click', () => openModal(b.closest('.card').dataset.id, b)));
    $$('#filters button').forEach(b => b.addEventListener('click', () => {
      $$('#filters button').forEach(x => x.classList.toggle('is-on', x === b));
      const cat = b.dataset.cat;
      const cards = $$('.card');
      cards.forEach(c => {
        const show = cat === 'all' ? true : c.dataset.cat === cat;
        c.classList.toggle('is-hidden', !show);
      });
      const vis = cards.filter(c => !c.classList.contains('is-hidden'));
      vis.forEach(c => c.classList.add('is-in'));
      const workTitleEl = $('.work__title-block h2');
      const workEyeEl = $('[data-i18n="work.eyebrow"]');
      if (workTitleEl && workEyeEl) {
        if (cat === 'all') {
          workTitleEl.innerHTML = T('work.title');
          workEyeEl.textContent = T('work.eyebrow');
        } else {
          const catLabel = T('cats')[cat] || cat;
          workTitleEl.innerHTML = `Featured <span class="grad">${esc(catLabel)} Projects.</span>`;
          workEyeEl.textContent = `Showing ${vis.length} ${catLabel} Builds · Scroll Horizontally`;
        }
      }
      measureLayout();
      if (workSec) {
        const stickyTop = innerWidth <= 960 ? 68 : 76;
        const topY = workSec.getBoundingClientRect().top + window.scrollY - stickyTop;
        scrollTo({ top: Math.max(0, topY), behavior: reduced ? 'auto' : 'smooth' });
      }
      if (!reduced) animate(vis, { opacity: [0, 1], scale: [0.95, 1], delay: stagger(25), duration: 360, ease: 'out(3)' });
    }));
  }

  let lastFocus = null;
  function openModal(id, from) {
    const p = D.projects.find(x => x.id === id); if (!p) return;
    lastFocus = from || document.activeElement;
    const [c1, c2] = CAT_COLORS[p.category] || CAT_COLORS.fullstack;
    const m = $('#modal'), cover = $('#modalCover');
    cover.style.setProperty('--c1', c1); cover.style.setProperty('--c2', c2);
    cover.classList.toggle('modal__cover--svg', /\.svg$/.test(p.logo));
    $('#modalImg').src = p.logo; $('#modalImg').alt = p.title + ' — ' + L(p, 'subtitle'); $('#modalImg').style.display = NO_LOGO.has(p.id) ? 'none' : '';
    $('#modalBadge').textContent = p.badge; $('#modalYear').textContent = p.year + ' · ' + (T('cats')[p.category] || p.category);
    $('#modalTitle').textContent = p.title; $('#modalSub').textContent = L(p, 'subtitle');
    $('#modalDesc').textContent = Lx(p, 'desc_en', 'desc_ar');
    $('#modalMetrics').textContent = p.metrics || '';
    $('#modalTags').innerHTML = p.tags.map(t => `<span>${esc(t)}</span>`).join('');
    const a = $('#modalLink');
    if (safe(p.url)) { a.href = String(p.url).trim(); a.style.display = ''; a.firstElementChild.textContent = T('visit') + ' · ' + p.urlDisplay + ' ↗'; }
    else { a.removeAttribute('href'); a.style.display = 'none'; }
    m.classList.add('is-open'); m.setAttribute('aria-hidden', 'false'); document.body.classList.add('is-modal');
    if (!reduced) animate('.modal__box', { opacity: [0, 1], scale: [0.92, 1], y: [20, 0], duration: 420, ease: 'out(4)' });
    $('#modalX').focus();
  }
  function closeModal() {
    const m = $('#modal'); if (!m.classList.contains('is-open')) return;
    m.classList.remove('is-open'); m.setAttribute('aria-hidden', 'true'); document.body.classList.remove('is-modal');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $('#modal').addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const f = $$('.modal__box button, .modal__box a[href]').filter(x => x.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalX').addEventListener('click', closeModal);
  addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  function bindMagnets() {
    if (!fine || reduced) return;
    $$('[data-magnet]').forEach(el => {
      if (el.dataset.magnetBound) return; el.dataset.magnetBound = 1;
      const a = createAnimatable(el, { x: 300, y: 300, ease: 'out(3)' });
      el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); a.x((e.clientX - r.left - r.width / 2) * 0.28).y((e.clientY - r.top - r.height / 2) * 0.28); });
      el.addEventListener('pointerleave', () => { a.x(0).y(0); });
    });
  }

  function bindSpotlights() {
    if (!fine) return;
    $$('[data-spotlight]').forEach(el => {
      if (el.dataset.spotBound) return; el.dataset.spotBound = 1;
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      }, { passive: true });
    });
  }

  function tilt() {
    if (!fine || reduced) return;
    $$('[data-tilt]').forEach(el => {
      if (el.dataset.tiltBound) return; el.dataset.tiltBound = 1;
      const a = createAnimatable(el, { rotateX: 350, rotateY: 350, scale: 350, ease: 'out(3)' });
      el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5; a.rotateY(px * 10).rotateX(-py * 10).scale(1.015); });
      el.addEventListener('pointerleave', () => a.rotateX(0).rotateY(0).scale(1));
    });
  }

  // ---------- Quote Rotator + Hero Intro ----------
  let quoteTimer, rolesAnim;
  function quoteStart() {
    clearInterval(quoteTimer);
    const q = D.motivationalQuotes, el = $('#quoteText');
    if (!el) return;
    let i = 0;
    const show = () => { el.textContent = q[i].en; if (!reduced) animate(el, { opacity: [0, 1], y: [6, 0], duration: 500, ease: 'out(3)' }); i = (i + 1) % q.length; };
    show(); quoteTimer = setInterval(show, 5000);
  }
  function rolesStart() {
    if (rolesAnim) rolesAnim.cancel();
    const track = $('#rolesTrack');
    if (!track) return;
    const n = track.children.length - 1;
    if (reduced || n < 1) return;
    track.style.transform = '';
    rolesAnim = animate(track, { y: [0, -(n * 100) + '%'], duration: n * 1600, ease: 'steps(' + n + ')', loop: true });
  }
  function heroIn() {
    const tl = createTimeline({ defaults: { ease: 'out(4)' } });
    tl.add('.hero__title .w', { opacity: [0, 1], y: [40, 0], rotateX: [-40, 0], duration: 900, delay: stagger(70) }, 0)
      .add('.hero__eyebrow', { opacity: [0, 1], y: [8, 0], duration: 600 }, 100)
      .add('.hero [data-reveal]', { opacity: [0, 1], y: [24, 0], duration: 800, delay: stagger(90), onComplete: () => $$('.hero [data-reveal]').forEach(el => el.classList.add('is-in')) }, 400);
    $$('[data-count]').forEach(c => { const o = { v: 0 }, to = +c.dataset.count, suf = c.dataset.suffix || ''; animate(o, { v: to, duration: 1800, ease: 'out(3)', delay: 600, onUpdate: () => c.textContent = Math.round(o.v) + suf }); });
    $$('.stats .ring').forEach(r => animate(r, { strokeDashoffset: [213.6, 213.6 * (1 - +r.dataset.ring)], duration: 1800, delay: 600, ease: 'out(3)' }));
  }

  render(); quoteStart();
  const intro = $('#intro');
  if (reduced) {
    intro?.remove(); finishAll(); rolesStart();
  } else {
    rolesStart();
    const countEl = $('#introCount'), statusEl = $('#introStatus');
    const progObj = { v: 1 };
    createTimeline({ defaults: { ease: 'out(3)' } })
      .add(progObj, {
        v: 100,
        duration: 1450,
        ease: 'inOut(2)',
        onUpdate: () => {
          const n = Math.round(progObj.v);
          if (countEl) countEl.textContent = String(n);
          if (statusEl) {
            if (n < 36) statusEl.textContent = 'LOADING FULL-STACK ARCHITECTURE...';
            else if (n < 72) statusEl.textContent = 'MOUNTING 21 PRODUCTION PLATFORMS...';
            else if (n < 100) statusEl.textContent = 'INITIALIZING 3D WEBGL ENGINE...';
            else statusEl.textContent = 'SYSTEM READY · WELCOME';
          }
        }
      }, 0)
      .add('#introBar', { width: ['1%', '100%'], duration: 1450, ease: 'inOut(2)' }, 0)
      .add('#introCenter', { opacity: [1, 0], scale: [1, 0.94], duration: 320, ease: 'in(2)', onBegin: () => heroIn() }, 1520)
      .add('.intro__panel--top', { y: '-100%', duration: 620, ease: 'inOut(4)' }, 1620)
      .add('.intro__panel--bottom', { y: '100%', duration: 620, ease: 'inOut(4)', onComplete: () => intro?.remove() }, 1620);
  }

  // ---------- Zero-Reflow Scroll Telemetry, Pinned Horizontal Work & Liquid Nav Glider ----------
  const nav = $('#nav'), progress = $('#progress'), totop = $('#totop'), tlEl = $('#timeline');
  const navLinksBox = $('#navLinks'), navGlider = $('#navGlider'), navToggle = $('#navToggle');
  const workSec = $('#work'), workSticky = $('#workSticky'), workViewport = $('#workViewport'), cardsTrack = $('#cards');
  const workCounter = $('#workCounter'), workProgFill = $('#workProgFill'), workPrev = $('#workPrev'), workNext = $('#workNext');
  const links = $$('.nav__links a'), sections = links.map(a => $(a.getAttribute('href')));
  let scrollRatio = 0, maxScroll = 1, secOffsets = [], tlTop = 0, tlHeight = 1, activeSecIdx = -1;
  let workStartTop = 0, workHorizDist = 0, workVisCount = D.projects.length;
  let hoveredLink = null;

  function updateWorkScroll() {
    if (!workSec || !cardsTrack) return;
    const stickyTop = workSticky ? (parseFloat(getComputedStyle(workSticky).top) || 72) : 72;
    const raw = stickyTop - workSec.getBoundingClientRect().top;
    const clamped = utils.clamp(raw, 0, workHorizDist);
    const pct = workHorizDist > 0 ? clamped / workHorizDist : 0;
    cardsTrack.style.transform = `translate3d(${-clamped.toFixed(1)}px, 0, 0)`;
    if (workProgFill) workProgFill.style.width = `${(pct * 100).toFixed(1)}%`;
    if (workCounter) {
      const curIdx = Math.min(workVisCount, Math.max(1, Math.round(pct * Math.max(0, workVisCount - 1)) + 1));
      workCounter.textContent = `${String(curIdx).padStart(2, '0')} / ${String(workVisCount).padStart(2, '0')}`;
    }
  }

  function moveNavGlider(targetEl) {
    if (!navGlider || !navLinksBox || innerWidth <= 960) return;
    if (!targetEl) {
      navGlider.classList.remove('is-visible');
      return;
    }
    const x = targetEl.offsetLeft;
    const w = targetEl.offsetWidth;
    navGlider.style.transform = `translate3d(${x}px, 0, 0)`;
    navGlider.style.width = `${w}px`;
    navGlider.classList.add('is-visible');
  }

  links.forEach(a => {
    a.addEventListener('pointerenter', () => {
      hoveredLink = a;
      moveNavGlider(a);
    });
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });
  navLinksBox?.addEventListener('pointerleave', () => {
    hoveredLink = null;
    moveNavGlider(activeSecIdx >= 0 ? links[activeSecIdx] : null);
  });
  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  function measureLayout() {
    if (workSec && workSticky && workViewport && cardsTrack) {
      workVisCount = $$('.card:not(.is-hidden)', cardsTrack).length || 1;
      workHorizDist = Math.max(0, cardsTrack.scrollWidth - workViewport.clientWidth);
      workSec.style.height = `${workSticky.offsetHeight + workHorizDist}px`;
      const stickyTop = parseFloat(getComputedStyle(workSticky).top) || 76;
      const workSecTop = workSec.getBoundingClientRect().top + window.scrollY;
      workStartTop = Math.max(0, workSecTop - stickyTop);
    }
    maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    secOffsets = sections.map(s => s ? (s.getBoundingClientRect().top + window.scrollY) : 0);
    if (tlEl) {
      const r = tlEl.getBoundingClientRect();
      tlTop = r.top + window.scrollY;
      tlHeight = Math.max(1, r.height);
    }
    updateWorkScroll(window.scrollY);
    if (!hoveredLink) moveNavGlider(activeSecIdx >= 0 ? links[activeSecIdx] : null);
  }
  measureLayout();
  addEventListener('resize', measureLayout, { passive: true });
  addEventListener('load', measureLayout, { once: true });

  workPrev?.addEventListener('click', () => {
    const step = 376;
    const stickyTop = innerWidth <= 960 ? 68 : 76;
    const startY = Math.max(0, workSec.getBoundingClientRect().top + window.scrollY - stickyTop);
    const target = utils.clamp(window.scrollY - step, startY, startY + workHorizDist);
    scrollTo({ top: target, behavior: reduced ? 'auto' : 'smooth' });
  });
  workNext?.addEventListener('click', () => {
    const step = 376;
    const stickyTop = innerWidth <= 960 ? 68 : 76;
    const startY = Math.max(0, workSec.getBoundingClientRect().top + window.scrollY - stickyTop);
    const target = utils.clamp(window.scrollY + step, startY, startY + workHorizDist);
    scrollTo({ top: target, behavior: reduced ? 'auto' : 'smooth' });
  });
  workViewport?.addEventListener('wheel', e => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && workHorizDist > 0) {
      e.preventDefault();
      scrollBy({ top: e.deltaX, behavior: 'auto' });
    }
  }, { passive: false });

  let scrollTicking = false;
  const computeActiveSec = sy => {
    if (sy >= maxScroll - 140 && secOffsets.length) {
      activeSecIdx = secOffsets.length - 1;
      return activeSecIdx;
    }
    let current = -1;
    const triggerY = sy + innerHeight * 0.5;
    for (let i = 0; i < secOffsets.length; i++) {
      if (secOffsets[i] && triggerY >= secOffsets[i] - 64) current = i;
    }
    activeSecIdx = current;
    return current;
  };
  const updateScrollUI = () => {
    scrollTicking = false;
    const sy = window.scrollY;
    scrollRatio = utils.clamp(sy / maxScroll, 0, 1);
    progress.style.transform = `scaleX(${scrollRatio})`;
    nav.classList.toggle('is-scrolled', sy > 24);
    totop.classList.toggle('is-on', sy > innerHeight);
    updateWorkScroll(sy);
    const current = computeActiveSec(sy);
    links.forEach((a, i) => a.classList.toggle('is-active', i === current));
    if (!hoveredLink) moveNavGlider(current >= 0 ? links[current] : null);
    if (tlEl) {
      const drawPct = utils.clamp((sy + innerHeight * 0.85 - tlTop) / tlHeight, 0, 1) * 100;
      tlEl.style.setProperty('--draw', drawPct.toFixed(1) + '%');
    }
  };
  const onScroll = () => {
    const sy = window.scrollY;
    scrollRatio = utils.clamp(sy / maxScroll, 0, 1);
    updateWorkScroll(sy);
    computeActiveSec(sy);
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(updateScrollUI);
    }
  };
  addEventListener('scroll', onScroll, { passive: true }); updateScrollUI();
  totop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));

  // ---------- Instant Pointer Ambience ----------
  let ptrX = 0, ptrY = 0;
  if (fine && !reduced) {
    const floats = $$('.float').map(el => ({ el, k: +el.dataset.float }));
    let ptrRaf = false;
    addEventListener('pointermove', e => {
      ptrX = e.clientX / innerWidth - 0.5;
      ptrY = e.clientY / innerHeight - 0.5;
      if (!ptrRaf) {
        ptrRaf = true;
        requestAnimationFrame(() => {
          ptrRaf = false;
          floats.forEach(f => {
            f.el.style.transform = `translate3d(${(ptrX * f.k).toFixed(1)}px, ${(ptrY * f.k).toFixed(1)}px, 0)`;
          });
        });
      }
    }, { passive: true });
  }

  // ---------- 4-in-1 Hybrid 3D WebGL Engine (Zero-Delay GPU Optimized) ----------
  function initWebGL() {
    const canvas = $('#webglCanvas');
    if (!canvas || typeof THREE === 'undefined') return;
    const isLowPower = !fine || innerWidth < 860 || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: !isLowPower && window.devicePixelRatio <= 1.5,
        powerPreference: 'high-performance'
      });
    } catch (err) {
      return;
    }
    root.classList.add('has-webgl');
    // Cap pixel ratio at 2 (and 1.25 on mobile/low-power)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isLowPower ? 1.25 : 2));
    renderer.setSize(innerWidth, innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.1, 120);
    camera.position.set(0, 0, 19);

    const pal = THEME_PALETTES[activeTheme] || THEME_PALETTES.crimson;
    const hudText = $('#stageHudText');

    // Root 3D Stage Group (slides left <-> right as user scrolls)
    const stageGroup = new THREE.Group();
    const rtlSign = () => (lang === 'ar' ? -1 : 1);
    stageGroup.position.set(innerWidth < 860 ? 0 : 4.8 * rtlSign(), 0.4, -1);
    stageGroup.scale.setScalar(innerWidth < 860 ? 0.62 : 1.08);
    scene.add(stageGroup);

    // =========================================================================
    // 1. MORPHING WIREFRAME CORE (Sphere -> Cube -> TorusKnot -> Octahedron -> Icosahedron)
    // =========================================================================
    const morphGroup = new THREE.Group();
    stageGroup.add(morphGroup);

    const coreGeos = [
      new THREE.SphereGeometry(2.7, 16, 16),
      new THREE.BoxGeometry(3.4, 3.4, 3.4, 3, 3, 3),
      new THREE.TorusKnotGeometry(2.15, 0.54, 68, 12),
      new THREE.OctahedronGeometry(2.9, 1),
      new THREE.IcosahedronGeometry(2.8, 1)
    ];
    const wireMat = new THREE.MeshBasicMaterial({ color: pal.c1, wireframe: true, transparent: true, opacity: 0.45 });
    const outerMesh = new THREE.Mesh(coreGeos[0], wireMat);
    morphGroup.add(outerMesh);

    const innerGeo = new THREE.OctahedronGeometry(1.4, 0);
    const innerMat = new THREE.MeshBasicMaterial({ color: pal.c2, wireframe: true, transparent: true, opacity: 0.58 });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    morphGroup.add(innerMesh);

    // =========================================================================
    // 2. FULL-STACK 3D LAYERS (4 Floating Glass Slabs: Frontend, API, Database, DevOps)
    // =========================================================================
    const layersGroup = new THREE.Group();
    stageGroup.add(layersGroup);

    function makeSlabTexture(label, sub, hexColor) {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 64;
      const ctx = c.getContext('2d');
      ctx.fillStyle = 'rgba(5, 12, 28, 0.88)';
      ctx.fillRect(0, 0, 256, 64);
      ctx.strokeStyle = hexColor;
      ctx.lineWidth = 3;
      ctx.strokeRect(2, 2, 252, 60);
      ctx.fillStyle = hexColor;
      ctx.font = 'bold 13px monospace';
      ctx.fillText(label, 14, 27);
      ctx.fillStyle = '#f4f8ff';
      ctx.font = '11px sans-serif';
      ctx.fillText(sub, 14, 47);
      return new THREE.CanvasTexture(c);
    }

    const slabDefs = [
      { label: '01 // FRONTEND UI', sub: 'React.js · Angular · ES6+ · RTL', col: '#38bdf8' },
      { label: '02 // BACKEND API', sub: 'PHP Laravel · Node.js · RBAC', col: '#3b82f6' },
      { label: '03 // DATABASE & CMS', sub: 'MySQL · MongoDB · Admin Suites', col: '#06b6d4' },
      { label: '04 // DEVOPS & IOT', sub: 'Cloud · SEO · Smart Hardware', col: '#60a5fa' }
    ];
    const sharedBoxGeo = new THREE.BoxGeometry(4.2, 0.22, 2.5);
    const sharedEdgesGeo = new THREE.EdgesGeometry(sharedBoxGeo);
    const slabs = slabDefs.map((d, i) => {
      const g = new THREE.Group();
      const topTex = makeSlabTexture(d.label, d.sub, d.col);
      const sideMat = new THREE.MeshBasicMaterial({ color: pal.c1, transparent: true, opacity: 0.22 });
      const faceMat = new THREE.MeshBasicMaterial({ map: topTex, transparent: true, opacity: 0.9 });
      const mesh = new THREE.Mesh(sharedBoxGeo, [sideMat, sideMat, faceMat, sideMat, faceMat, sideMat]);
      const edges = new THREE.LineSegments(
        sharedEdgesGeo,
        new THREE.LineBasicMaterial({ color: pal.c2, transparent: true, opacity: 0.65 })
      );
      g.add(mesh); g.add(edges);
      g.userData = { idx: i, mesh, edges, sideMat, faceMat };
      layersGroup.add(g);
      return g;
    });

    // =========================================================================
    // 3. ORBITING SKILLS PLANET (Crisp Tech Badges + Orbital Rings)
    // =========================================================================
    const planetGroup = new THREE.Group();
    stageGroup.add(planetGroup);

    const ringGeo1 = new THREE.TorusGeometry(4.4, 0.025, 8, 72);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: pal.c3, transparent: true, opacity: 0.44 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI * 0.38;
    planetGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(5.3, 0.02, 8, 72);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: pal.c2, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI * 0.28;
    ring2.rotation.x = -Math.PI * 0.25;
    planetGroup.add(ring2);

    function makeBadgeSprite(text, borderHex) {
      const c = document.createElement('canvas');
      c.width = 160; c.height = 52;
      const ctx = c.getContext('2d');
      ctx.fillStyle = 'rgba(5, 11, 26, 0.92)';
      ctx.fillRect(3, 3, 154, 46);
      ctx.lineWidth = 3;
      ctx.strokeStyle = borderHex;
      ctx.strokeRect(3, 3, 154, 46);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 80, 27);
      const tex = new THREE.CanvasTexture(c);
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.92, depthWrite: false });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(1.85, 0.6, 1);
      return sp;
    }

    const techNodes = [
      { name: 'React.js', col: '#38bdf8', r: 4.4, speed: 0.7, phase: 0, tilt: 0.35 },
      { name: 'Laravel', col: '#3b82f6', r: 4.4, speed: 0.7, phase: Math.PI * 0.5, tilt: 0.35 },
      { name: 'Node.js', col: '#06b6d4', r: 4.4, speed: 0.7, phase: Math.PI, tilt: 0.35 },
      { name: 'MySQL', col: '#60a5fa', r: 4.4, speed: 0.7, phase: Math.PI * 1.5, tilt: 0.35 },
      { name: 'Angular', col: '#2563eb', r: 5.3, speed: -0.52, phase: 0.4, tilt: -0.4 },
      { name: 'PHP OOP', col: '#38bdf8', r: 5.3, speed: -0.52, phase: 2.0, tilt: -0.4 },
      { name: 'MongoDB', col: '#22d3ee', r: 5.3, speed: -0.52, phase: 3.6, tilt: -0.4 },
      { name: 'IoT / CMS', col: '#93c5fd', r: 5.3, speed: -0.52, phase: 5.1, tilt: -0.4 }
    ].map(n => {
      const sp = makeBadgeSprite(n.name, n.col);
      sp.userData = n;
      planetGroup.add(sp);
      return sp;
    });

    // =========================================================================
    // 4. FAST PARTICLE SHAPE-SHIFTER (Sphere -> "SK" Monogram -> Laptop -> Rocket)
    // =========================================================================
    const P_COUNT = isLowPower ? 480 : 1100;
    const pGeo = new THREE.BufferGeometry();
    const curPos = new Float32Array(P_COUNT * 3);
    const startPos = new Float32Array(P_COUNT * 3);
    const cols = new Float32Array(P_COUNT * 3);

    const shapeTargets = [
      new Float32Array(P_COUNT * 3),
      new Float32Array(P_COUNT * 3),
      new Float32Array(P_COUNT * 3),
      new Float32Array(P_COUNT * 3)
    ];

    // Shape 0: Sphere + Ambient Starfield
    for (let i = 0; i < P_COUNT; i++) {
      if (i < P_COUNT * 0.72) {
        const u = Math.random(), v = Math.random();
        const theta = u * 2 * Math.PI, phi = Math.acos(2 * v - 1);
        const rad = 3.25 + (Math.random() - 0.5) * 0.3;
        shapeTargets[0][i * 3] = rad * Math.sin(phi) * Math.cos(theta);
        shapeTargets[0][i * 3 + 1] = rad * Math.sin(phi) * Math.sin(theta);
        shapeTargets[0][i * 3 + 2] = rad * Math.cos(phi);
      } else {
        shapeTargets[0][i * 3] = (Math.random() - 0.5) * 32;
        shapeTargets[0][i * 3 + 1] = (Math.random() - 0.5) * 22;
        shapeTargets[0][i * 3 + 2] = (Math.random() - 0.5) * 16 - 4;
      }
    }

    // Shape 1: "SK" Monogram (Crisp 3D Hologram + Rounded-Square Brand Frame)
    (function buildSKTargets() {
      const c = document.createElement('canvas');
      c.width = 180; c.height = 108;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 180, 108);
      ctx.fillStyle = '#fff';
      ctx.font = '900 76px "Space Grotesk", "Arial Black", Arial, sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('SK', 90, 56);
      const img = ctx.getImageData(0, 0, 180, 108).data;
      const pts = [];
      for (let y = 0; y < 108; y += 2) {
        for (let x = 0; x < 180; x += 2) {
          if (img[(y * 180 + x) * 4] > 128) {
            pts.push([(x - 90) * 0.046, (54 - y) * 0.046]);
          }
        }
      }
      const framePts = [];
      const hw = 3.25, hh = 2.25;
      for (let j = 0; j < 180; j++) {
        const t = (j / 180) * Math.PI * 2;
        const cs = Math.cos(t), sn = Math.sin(t);
        const rx = Math.sign(cs) * Math.pow(Math.abs(cs), 0.42) * hw;
        const ry = Math.sign(sn) * Math.pow(Math.abs(sn), 0.42) * hh;
        framePts.push([rx, ry]);
      }
      for (let i = 0; i < P_COUNT; i++) {
        if (i < P_COUNT * 0.84 && pts.length) {
          const p = pts[(i * 7) % pts.length];
          shapeTargets[1][i * 3] = p[0] + (Math.random() - 0.5) * 0.05;
          shapeTargets[1][i * 3 + 1] = p[1] + (Math.random() - 0.5) * 0.05;
          shapeTargets[1][i * 3 + 2] = (i % 2 === 0 ? 0.12 : -0.12) + (Math.random() - 0.5) * 0.08;
        } else {
          const fp = framePts[i % framePts.length];
          shapeTargets[1][i * 3] = fp[0] + (Math.random() - 0.5) * 0.06;
          shapeTargets[1][i * 3 + 1] = fp[1] + (Math.random() - 0.5) * 0.06;
          shapeTargets[1][i * 3 + 2] = (Math.random() - 0.5) * 0.22;
        }
      }
    })();

    // Shape 2: 3D Laptop
    for (let i = 0; i < P_COUNT; i++) {
      const r = i / P_COUNT;
      if (r < 0.45) {
        const sx = (Math.random() - 0.5) * 5.2;
        const sy = Math.random() * 3.2;
        shapeTargets[2][i * 3] = sx;
        shapeTargets[2][i * 3 + 1] = sy - 0.4;
        shapeTargets[2][i * 3 + 2] = -1.0 - sy * 0.2;
      } else if (r < 0.85) {
        shapeTargets[2][i * 3] = (Math.random() - 0.5) * 5.2;
        shapeTargets[2][i * 3 + 1] = -0.45 + (Math.random() - 0.5) * 0.1;
        shapeTargets[2][i * 3 + 2] = Math.random() * 2.9 - 1.0;
      } else {
        shapeTargets[2][i * 3] = (Math.random() - 0.5) * 14;
        shapeTargets[2][i * 3 + 1] = (Math.random() - 0.5) * 10;
        shapeTargets[2][i * 3 + 2] = (Math.random() - 0.5) * 8;
      }
    }

    // Shape 3: 3D Rocket
    for (let i = 0; i < P_COUNT; i++) {
      const r = i / P_COUNT;
      const theta = Math.random() * Math.PI * 2;
      if (r < 0.22) {
        const h = Math.random();
        const rad = (1 - h) * 1.15;
        shapeTargets[3][i * 3] = Math.cos(theta) * rad;
        shapeTargets[3][i * 3 + 1] = 1.5 + h * 2.1;
        shapeTargets[3][i * 3 + 2] = Math.sin(theta) * rad;
      } else if (r < 0.62) {
        const h = Math.random();
        const rad = 1.15 * (0.85 + 0.15 * Math.sin(h * Math.PI));
        shapeTargets[3][i * 3] = Math.cos(theta) * rad;
        shapeTargets[3][i * 3 + 1] = -1.6 + h * 3.1;
        shapeTargets[3][i * 3 + 2] = Math.sin(theta) * rad;
      } else if (r < 0.78) {
        const finAngle = (i % 3) * ((Math.PI * 2) / 3);
        const out = 1.15 + Math.random() * 1.1;
        shapeTargets[3][i * 3] = Math.cos(finAngle) * out;
        shapeTargets[3][i * 3 + 1] = -1.6 + Math.random() * 1.2;
        shapeTargets[3][i * 3 + 2] = Math.sin(finAngle) * out;
      } else {
        const d = Math.random();
        const rad = d * 1.2 * Math.random();
        shapeTargets[3][i * 3] = Math.cos(theta) * rad;
        shapeTargets[3][i * 3 + 1] = -1.6 - d * 2.3;
        shapeTargets[3][i * 3 + 2] = Math.sin(theta) * rad;
      }
    }

    const cA = new THREE.Color(pal.c1), cB = new THREE.Color(pal.c2), cC = new THREE.Color(pal.c3);
    for (let i = 0; i < P_COUNT; i++) {
      curPos[i * 3] = shapeTargets[0][i * 3];
      curPos[i * 3 + 1] = shapeTargets[0][i * 3 + 1];
      curPos[i * 3 + 2] = shapeTargets[0][i * 3 + 2];
      const pick = i % 3 === 0 ? cA : i % 3 === 1 ? cB : cC;
      cols[i * 3] = pick.r; cols[i * 3 + 1] = pick.g; cols[i * 3 + 2] = pick.b;
    }
    startPos.set(curPos);
    pGeo.setAttribute('position', new THREE.BufferAttribute(curPos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(cols, 3));

    const pMat = new THREE.PointsMaterial({ size: isLowPower ? 0.11 : 0.13, vertexColors: true, transparent: true, opacity: 0.9 });
    const shifterPoints = new THREE.Points(pGeo, pMat);
    stageGroup.add(shifterPoints);

    window.__updateWebGLTheme = newPal => {
      wireMat.color.setHex(newPal.c1);
      innerMat.color.setHex(newPal.c2);
      ringMat1.color.setHex(newPal.c3);
      ringMat2.color.setHex(newPal.c2);
      slabs.forEach(s => {
        s.userData.sideMat.color.setHex(newPal.c1);
        s.userData.edges.material.color.setHex(newPal.c2);
      });
      const ncA = new THREE.Color(newPal.c1), ncB = new THREE.Color(newPal.c2), ncC = new THREE.Color(newPal.c3);
      const arr = pGeo.attributes.color.array;
      for (let i = 0; i < P_COUNT; i++) {
        const pick = i % 3 === 0 ? ncA : i % 3 === 1 ? ncB : ncC;
        arr[i * 3] = pick.r; arr[i * 3 + 1] = pick.g; arr[i * 3 + 2] = pick.b;
      }
      pGeo.attributes.color.needsUpdate = true;
      if (reduced) renderer.render(scene, camera);
    };

    // Respect prefers-reduced-motion: render one static frame and stop loop
    if (reduced) {
      layersGroup.visible = false;
      renderer.render(scene, camera);
      return;
    }

    let speedMult = 1;
    let manualMode = 'auto';
    const speedRange = $('#speedRange'), speedVal = $('#speedVal');
    speedRange?.addEventListener('input', () => {
      speedMult = parseFloat(speedRange.value) || 0;
      if (speedVal) speedVal.textContent = speedMult.toFixed(1) + 'x';
    });

    $$('#shapeBtns button').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('#shapeBtns button').forEach(b => b.classList.toggle('is-on', b === btn));
        manualMode = btn.dataset.shape || 'auto';
      });
    });

    addEventListener('resize', () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    }, { passive: true });

    let lastCoreIdx = 0;
    let activeShapeIdx = 0;
    let morphProgress = 1;
    let lastHudText = '';
    let isTabHidden = document.hidden;
    const clock = new THREE.Clock();

    document.addEventListener('visibilitychange', () => {
      isTabHidden = document.hidden;
      if (!isTabHidden) clock.getDelta();
    });

    function tick() {
      requestAnimationFrame(tick);
      if (isTabHidden) return; // Pause rendering when tab is hidden

      const dt = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();
      const v = dt * speedMult;
      const ease = 1 - Math.exp(-10 * dt);

      let zone = 0;
      // Tie 3D stage directly to the active section in view:
      // activeSecIdx: -1 = #hero, 0 = #architecture, 1 = #work, 2 = #playground, 3..5 = #skills/#awards/#experience, 6 = #contact
      if (activeSecIdx < 0) zone = 0;         // Hero (Stage 01)
      else if (activeSecIdx === 0) zone = 1;  // Architecture (Stage 02)
      else if (activeSecIdx === 1) zone = 2;  // Work / Projects (Stage 03)
      else if (activeSecIdx === 2) zone = 3;  // Ask About Me (Stage 04)
      else if (activeSecIdx <= 5) zone = 4;   // Skills / Awards / Experience (Stage 05)
      else zone = 5;                          // Contact (Stage 06)

      // Brightness & size boost in Hero (zone 0) and Stage 03 (zone 2), gently dimmed in dense text sections
      let pShapeIdx = 0, coreGeoIdx = 0, showLayers = 0, showPlanet = 1, showMorph = 1, sideDir = 1, sceneDim = 1.0, scaleTarget = 1.08;

      if (manualMode === 'layers') {
        showLayers = 1; showPlanet = 0; showMorph = 0.25; pShapeIdx = 0; coreGeoIdx = 1; sceneDim = 0.85;
      } else if (manualMode === 'planet') {
        showLayers = 0; showPlanet = 1; showMorph = 0.9; pShapeIdx = 0; coreGeoIdx = 0; sceneDim = 1.0;
      } else if (manualMode === 'particles') {
        showLayers = 0; showPlanet = 0; showMorph = 0.2;
        pShapeIdx = Math.floor((elapsed * 0.4) % 4);
        coreGeoIdx = 4; sceneDim = 1.0;
      } else if (manualMode === 'morph') {
        showLayers = 0; showPlanet = 0.25; showMorph = 1;
        coreGeoIdx = Math.floor((elapsed * 0.45) % coreGeos.length);
        pShapeIdx = 0; sceneDim = 1.0;
      } else {
        if (zone === 0) {
          // Stage 01 (Hero): Bright, prominent on empty side opposite hero text
          coreGeoIdx = 0; pShapeIdx = 0; showLayers = 0; showPlanet = 1; showMorph = 1.15; sideDir = 1.05; sceneDim = 1.0; scaleTarget = 1.14;
        } else if (zone === 1) {
          // Stage 02 (Architecture): Slides to opposite side, dimmed behind dense architecture cards
          coreGeoIdx = 1; pShapeIdx = 0; showLayers = 1; showPlanet = 0; showMorph = 0.35; sideDir = -1.15; sceneDim = 0.48; scaleTarget = 0.92;
        } else if (zone === 2) {
          // Stage 03 (Work): Clearly visible Torus Knot + Laptop particles on the right edge
          coreGeoIdx = 2; pShapeIdx = 2; showLayers = 0; showPlanet = 0; showMorph = 1.15; sideDir = 1.15; sceneDim = 0.92; scaleTarget = 1.12;
        } else if (zone === 3) {
          // Stage 04 (Playground): Left side
          coreGeoIdx = 4; pShapeIdx = 3; showLayers = 0; showPlanet = 0.2; showMorph = 0.45; sideDir = -1.1; sceneDim = 0.58; scaleTarget = 0.95;
        } else if (zone === 4) {
          // Stage 05 (Skills/Experience): Gently dimmed behind dense text/timeline
          coreGeoIdx = 3; pShapeIdx = 0; showLayers = 0; showPlanet = 0.7; showMorph = 0.6; sideDir = 1.18; sceneDim = 0.42; scaleTarget = 0.88;
        } else {
          // Stage 06 (Contact): Crisp "SK" Monogram in the open left stage
          coreGeoIdx = 4; pShapeIdx = 1; showLayers = 0; showPlanet = 0; showMorph = 0; sideDir = -1.85; sceneDim = 1.0; scaleTarget = 1.1;
        }
      }

      // Meaningful bilingual section-tied HUD label
      const stageList = T('stages') || UI.en.stages;
      const nextLabel = stageList[zone] || stageList[0];
      if (hudText && nextLabel !== lastHudText) {
        hudText.textContent = nextLabel;
        lastHudText = nextLabel;
      }

      if (coreGeoIdx !== lastCoreIdx) {
        outerMesh.geometry = coreGeos[coreGeoIdx];
        lastCoreIdx = coreGeoIdx;
      }

      const isMob = innerWidth < 860;
      const mobDim = isMob ? 0.52 : 1.0;
      const effDim = sceneDim * mobDim;

      // 1) Morphing Core
      outerMesh.rotation.y += v * 0.42;
      outerMesh.rotation.x += v * 0.2;
      innerMesh.rotation.y -= v * 0.6;
      innerMesh.rotation.z += v * 0.38;
      wireMat.opacity += (0.46 * showMorph * effDim - wireMat.opacity) * ease;
      innerMat.opacity += (0.58 * showMorph * effDim - innerMat.opacity) * ease;

      // 2) Full-Stack 3D Glass Slabs
      layersGroup.visible = slabs[0].scale.x > 0.03 || showLayers > 0;
      if (layersGroup.visible) {
        layersGroup.rotation.y = Math.sin(elapsed * 0.6) * 0.32 + ptrX * 0.5;
        layersGroup.rotation.x = 0.26 + ptrY * 0.25;
        const spread = showLayers > 0.5 ? 1.22 : 0.15;
        const targetScale = showLayers > 0.1 ? 1 : 0.001;
        for (let i = 0; i < slabs.length; i++) {
          const s = slabs[i];
          s.position.y += ((1.5 - i) * spread - s.position.y) * ease;
          s.rotation.y = Math.sin(elapsed * 0.9 + i * 0.6) * (showLayers * 0.18);
          const sc = s.scale.x + (targetScale - s.scale.x) * ease;
          s.scale.setScalar(sc);
        }
      }

      // 3) Orbiting Skills Planet
      planetGroup.visible = ringMat1.opacity > 0.02 || showPlanet > 0;
      if (planetGroup.visible) {
        ring1.rotation.z += v * 0.42;
        ring2.rotation.z -= v * 0.3;
        ringMat1.opacity += (0.45 * showPlanet * effDim - ringMat1.opacity) * ease;
        ringMat2.opacity += (0.3 * showPlanet * effDim - ringMat2.opacity) * ease;
        const targetOp = showPlanet > 0.2 ? 0.92 * showPlanet * effDim : 0;
        for (let i = 0; i < techNodes.length; i++) {
          const sp = techNodes[i], d = sp.userData;
          const ang = elapsed * d.speed * speedMult + d.phase;
          sp.position.set(
            Math.cos(ang) * d.r,
            Math.sin(ang + d.tilt) * (d.r * 0.38),
            Math.sin(ang) * d.r
          );
          sp.material.opacity += (targetOp - sp.material.opacity) * ease;
        }
      }

      // 4) Particle Shape-Shifter
      if (pShapeIdx !== activeShapeIdx) {
        activeShapeIdx = pShapeIdx;
        startPos.set(pGeo.attributes.position.array);
        morphProgress = 0;
      }
      if (morphProgress < 1) {
        morphProgress = Math.min(1, morphProgress + dt * 2.4);
        const t = 1 - Math.pow(1 - morphProgress, 3);
        const targetBuf = shapeTargets[activeShapeIdx];
        const posArr = pGeo.attributes.position.array;
        const len = P_COUNT * 3;
        for (let i = 0; i < len; i++) {
          posArr[i] = startPos[i] + (targetBuf[i] - startPos[i]) * t;
        }
        pGeo.attributes.position.needsUpdate = true;
      }
      pMat.opacity += ((pShapeIdx === 1 ? 0.98 : 0.92) * effDim - pMat.opacity) * ease;
      const rotAmp = pShapeIdx === 1 ? 0.14 : 0.32;
      const ptrAmp = pShapeIdx === 1 ? 0.22 : 0.45;
      shifterPoints.rotation.y += (Math.sin(elapsed * 0.45) * rotAmp + ptrX * ptrAmp - shifterPoints.rotation.y) * ease;
      shifterPoints.rotation.x += (-ptrY * (pShapeIdx === 1 ? 0.16 : 0.3) - shifterPoints.rotation.x) * ease;

      // Smoothly position on empty side of each section (in Contact section, place "SK" in the open left space)
      let baseOffset = isMob ? 0 : sideDir * 5.2 * rtlSign();
      let baseY = isMob ? 0.2 : Math.sin(scrollRatio * Math.PI * 2) * 0.6;
      if (zone === 5 && !isMob) {
        const halfW = 9.754 * camera.aspect;
        const cardsHalfUnits = Math.min(halfW * 0.56, (390 / (innerWidth * 0.5)) * halfW);
        baseOffset = -((halfW + cardsHalfUnits) * 0.5) * rtlSign();
        baseY = 1.65;
      }
      const targetStageX = baseOffset + ptrX * (isMob ? 0.6 : (zone === 5 ? 0.9 : 1.6));
      const targetStageY = baseY - ptrY * (zone === 5 ? 0.8 : 1.4);
      stageGroup.position.x += (targetStageX - stageGroup.position.x) * ease;
      stageGroup.position.y += (targetStageY - stageGroup.position.y) * ease;

      const finalScale = isMob ? 0.62 : scaleTarget;
      stageGroup.scale.setScalar(stageGroup.scale.x + (finalScale - stageGroup.scale.x) * ease);

      renderer.render(scene, camera);
    }
    tick();
  }
  initWebGL();

  // ---------- Soft Procedural Ambient Soundscape (Web Audio API) ----------
  function initAmbientAudio() {
    const btn = $('#audioToggle'), lbl = $('#audioLabel');
    if (!btn) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) { btn.style.display = 'none'; return; }

    let ctx = null, masterGain = null, filterNode = null, chordTimer = null;
    let isPlaying = false, userMuted = false, chordIdx = 0;

    // Warm dreamy ambient chords (Fmaj9 -> Cmaj9 -> Am9 -> G6)
    const CHORDS = [
      [174.61, 220.00, 261.63, 329.63, 392.00],
      [130.81, 196.00, 246.94, 293.66, 392.00],
      [110.00, 164.81, 220.00, 261.63, 329.63],
      [196.00, 246.94, 293.66, 329.63, 392.00]
    ];

    function updateUI(on) {
      btn.classList.toggle('is-playing', on);
      btn.setAttribute('aria-pressed', String(on));
      if (lbl) lbl.textContent = on ? 'Sound On' : 'Sound Off';
    }

    function playPadChord() {
      if (!ctx || !isPlaying || document.hidden) return;
      const now = ctx.currentTime;
      const notes = CHORDS[chordIdx % CHORDS.length];
      chordIdx++;

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        // Subtle detune for lush chorus warmth
        osc.frequency.setValueAtTime(freq, now);
        osc.detune.setValueAtTime((i - 2) * 4, now);

        const peak = i === 0 ? 0.045 : 0.024;
        noteGain.gain.setValueAtTime(0.0001, now);
        noteGain.gain.linearRampToValueAtTime(peak, now + 2.4);
        noteGain.gain.setValueAtTime(peak, now + 4.2);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 7.6);

        osc.connect(noteGain);
        noteGain.connect(filterNode);
        osc.start(now);
        osc.stop(now + 7.8);
      });
    }

    function startAudio() {
      if (isPlaying) return;
      try {
        if (!ctx) {
          ctx = new AudioCtx();
          masterGain = ctx.createGain();
          masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);

          filterNode = ctx.createBiquadFilter();
          filterNode.type = 'lowpass';
          filterNode.frequency.setValueAtTime(620, ctx.currentTime);
          filterNode.Q.setValueAtTime(0.7, ctx.currentTime);

          // Gentle stereo delay for atmospheric space
          const delay = ctx.createDelay(2.0);
          delay.delayTime.setValueAtTime(0.45, ctx.currentTime);
          const fb = ctx.createGain();
          fb.gain.setValueAtTime(0.28, ctx.currentTime);
          delay.connect(fb);
          fb.connect(delay);

          filterNode.connect(masterGain);
          filterNode.connect(delay);
          delay.connect(masterGain);
          masterGain.connect(ctx.destination);
        }
        if (ctx.state === 'suspended') ctx.resume();
        isPlaying = true;
        masterGain.gain.cancelScheduledValues(ctx.currentTime);
        masterGain.gain.setValueAtTime(Math.max(0.0001, masterGain.gain.value), ctx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.32, ctx.currentTime + 1.2);
        updateUI(true);
        playPadChord();
        clearInterval(chordTimer);
        chordTimer = setInterval(playPadChord, 5400);
      } catch (e) {}
    }

    function stopAudio() {
      if (!isPlaying || !ctx) return;
      isPlaying = false;
      clearInterval(chordTimer);
      const now = ctx.currentTime;
      masterGain.gain.cancelScheduledValues(now);
      masterGain.gain.setValueAtTime(Math.max(0.0001, masterGain.gain.value), now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
      updateUI(false);
    }

    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (isPlaying) {
        userMuted = true;
        stopAudio();
      } else {
        userMuted = false;
        startAudio();
      }
    });

    // Auto-start soft ambient soundscape on first user interaction
    const unlockOnce = () => {
      removeEventListener('pointerdown', unlockOnce);
      removeEventListener('keydown', unlockOnce);
      if (!userMuted && !isPlaying && !reduced) startAudio();
    };
    addEventListener('pointerdown', unlockOnce, { once: true, passive: true });
    addEventListener('keydown', unlockOnce, { once: true, passive: true });

    document.addEventListener('visibilitychange', () => {
      if (!ctx) return;
      if (document.hidden && isPlaying) ctx.suspend();
      else if (!document.hidden && isPlaying) ctx.resume();
    });
  }
  initAmbientAudio();
})();
