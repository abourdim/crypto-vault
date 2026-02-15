/**
 * Workshop DIY — Template
 * Themes · i18n (en/fr/ar) · RTL · Log · Toast · Status
 */

const $ = id => document.getElementById(id);

/* ═══════ LOGO (injected once) ═══════ */

// Uses your provided logo asset if present.
const LOGO_HTML = `<img src="logo-web.svg" alt="Workshop DIY" loading="eager" decoding="async" />`;

/* ═══════ i18n ═══════ */

const LANG = {
  en: {
    title: 'Crypto Vault', subtitle: '🔐 encrypt · 🔓 decrypt · 🧠 advice',
    disconnected: 'Disconnected', connected: 'Connected',
    encrypt: 'Encrypt', encryptDesc: 'Encrypt text or files locally in your browser',
    decrypt: 'Decrypt', decryptDesc: 'Decrypt blobs created by this app.',
    advice: 'Advice', adviceDesc: 'Practical security notes for safe use.',
    input: 'Input', output: 'Output',
    mode: 'Mode', modeText: 'Text', modeFile: 'File',
    file: 'File', fileHint: 'Used only if Mode = File',
    plaintext: 'Plaintext', ciphertext: 'Encrypted blob',
    password: 'Password', confirmPassword: 'Confirm', showPassword: 'Show password',
    encryptBtn: 'Encrypt', decryptBtn: 'Decrypt',
    download: 'Download',
    encryptInputHelp: 'Choose text or file to encrypt.',
    encryptOutputHelp: 'This blob contains everything needed to decrypt (salt, iv, parameters).',
    decryptInputHelp: 'Paste the encrypted blob or load a .json file.',
    decryptOutputHelp: 'Decrypted text will appear here, or you can download the file.',
    decryptWarn: 'Wrong password or corrupted data will fail safely.',
    adviceDo: 'Do', adviceDont: 'Don’t',
    do1: 'Use a long, unique password (12+ characters; longer is better).',
    do2: 'Treat the encrypted blob like a secret file — store it safely.',
    do3: 'If you encrypt a file, keep the filename somewhere if you need it later.',
    dont1: 'Don’t reuse passwords across important data.',
    dont2: 'Don’t share passwords in the same channel as the encrypted blob.',
    dont3: 'Don’t rely on clipboard for highly sensitive secrets (apps/extensions may read it).',
    adviceNote: 'All crypto happens locally in your browser using Web Crypto (AES‑GCM + PBKDF2). No network calls.',
    activityLog: 'Activity Log', eventsMsg: 'Events & messages',
    clear: 'Clear', copy: 'Copy', theme: 'Theme',
    t_mosque: 'Mosque', t_zellige: 'Zellige', t_andalus: 'Andalus',
    t_space: 'Space', t_jungle: 'Jungle', t_robot: 'Robot',
    ready: '🔐 Crypto Vault ready!',
    logCleared: 'Log cleared', copied: 'Copied!', copyFail: 'Copy failed',
    langChanged: '🌐 Language → English',
    themeChanged: '🎨 Theme →',
    missingInput: 'Please provide input to encrypt/decrypt.',
    passMismatch: 'Passwords do not match.',
    passRequired: 'Password is required.',
    encOk: 'Encrypted ✓',
    decOk: 'Decrypted ✓',
    badBlob: 'Invalid encrypted blob format.',
    decFail: 'Wrong password or corrupted data.',
    webcryptoMissing: 'Web Crypto not available in this browser.',
  },
  fr: {
    title: 'Coffre Crypto', subtitle: '🔐 chiffrer · 🔓 déchiffrer · 🧠 conseils',
    disconnected: 'Déconnecté', connected: 'Connecté',
    encrypt: 'Chiffrer', encryptDesc: 'Chiffrez du texte ou des fichiers localement dans votre navigateur',
    decrypt: 'Déchiffrer', decryptDesc: 'Déchiffrez les blocs créés par cette appli.',
    advice: 'Conseils', adviceDesc: 'Notes pratiques pour une utilisation sûre.',
    input: 'Entrée', output: 'Sortie',
    mode: 'Mode', modeText: 'Texte', modeFile: 'Fichier',
    file: 'Fichier', fileHint: 'Utilisé seulement si Mode = Fichier',
    plaintext: 'Texte clair', ciphertext: 'Bloc chiffré',
    password: 'Mot de passe', confirmPassword: 'Confirmer', showPassword: 'Afficher le mot de passe',
    encryptBtn: 'Chiffrer', decryptBtn: 'Déchiffrer',
    download: 'Télécharger',
    encryptInputHelp: 'Choisissez un texte ou un fichier à chiffrer.',
    encryptOutputHelp: 'Ce bloc contient tout pour déchiffrer (sel, iv, paramètres).',
    decryptInputHelp: 'Collez le bloc chiffré ou chargez un fichier .json.',
    decryptOutputHelp: 'Le texte déchiffré apparaît ici, ou téléchargez le fichier.',
    decryptWarn: 'Mot de passe faux ou données corrompues : échec sûr.',
    adviceDo: 'À faire', adviceDont: 'À éviter',
    do1: 'Utilisez un mot de passe long et unique (12+ caractères ; plus c’est long mieux c’est).',
    do2: 'Traitez le bloc chiffré comme un secret — stockez-le en sécurité.',
    do3: 'Si vous chiffrez un fichier, gardez son nom si vous en avez besoin plus tard.',
    dont1: 'Ne réutilisez pas les mots de passe pour des données importantes.',
    dont2: 'Ne partagez pas le mot de passe dans le même canal que le bloc chiffré.',
    dont3: 'N’utilisez pas le presse-papiers pour des secrets très sensibles (apps/extensions peuvent le lire).',
    adviceNote: 'Tout se fait localement via Web Crypto (AES‑GCM + PBKDF2). Aucun appel réseau.',
    activityLog: 'Journal', eventsMsg: 'Événements et messages',
    clear: 'Effacer', copy: 'Copier', theme: 'Thème',
    t_mosque: 'Mosquée', t_zellige: 'Zellige', t_andalus: 'Andalous',
    t_space: 'Espace', t_jungle: 'Jungle', t_robot: 'Robot',
    ready: '🔐 Coffre Crypto prêt !',
    logCleared: 'Journal effacé', copied: 'Copié !', copyFail: 'Échec',
    langChanged: '🌐 Langue → Français',
    themeChanged: '🎨 Thème →',
    missingInput: 'Veuillez fournir une entrée à chiffrer/déchiffrer.',
    passMismatch: 'Les mots de passe ne correspondent pas.',
    passRequired: 'Mot de passe requis.',
    encOk: 'Chiffré ✓',
    decOk: 'Déchiffré ✓',
    badBlob: 'Format de bloc chiffré invalide.',
    decFail: 'Mot de passe faux ou données corrompues.',
    webcryptoMissing: 'Web Crypto indisponible dans ce navigateur.',
  },
  ar: {
    title: 'الخزنة المشفّرة', subtitle: '🔐 تشفير · 🔓 فك التشفير · 🧠 نصائح',
    disconnected: 'غير متصل', connected: 'متصل',
    encrypt: 'تشفير', encryptDesc: 'شفّر نصوصاً أو ملفات محلياً داخل المتصفح',
    decrypt: 'فك التشفير', decryptDesc: 'فك تشفير الكتل التي ينشئها هذا التطبيق.',
    advice: 'نصائح', adviceDesc: 'ملاحظات عملية للاستخدام الآمن.',
    input: 'المدخلات', output: 'المخرجات',
    mode: 'الوضع', modeText: 'نص', modeFile: 'ملف',
    file: 'ملف', fileHint: 'يُستخدم فقط إذا كان الوضع = ملف',
    plaintext: 'نص واضح', ciphertext: 'كتلة مشفّرة',
    password: 'كلمة المرور', confirmPassword: 'تأكيد', showPassword: 'إظهار كلمة المرور',
    encryptBtn: 'تشفير', decryptBtn: 'فك التشفير',
    download: 'تنزيل',
    encryptInputHelp: 'اختر نصاً أو ملفاً للتشفير.',
    encryptOutputHelp: 'هذه الكتلة تحتوي كل ما يلزم لفك التشفير (salt, iv, parameters).',
    decryptInputHelp: 'الصق الكتلة المشفّرة أو حمّل ملف .json.',
    decryptOutputHelp: 'سيظهر النص بعد فك التشفير هنا أو يمكنك تنزيل الملف.',
    decryptWarn: 'كلمة مرور خاطئة أو بيانات تالفة: فشل آمن.',
    adviceDo: 'افعل', adviceDont: 'تجنّب',
    do1: 'استخدم كلمة مرور طويلة وفريدة (12+ حرفاً؛ كلما زادت كان أفضل).',
    do2: 'اعتبر الكتلة المشفّرة سراً — خزّنها بأمان.',
    do3: 'إذا شفّرت ملفاً، احتفظ باسم الملف إذا احتجته لاحقاً.',
    dont1: 'لا تعِد استخدام كلمات المرور لبيانات مهمة.',
    dont2: 'لا تشارك كلمة المرور في نفس القناة مع الكتلة المشفّرة.',
    dont3: 'لا تعتمد على الحافظة لأسرار شديدة الحساسية (قد تقرأها تطبيقات/إضافات).',
    adviceNote: 'كل شيء محلياً عبر Web Crypto (AES‑GCM + PBKDF2) بدون أي اتصالات شبكية.',
    activityLog: 'سجل النشاط', eventsMsg: 'الأحداث والرسائل',
    clear: 'مسح', copy: 'نسخ', theme: 'المظهر',
    t_mosque: 'مسجد', t_zellige: 'زليج', t_andalus: 'أندلس',
    t_space: 'فضاء', t_jungle: 'أدغال', t_robot: 'روبوت',
    ready: '🔐 الخزنة جاهزة!',
    logCleared: 'تم مسح السجل', copied: 'تم النسخ!', copyFail: 'فشل النسخ',
    langChanged: '🌐 اللغة ← العربية',
    themeChanged: '🎨 المظهر ←',
    missingInput: 'يرجى إدخال محتوى للتشفير/فك التشفير.',
    passMismatch: 'كلمتا المرور غير متطابقتين.',
    passRequired: 'كلمة المرور مطلوبة.',
    encOk: 'تم التشفير ✓',
    decOk: 'تم فك التشفير ✓',
    badBlob: 'صيغة الكتلة المشفّرة غير صحيحة.',
    decFail: 'كلمة مرور خاطئة أو بيانات تالفة.',
    webcryptoMissing: 'Web Crypto غير متوفر في هذا المتصفح.',
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const s = LANG[lang];
  if (!s) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (s[k] != null) el.textContent = s[k];
  });
  // Update theme dropdown labels
  document.querySelectorAll('[data-i18n-opt]').forEach(opt => {
    const k = opt.dataset.i18nOpt;
    if (s[k] != null) opt.textContent = s[k];
  });
  document.title = `${s.title} — Workshop DIY`;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  const sel = $('langSelect');
  if (sel) sel.value = lang;
  log(s.langChanged, 'info');
}

