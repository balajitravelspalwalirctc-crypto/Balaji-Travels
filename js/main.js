// Simple translations, language persistence and basic form handling

const translations = {
  hi: {
    title: "बालाजी ट्रेवल्स - आपका यात्रा साथी",
    heroText: "आपकी सपनों की यात्रा शुरू करें!",
    heroDesc: "फ्लाइट्स, होटल्स और पैकेज बुक करें आसानी से।",
    searchTitle: "फ्लाइट सर्च",
    bookingTitle: "बुकिंग प्रोसेस",
    bookingDesc: "1. फ्लाइट चुनें, 2. डिटेल्स भरें, 3. पेमेंट करें।",
    supportTitle: "कस्टमर सपोर्ट",
    supportDesc: "हमसे संपर्क करें: support@balajitravels.com | फोन: 1800-123-456",
    blogTitle: "ब्लॉग",
    blogContent: "मुंबई की सड़कों पर घूमें और मजा करें।",
    navHome: "होम",
    navSearch: "फ्लाइट सर्च",
    navBooking: "बुकिंग",
    navSupport: "सपोर्ट",
    navBlog: "ब्लॉग",
    searchBtn: "सर्च करें",
    bookingBtn: "बुकिंग शुरू करें",
    submitBtn: "सबमिट",
  },
  en: {
    title: "Balaji Travels - Your Travel Partner",
    heroText: "Start Your Dream Journey!",
    heroDesc: "Book flights, hotels, and packages easily.",
    searchTitle: "Flight Search",
    bookingTitle: "Booking Process",
    bookingDesc: "1. Select flight, 2. Fill details, 3. Pay.",
    supportTitle: "Customer Support",
    supportDesc: "Contact us: support@balajitravels.com | Phone: 1800-123-456",
    blogTitle: "Blog",
    blogContent: "Explore Mumbai's streets and have fun.",
    navHome: "Home",
    navSearch: "Flight Search",
    navBooking: "Booking",
    navSupport: "Support",
    navBlog: "Blog",
    searchBtn: "Search",
    bookingBtn: "Start Booking",
    submitBtn: "Submit",
  }
};

function setLangUI(lang) {
  const t = translations[lang] || translations.hi;
  document.documentElement.lang = lang === 'en' ? 'en' : 'hi';
  document.getElementById('site-title').textContent = t.title;
  document.getElementById('hero-text').textContent = t.heroText;
  document.getElementById('hero-desc').textContent = t.heroDesc;
  document.getElementById('search-title').textContent = t.searchTitle;
  document.getElementById('booking-title').textContent = t.bookingTitle;
  document.getElementById('booking-desc').textContent = t.bookingDesc;
  document.getElementById('support-title').textContent = t.supportTitle;
  document.getElementById('support-desc').innerHTML = t.supportDesc.replace(/\n/g,'<br>');
  document.getElementById('blog-title').textContent = t.blogTitle;
  document.getElementById('blog-content').textContent = t.blogContent;
  document.getElementById('nav-home').textContent = t.navHome;
  document.getElementById('nav-search').textContent = t.navSearch;
  document.getElementById('nav-booking').textContent = t.navBooking;
  document.getElementById('nav-support').textContent = t.navSupport;
  document.getElementById('nav-blog').textContent = t.navBlog;
  document.getElementById('search-btn').textContent = t.searchBtn;
  document.getElementById('start-booking').textContent = t.bookingBtn;
  document.querySelectorAll('.support-form .primary-btn').forEach(b => { b.textContent = t.submitBtn; });
  localStorage.setItem('siteLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  // language init
  const saved = localStorage.getItem('siteLang') || 'hi';
  setLangUI(saved);

  document.getElementById('btn-hi').addEventListener('click', () => setLangUI('hi'));
  document.getElementById('btn-en').addEventListener('click', () => setLangUI('en'));

  // nav toggle for mobile
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? '' : 'flex';
  });

  // Flight search demo
  const flightForm = document.getElementById('flight-form');
  flightForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const departure = document.getElementById('departure').value.trim();
    const arrival = document.getElementById('arrival').value.trim();
    const date = document.getElementById('date').value;
    const results = document.getElementById('results');

    if (!departure || !arrival || !date) {
      results.innerHTML = `<p class="error">कृपया सभी फ़ील्ड भरें। / Please fill all fields.</p>`;
      return;
    }

    // Simulated results; replace with real API integration later
    results.innerHTML = `<p>रिजल्ट्स: ${departure} से ${arrival} पर ${date} को फ्लाइट्स मिलीं। (यह सिर्फ डेमो है)</p>`;
  });

  // Support form demo (no backend)
  const supForm = document.getElementById('support-form');
  supForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('sup-name').value.trim();
    const email = document.getElementById('sup-email').value.trim();
    const message = document.getElementById('sup-message').value.trim();
    const out = document.getElementById('support-result');

    if (!name || !email || !message) {
      out.innerHTML = `<p class="error">कृपया सभी फ़ील्ड भरें। / Please fill all fields.</p>`;
      return;
    }

    out.innerHTML = `<p>धन्यवाद ${name}! आपकी जानकारी प्राप्त हुई। हम शीघ्र संपर्क करेंगे।</p>`;
    supForm.reset();
  });

  // Footer year
  document.getElementById('year').textContent = (new Date()).getFullYear();
});
