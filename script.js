/* --- White Minimalist Theme Variables --- */
:root[data-theme="light"] {
    --bg-body: #ffffff;
    --bg-surface: #ffffff;
    --bg-sidebar: #f8fafc;
    --text-primary: #0f172a;
    --text-secondary: #334155;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
    --accent-color: #2563eb;
    --accent-hover: #1d4ed8;
    --accent-light: #eff6ff;
    --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

:root[data-theme="dark"] {
    --bg-body: #090d16;
    --bg-surface: #111827;
    --bg-sidebar: #0f172a;
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --text-muted: #94a3b8;
    --border-color: #1e293b;
    --accent-color: #38bdf8;
    --accent-hover: #7dd3fc;
    --accent-light: #075985;
    --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

/* --- Base Styles --- */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Sarabun', 'Prompt', sans-serif;
    background-color: var(--bg-body);
    color: var(--text-primary);
    line-height: 1.8;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
}

h1, h2, h3, h4 {
    font-family: 'Prompt', sans-serif;
    color: var(--text-primary);
    font-weight: 600;
}

h1 { font-size: 2.2rem; margin-bottom: 0.5rem; line-height: 1.3; }
h2 { font-size: 1.6rem; margin: 2.5rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--border-color); color: var(--text-primary); }
h3 { font-size: 1.25rem; margin: 1.5rem 0 0.8rem; }

p { margin-bottom: 1rem; color: var(--text-secondary); }

/* --- Navbar --- */
.navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: var(--bg-surface);
    border-bottom: 1px solid var(--border-color);
    height: 60px;
    display: flex;
    align-items: center;
}

.nav-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Prompt', sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
}

.logo-text span { color: var(--accent-color); }

.theme-btn {
    background: none;
    border: 1px solid var(--border-color);
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    color: var(--text-primary);
}

.theme-btn:hover { background-color: var(--bg-sidebar); }

/* --- Main Layout --- */
.main-layout {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    min-height: calc(100vh - 60px);
}

/* --- Sidebar --- */
.sidebar {
    width: 280px;
    background-color: var(--bg-sidebar);
    border-right: 1px solid var(--border-color);
    padding: 2rem 1rem;
    position: sticky;
    top: 60px;
    height: calc(100vh - 60px);
    overflow-y: auto;
}

.toc-title {
    font-family: 'Prompt', sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin-bottom: 1rem;
}

.toc-nav ul { list-style: none; }
.toc-nav li { margin-bottom: 0.4rem; }

.toc-link {
    display: block;
    padding: 0.50rem 0.75rem;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.92rem;
    border-radius: 6px;
    transition: all 0.2s;
}

.toc-link:hover, .toc-link.active {
    background-color: var(--bg-body);
    color: var(--accent-color);
    font-weight: 600;
    border: 1px solid var(--border-color);
}

/* --- Content Area --- */
.content {
    flex: 1;
    padding: 2.5rem 3.5rem;
    max-width: 920px;
    background-color: var(--bg-surface);
}

.doc-header {
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
}

.badge {
    display: inline-block;
    padding: 0.2rem 0.7rem;
    background-color: #f1f5f9;
    color: var(--text-primary);
    font-size: 0.82rem;
    font-weight: 600;
    border-radius: 50px;
    margin-bottom: 0.75rem;
    border: 1px solid var(--border-color);
}

.subtitle {
    font-size: 1.15rem;
    color: var(--text-muted);
}

/* --- Slide Card Component --- */
.slide-card {
    background-color: #f8fafc;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    position: relative;
}

.slide-badge {
    display: inline-block;
    background-color: #0f172a;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
}

.slide-card h3 {
    margin-top: 0;
    color: var(--text-primary);
}

.slide-card ul {
    margin-left: 1.2rem;
    color: var(--text-secondary);
}

.slide-card li {
    margin-bottom: 0.5rem;
}

/* --- Chart Component --- */
.chart-box {
    background-color: #ffffff;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    box-shadow: var(--card-shadow);
}

.chart-caption {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0;
}

/* --- Image & Formula Component --- */
.image-box {
    margin: 1.5rem 0;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    background-color: #fafafa;
}

.image-box img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
}

.image-caption {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    color: var(--text-muted);
    text-align: center;
    background-color: var(--bg-body);
    border-top: 1px solid var(--border-color);
    margin-bottom: 0;
}

.formula-box {
    background-color: #fafafa;
    border: 1px solid var(--border-color);
    border-left: 4px solid var(--accent-color);
    padding: 1.25rem;
    margin: 1.5rem 0;
    border-radius: 6px;
}

.formula-title {
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.formula-desc {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-top: 0.5rem;
    margin-bottom: 0;
}

/* --- Tables --- */
.table-wrapper {
    overflow-x: auto;
    margin: 1.5rem 0;
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-size: 0.92rem;
}

th, td {
    padding: 0.85rem 1rem;
    border-bottom: 1px solid var(--border-color);
}

th {
    background-color: #f8fafc;
    font-weight: 600;
}

.highlight-dark { color: #0f172a; font-weight: 600; }
.highlight-blue { color: #2563eb; font-weight: 600; }
.highlight-gray { color: #64748b; font-weight: 600; }

/* --- Footer --- */
.doc-footer {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: var(--text-muted);
    font-size: 0.85rem;
}

/* --- Responsive Design --- */
@media (max-width: 850px) {
    .main-layout { flex-direction: column; }
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
        top: 0;
        border-right: none;
        border-bottom: 1px solid var(--border-color);
    }
    .content { padding: 1.5rem; }
}