/* ═══════ THEMES ═══════ */

function setTheme(name) {
  document.documentElement.dataset.theme = name;
  const sel = $('themeSelect');
  if (sel) sel.value = name;
  const s = LANG[currentLang];
  const label = s['t_' + name] || name;
  log(`${s.themeChanged} ${label}`, 'info');
}

/* ═══════ LOG ═══════ */

const logContainer = $('logContainer');

function log(msg, type = 'info') {
  if (!logContainer) return;
  const d = document.createElement('div');
  d.className = `log-line ${type}`;
  d.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
  logContainer.appendChild(d);
  logContainer.scrollTop = logContainer.scrollHeight;
}

function clearLog() {
  if (logContainer) logContainer.innerHTML = '';
  log(LANG[currentLang].logCleared);
}

async function copyLog() {
  if (!logContainer) return;
  const t = Array.from(logContainer.children).map(d => d.textContent).join('\n');
  try { await navigator.clipboard.writeText(t); log(LANG[currentLang].copied, 'success'); }
  catch { log(LANG[currentLang].copyFail, 'error'); }
}

/* ═══════ TOAST ═══════ */

function showToast(msg) {
  const el = $('toastIndicator'), t = $('toastMessage');
  if (el && t) { t.textContent = msg || 'Working…'; el.style.display = 'block'; }
}
function hideToast() { const el = $('toastIndicator'); if (el) el.style.display = 'none'; }

/* ═══════ STATUS ═══════ */

function setStatus(connected) {
  const pill = $('statusPill'), txt = $('statusText'), s = LANG[currentLang];
  if (txt) txt.textContent = connected ? s.connected : s.disconnected;
  if (pill) pill.classList.toggle('connected', connected);
}

/* ═══════ CRYPTO VAULT (AES‑GCM + PBKDF2) ═══════ */

const CRYPTO_V = 1;
const PBKDF2_ITER = 310000;
const SALT_LEN = 16;
const IV_LEN = 12; // AES‑GCM recommended

const te = new TextEncoder();
const td = new TextDecoder();

function bytesToB64(bytes) {
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

function b64ToBytes(b64) {
  const bin = atob((b64 || '').trim());
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function randBytes(n) {
  const b = new Uint8Array(n);
  crypto.getRandomValues(b);
  return b;
}

async function deriveAesKeyFromPassword(password, salt, iter = PBKDF2_ITER) {
  const baseKey = await crypto.subtle.importKey(
    'raw',
    te.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: iter,
      hash: 'SHA-256'
    },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

function makeBlob(obj) {
  return JSON.stringify(obj);
}

function parseBlob(text) {
  const t = (text || '').trim();
  if (!t) throw new Error('empty');
  const obj = JSON.parse(t);
  if (!obj || typeof obj !== 'object') throw new Error('bad');
  if (obj.v !== CRYPTO_V) throw new Error('version');
  if (obj.alg !== 'AES-GCM') throw new Error('alg');
  if (obj.kdf !== 'PBKDF2') throw new Error('kdf');
  if (!obj.salt || !obj.iv || !obj.ct) throw new Error('fields');
  return obj;
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function downloadBytes(filename, bytes) {
  const blob = new Blob([bytes], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    log(LANG[currentLang].copied, 'success');
  } catch {
    log(LANG[currentLang].copyFail, 'error');
  }
}

function setMode(prefix, mode) {
  const input = $(prefix + 'Input');
  const file = $(prefix + 'File');
  if (mode === 'file') {
    if (input) { input.disabled = true; input.placeholder = ''; }
    if (file) file.disabled = false;
  } else {
    if (input) { input.disabled = false; }
    if (file) file.disabled = true;
  }
}

async function handleEncrypt() {
  const s = LANG[currentLang];
  const mode = $('encMode')?.value || 'text';
  const pass = $('encPass')?.value || '';
  const pass2 = $('encPass2')?.value || '';
  const encOut = $('encOut');
  if (encOut) encOut.value = '';

  if (!pass) return log(s.passRequired, 'error');
  if (pass !== pass2) return log(s.passMismatch, 'error');

  let payloadBytes;
  let meta = { type: 'text' };

  if (mode === 'file') {
    const f = $('encFile')?.files?.[0];
    if (!f) return log(s.missingInput, 'error');
    payloadBytes = new Uint8Array(await f.arrayBuffer());
    meta = { type: 'file', name: f.name, mime: f.type || 'application/octet-stream' };
  } else {
    const txt = $('encInput')?.value || '';
    if (!txt.trim()) return log(s.missingInput, 'error');
    payloadBytes = te.encode(txt);
    meta = { type: 'text' };
  }

  showToast(mode === 'file' ? 'Encrypting file…' : 'Encrypting…');
  try {
    const salt = randBytes(SALT_LEN);
    const iv = randBytes(IV_LEN);
    const key = await deriveAesKeyFromPassword(pass, salt, PBKDF2_ITER);
    const ctBuf = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, payloadBytes);
    const ct = new Uint8Array(ctBuf);

    const blobObj = {
      v: CRYPTO_V,
      alg: 'AES-GCM',
      kdf: 'PBKDF2',
      hash: 'SHA-256',
      iter: PBKDF2_ITER,
      salt: bytesToB64(salt),
      iv: bytesToB64(iv),
      ct: bytesToB64(ct),
      meta
    };

    const outText = makeBlob(blobObj);
    if (encOut) encOut.value = outText;
    log(s.encOk, 'tx');
  } catch (e) {
    console.error(e);
    log('Encrypt failed', 'error');
  } finally {
    hideToast();
  }
}

async function handleDecrypt() {
  const s = LANG[currentLang];
  const mode = $('decMode')?.value || 'text';
  const pass = $('decPass')?.value || '';
  const decOut = $('decOut');
  if (decOut) decOut.value = '';
  if (!pass) return log(s.passRequired, 'error');

  let blobText = '';
  if (mode === 'file') {
    const f = $('decFile')?.files?.[0];
    if (!f) return log(s.missingInput, 'error');
    blobText = await f.text();
  } else {
    blobText = $('decInput')?.value || '';
    if (!blobText.trim()) return log(s.missingInput, 'error');
  }

  showToast('Decrypting…');
  try {
    const obj = parseBlob(blobText);
    const salt = b64ToBytes(obj.salt);
    const iv = b64ToBytes(obj.iv);
    const ct = b64ToBytes(obj.ct);
    const iter = Number(obj.iter || PBKDF2_ITER);

    const key = await deriveAesKeyFromPassword(pass, salt, iter);
    const ptBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct);
    const pt = new Uint8Array(ptBuf);

    const meta = obj.meta || { type: 'text' };
    if (meta.type === 'file') {
      // For files we show a friendly note + allow download.
      if (decOut) decOut.value = `${meta.name || 'file'} (${pt.length} bytes)`;
      $('decDownload').dataset.bin = bytesToB64(pt);
      $('decDownload').dataset.filename = meta.name || 'decrypted.bin';
      $('decDownload').dataset.mime = meta.mime || 'application/octet-stream';
    } else {
      const text = td.decode(pt);
      if (decOut) decOut.value = text;
      $('decDownload').dataset.bin = '';
      $('decDownload').dataset.filename = 'decrypted.txt';
      $('decDownload').dataset.mime = 'text/plain;charset=utf-8';
    }
    log(s.decOk, 'rx');
  } catch (e) {
    console.error(e);
    // Distinguish parse vs decrypt
    if (String(e?.message || '').includes('Unexpected') || String(e?.message || '') === 'empty') {
      log(s.badBlob, 'error');
    } else {
      log(s.decFail, 'error');
    }
  } finally {
    hideToast();
  }
}

function initCryptoUI() {
  // Mode toggles
  const encMode = $('encMode');
  const decMode = $('decMode');
  if (encMode) {
    encMode.addEventListener('change', () => setMode('enc', encMode.value));
    setMode('enc', encMode.value);
  }
  if (decMode) {
    decMode.addEventListener('change', () => setMode('dec', decMode.value));
    setMode('dec', decMode.value);
  }

  // Show password toggles
  const encShow = $('encShow');
  if (encShow) encShow.addEventListener('change', () => {
    const t = encShow.checked ? 'text' : 'password';
    if ($('encPass')) $('encPass').type = t;
    if ($('encPass2')) $('encPass2').type = t;
  });
  const decShow = $('decShow');
  if (decShow) decShow.addEventListener('change', () => {
    if ($('decPass')) $('decPass').type = decShow.checked ? 'text' : 'password';
  });

  // Buttons
  const encBtn = $('encBtn');
  if (encBtn) encBtn.addEventListener('click', handleEncrypt);
  const decBtn = $('decBtn');
  if (decBtn) decBtn.addEventListener('click', handleDecrypt);

  // Copy
  const encCopy = $('encCopy');
  if (encCopy) encCopy.addEventListener('click', () => copyText($('encOut')?.value || ''));
  const decCopy = $('decCopy');
  if (decCopy) decCopy.addEventListener('click', () => copyText($('decOut')?.value || ''));

  // Download
  const encDl = $('encDownload');
  if (encDl) encDl.addEventListener('click', () => {
    const out = $('encOut')?.value || '';
    if (!out.trim()) return;
    downloadText('encrypted.json', out);
  });

  const decDl = $('decDownload');
  if (decDl) decDl.addEventListener('click', () => {
    const bin = decDl.dataset.bin || '';
    const name = decDl.dataset.filename || 'decrypted.txt';
    if (bin) {
      const bytes = b64ToBytes(bin);
      downloadBytes(name, bytes);
    } else {
      const text = $('decOut')?.value || '';
      if (!text.trim()) return;
      downloadText(name, text);
    }
  });

  // If user selects a file, auto switch to file mode
  const ef = $('encFile');
  if (ef) ef.addEventListener('change', () => { if (encMode) { encMode.value = 'file'; setMode('enc', 'file'); } });
  const df = $('decFile');
  if (df) df.addEventListener('change', () => { if (decMode) { decMode.value = 'file'; setMode('dec', 'file'); } });
}

/* ═══════ INIT ═══════ */

function init() {
  // Inject logo
  const lw = $('logoWrap');
  if (lw) lw.innerHTML = LOGO_HTML;

  // Log buttons
  const cb = $('clearLogBtn'), cpb = $('copyLogBtn');
  if (cb) cb.onclick = clearLog;
  if (cpb) cpb.onclick = copyLog;

  // Language dropdown
  const langSel = $('langSelect');
  if (langSel) langSel.addEventListener('change', () => setLanguage(langSel.value));

  // Theme dropdown
  const themeSel = $('themeSelect');
  if (themeSel) themeSel.addEventListener('change', () => setTheme(themeSel.value));

  initCryptoUI();
  const cryptoOk = !!(window.crypto && window.crypto.subtle);
  setStatus(cryptoOk);
  if (!cryptoOk) log(LANG[currentLang].webcryptoMissing, 'error');
  log(LANG[currentLang].ready, 'success');
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', init)
  : init();
