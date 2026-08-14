import { useEffect, useMemo, useState } from 'react'
import './App.css'
import logoImage from '../logo-GdqARQRt.png'
import salemAvatar from './assets/salem-ahmed.jpg'
import mohamedAvatar from './assets/mohamed-ali.jpg'
import ibrahimAvatar from './assets/ibrahim-hassan.jpg'
import goldenHourImage from './assets/golden-hour.jpg'
import flashCameraImage from './assets/flash-camera-original.jpg'
import landscapeImage from './assets/landscape-mountains.jpg'
import streetImage from './assets/portrait-street.jpg'
import weddingImage from './assets/portrait-wedding.jpg'
import selfPortraitImage from './assets/portrait-self.jpg'
import naderAvatar from './assets/nader-saeed.jpg'
import mansourAvatar from './assets/mansour-alzahrani.jpg'
import ahmedAvatar from './assets/ahmed-alshehri.jpg'
import naifAvatar from './assets/naif-almutairi.jpg'
import sultanAvatar from './assets/sultan-alrajhi.jpg'
import wildlifeImage from './assets/landscape-wildlife.jpg'
import architectureImage from './assets/landscape-architecture.jpg'
import travelImage from './assets/landscape-travel.jpg'
import omarAvatar from './assets/omar-alrashed.jpg'
import tariqAvatar from './assets/tariq-altamimi.jpg'
import yasserAvatar from './assets/yasser-alotaibi.jpg'
import compositionImage from './assets/tech-composition.jpg'
import foodImage from './assets/tech-food.jpg'
import blackWhiteImage from './assets/tech-black-white.jpg'
import macroImage from './assets/tech-macro.jpg'
import colorsImage from './assets/tech-colors.jpg'
import realEstateImage from './assets/tech-real-estate.jpg'
import minimalistImage from './assets/tech-minimalist.jpg'
import dawoodAvatar from './assets/dawood-khaled.jpg'
import laithAvatar from './assets/laith-mahmoud.jpg'
import haniAvatar from './assets/hani-alshammari.jpg'
import faresAvatar from './assets/fares-alali.jpg'
import ramiAvatar from './assets/rami-alkhatib.jpg'
import loayAvatar from './assets/loay-alsaleh.jpg'
import rihamAvatar from './assets/riham-alhusseini.jpg'
import abdullahAvatar from './assets/abdullah-alghamdi.jpg'
import rashedAvatar from './assets/rashed-aljaser.jpg'
import lightroomImage from './assets/equipment-lightroom.jpg'
import droneImage from './assets/equipment-drone.jpg'
import rawJpegImage from './assets/equipment-raw-jpeg.jpg'
import lensImage from './assets/equipment-lens.jpg'
import jamalAvatar from './assets/jamal-abdullah.jpg'
import samiAvatar from './assets/sami-alharbi.jpg'
import faisalAvatar from './assets/faisal-aldosari.jpg'
import karimAvatar from './assets/karim-alfahad.jpg'
import fahadAvatar from './assets/fahad-alsubaie.jpg'

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  )
}

function StatIcon({ type }) {
  const icons = {
    articles: <><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
    readers: <><circle cx="12" cy="8" r="3" /><circle cx="5" cy="10" r="2" /><circle cx="19" cy="10" r="2" /><path d="M7 19v-2a5 5 0 0 1 10 0v2M2 19v-1a4 4 0 0 1 4-4M22 19v-1a4 4 0 0 0-4-4" /></>,
    categories: <><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M3 10h18" /></>,
    writers: <><path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10Z" /><path d="m14 7 3 3M4 20l1-4 3 3" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>
}

function Logo({ onNavigate }) {
  return (
    <a className="brand" href="/" onClick={(event) => onNavigate(event, '/')}>
      <img className="logo-symbol" src={logoImage} alt="" aria-hidden="true" />

      <div className="brand-text">
        <strong>عدسة</strong>
        <small>عالم التصوير الفوتوغرافي</small>
      </div>
    </a>
  )
}

function Header({ currentPath, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <Logo onNavigate={onNavigate} />

        <nav className={menuOpen ? 'navbar open' : 'navbar'}>
          <a className={currentPath === '/' ? 'active' : ''} href="/" onClick={(event) => onNavigate(event, '/')}>
            الرئيسية
          </a>

          <a className={currentPath.startsWith('/blog') ? 'active' : ''} href="/blog" onClick={(event) => onNavigate(event, '/blog')}>المدونة</a>
          <a className={currentPath === '/about' ? 'active' : ''} href="/about" onClick={(event) => onNavigate(event, '/about')}>من نحن</a>
        </nav>

        <div className="header-actions">
          <button className="search-btn" type="button" aria-label="بحث">
            <SearchIcon />
          </button>

          <a className="reading-btn" href="/blog" onClick={(event) => onNavigate(event, '/blog')}>
            ابدأ القراءة
          </a>

          <button
            className="menu-btn"
            type="button"
            aria-label="فتح القائمة"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const statistics = [
    { icon: 'articles', number: '+50', label: 'مقالة' },
    { icon: 'readers', number: '+10 ألف', label: 'قارئ' },
    { icon: 'categories', number: '4', label: 'تصنيفات' },
    { icon: 'writers', number: '6', label: 'كاتب' },
  ]

  return (
    <section className="hero" id="home">
      <div className="left-glow" />
      <div className="right-glow" />

      <div className="hero-content">
        <div className="welcome">
          <span className="small-dot" />
          <span className="large-dot" />
          مرحباً بك في عدسة
        </div>

        <h1>
          اكتشف <span>فن</span>
          <br />
          التصوير الفوتوغرافي
        </h1>

        <p>
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في
          <br className="desktop-break" />
          التصوير.
        </p>

        <div className="hero-buttons">
          <a href="#blog" className="primary-btn">
            استكشف المقالات
            <span>←</span>
          </a>

          <a href="#about" className="secondary-btn">
            اعرف المزيد
            <span className="info">i</span>
          </a>
        </div>

        <div className="statistics" aria-label="إحصائيات المدونة">
          {statistics.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <StatIcon type={stat.icon} />
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function CategoryIcon({ type }) {
  const icons = {
    lighting: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></>,
    portrait: <><circle cx="12" cy="8" r="3.5" /><path d="M5.5 20a6.5 6.5 0 0 1 13 0" /></>,
    landscape: <><path d="m3 19 6-9 4 5 3-4 5 8Z" /><circle cx="17.5" cy="6.5" r="1.5" /></>,
    techniques: <><path d="M4 7h16M4 12h16M4 17h16" /><circle cx="9" cy="7" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="11" cy="17" r="2" /></>,
    equipment: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>
}

function FeaturedArticles({ onNavigate }) {
  const articles = [
    {
      id: 1,
      category: 'إضاءة',
      time: '8 دقائق للقراءة',
      title: 'إتقان تصوير الساعة الذهبية: دليل شامل',
      description: 'تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.',
      author: 'سالم أحمد',
      date: '15 يناير 2026',
      image: goldenHourImage,
      avatar: salemAvatar,
    },
    {
      id: 2,
      category: 'بورتريه',
      time: '6 دقائق للقراءة',
      title: 'أسرار تصوير البورتريه: كيف تلتقط روح الشخصية',
      description: 'اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.',
      author: 'محمد علي',
      date: '12 يناير 2026',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=85',
      avatar: mohamedAvatar,
    },
    {
      id: 3,
      category: 'مناظر طبيعية',
      time: '10 دقائق للقراءة',
      title: 'دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف',
      description: 'استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.',
      author: 'إبراهيم حسن',
      date: '10 يناير 2026',
      image: landscapeImage,
      avatar: ibrahimAvatar,
    },
  ]

  return (
    <section className="featured-section" id="blog">
      <div className="featured-container">
        <div className="featured-heading">
          <div>
            <div className="featured-label">
              <span className="small-dot"></span>
              <span className="large-dot"></span>
              مميز
            </div>
            <h2>مقالات مختارة</h2>
            <p>محتوى منتقى لبدء رحلة تعلمك</p>
          </div>

          <a className="view-all" href="/blog" onClick={(event) => onNavigate(event, '/blog')}>
            عرض الكل
            <span>‹</span>
          </a>
        </div>

        <div className="featured-list">
          {articles.map((article) => (
            <article className="featured-card" key={article.title}>
              <div className="featured-image">
                <img src={article.image} alt={article.title} />
                <span className="featured-badge">★ &nbsp; مميز</span>
              </div>

              <div className="featured-content">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="read-time"><ClockIcon />{article.time}</span>
                </div>

                <h3>{article.title}</h3>
                <p>{article.description}</p>

                <div className="article-footer">
                  <div className="author">
                    <img src={article.avatar} alt={article.author} />
                    <span className="author-dot"></span>
                    <div>
                      <strong>{article.author}</strong>
                      <small>{article.date}</small>
                    </div>
                  </div>

                  <a href={`/blog/${article.id}`} className="read-article" onClick={(event) => onNavigate(event, `/blog/${article.id}`)}>اقرأ المقال <span>←</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Categories() {
  const categories = [
    { title: 'إضاءة', count: 3, icon: 'lighting' },
    { title: 'بورتريه', count: 3, icon: 'portrait' },
    { title: 'مناظر طبيعية', count: 2, icon: 'landscape' },
    { title: 'تقنيات', count: 5, icon: 'techniques' },
    { title: 'معدات', count: 3, icon: 'equipment' },
  ]

  return (
    <section className="categories-section" id="categories">
      <div className="categories-container">
        <div className="categories-intro">
          <div className="categories-label">
            <span className="small-dot"></span>
            <span className="large-dot"></span>
            التصنيفات
          </div>
          <h2>استكشف حسب الموضوع</h2>
          <p>اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <a className="category-card" href="#blog" key={category.title}>
              <span className="category-icon"><CategoryIcon type={category.icon} /></span>
              <strong>{category.title}</strong>
              <small>{category.count} مقالة</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function LatestArticles() {
  const latestArticles = [
    {
      category: 'تقنيات',
      date: '8 يناير 2026',
      time: '7 دقائق للقراءة',
      title: 'أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي',
      description: 'افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.',
      author: 'داود خالد',
      role: 'مدرب تصوير',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85',
      avatar: ibrahimAvatar,
    },
    {
      category: 'تقنيات',
      date: '5 يناير 2026',
      time: '9 دقائق للقراءة',
      title: 'قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية',
      description: 'تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.',
      author: 'ليث محمود',
      role: 'فنان بصري',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=85',
      avatar: mohamedAvatar,
    },
    {
      category: 'معدات',
      date: '3 يناير 2026',
      time: '8 دقائق للقراءة',
      title: 'تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك',
      description: 'اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.',
      author: 'جمال عبدالله',
      role: 'مصور ومراجع تقني',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85',
      avatar: salemAvatar,
    },
  ]

  return (
    <section className="latest-section" id="latest">
      <div className="latest-container">
        <div className="latest-heading">
          <div>
            <div className="latest-label">
              <span className="small-dot"></span>
              <span className="large-dot"></span>
              الأحدث
            </div>
            <h2>أحدث المقالات</h2>
            <p>محتوى جديد طازج من المطبعة</p>
          </div>

          <a className="all-articles-link" href="#blog">عرض جميع المقالات <span>←</span></a>
        </div>

        <div className="latest-grid">
          {latestArticles.map((article) => (
            <article className="latest-card" key={article.title}>
              <div className="latest-image">
                <img src={article.image} alt={article.title} />
                <span>{article.category}</span>
              </div>

              <div className="latest-content">
                <div className="latest-meta">
                  <span><ClockIcon />{article.time}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h3>{article.title}</h3>
                <p>{article.description}</p>

                <div className="latest-footer">
                  <div className="latest-author">
                    <img src={article.avatar} alt={article.author} />
                    <div><strong>{article.author}</strong><small>{article.role}</small></div>
                  </div>
                  <a href="#article" aria-label={`اقرأ مقال ${article.title}`}>‹</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  function subscribe(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-card">
        <span className="mail-icon"><MailIcon /></span>
        <h2>اشترك في <span>نشرتنا الإخبارية</span></h2>
        <p>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>

        {submitted ? (
          <div className="subscription-success">شكراً لاشتراكك! ستصلك رسالتنا القادمة قريباً.</div>
        ) : (
          <form className="newsletter-form" onSubmit={subscribe}>
            <input type="email" placeholder="أدخل بريدك الإلكتروني" aria-label="البريد الإلكتروني" required />
            <button type="submit">اشترك الآن</button>
          </form>
        )}

        <div className="newsletter-proof">
          <div className="subscriber-avatars">
            <img src={salemAvatar} alt="" />
            <img src={mohamedAvatar} alt="" />
            <img src={ibrahimAvatar} alt="" />
          </div>
          <strong>انضم لـ +10,000 مصور</strong>
          <span>•</span>
          <span>بدون إزعاج</span>
          <span>•</span>
          <span>إلغاء الاشتراك في أي وقت</span>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const [footerSubscribed, setFooterSubscribed] = useState(false)

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo"><span>ع</span><strong>عدسة</strong></div>
          <p>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
          <div className="social-links">
            <a href="#x" aria-label="X">𝕏</a>
            <a href="#github" aria-label="GitHub">◉</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#youtube" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>استكشف</h3>
          <a href="#home">الرئيسية</a>
          <a href="#blog">المدونة</a>
          <a href="#about">من نحن</a>
        </div>

        <div className="footer-column">
          <h3>التصنيفات</h3>
          <a href="#categories">إضاءة</a>
          <a href="#categories">بورتريه</a>
          <a href="#categories">مناظر طبيعية</a>
          <a href="#categories">تقنيات</a>
        </div>

        <div className="footer-subscribe">
          <h3>ابقَ على اطلاع</h3>
          <p>اشترك للحصول على أحدث المقالات والتحديثات.</p>
          {footerSubscribed ? (
            <span className="footer-success">تم الاشتراك بنجاح ✓</span>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); setFooterSubscribed(true) }}>
              <input type="email" placeholder="أدخل بريدك الإلكتروني" aria-label="البريد الإلكتروني في الفوتر" required />
              <button type="submit">اشترك</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 عدسة. صنع بكل <span>♥</span> جميع الحقوق محفوظة.</div>
        <div><a href="#privacy">سياسة الخصوصية</a><a href="#terms">شروط الخدمة</a></div>
      </div>
    </footer>
  )
}

const blogImages = [
  goldenHourImage,
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
  landscapeImage,
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85',
]

const blogTitles = [
  'إتقان تصوير الساعة الذهبية: دليل شامل',
  'أسرار تصوير البورتريه: كيف تلتقط روح الشخصية',
  'دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف',
  'أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي',
  'قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية',
  'تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك',
  'اختيار العدسة المثالية لكل نوع من التصوير',
  'التحكم في الإضاءة الطبيعية داخل صورك',
  'دليل التصوير الليلي والنجوم للمبتدئين',
  'كيف تصنع قصة بصرية قوية من مجموعة صور',
]

const blogDescriptions = [
  'تعلم كيفية التقاط صور مذهلة مع نصائح احترافية حول الإضاءة والتكوين.',
  'اكتشف تقنيات عملية تمنح صورك إحساساً أعمق ونتائج أكثر احترافية.',
  'خطوات واضحة تساعدك على تطوير رؤيتك واستخدام معداتك بأفضل طريقة.',
]

const blogAuthors = [
  { name: 'سالم أحمد', role: 'مصور محترف', avatar: salemAvatar },
  { name: 'محمد علي', role: 'مصور بورتريه', avatar: mohamedAvatar },
  { name: 'إبراهيم حسن', role: 'مصور طبيعة', avatar: ibrahimAvatar },
]

const categoryNames = ['إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات']

const blogPosts = Array.from({ length: 28 }, (_, index) => {
  const author = blogAuthors[index % blogAuthors.length]
  return {
    id: index + 1,
    title: blogTitles[index % blogTitles.length],
    description: blogDescriptions[index % blogDescriptions.length],
    category: categoryNames[index % categoryNames.length],
    image: blogImages[index % blogImages.length],
    time: `${6 + (index % 5)} دقائق للقراءة`,
    date: `${3 + (index % 20)} يناير 2026`,
    ...author,
  }
})

const lightingCategory = 'إضاءة'

const lightingArticleOverrides = {
  0: {
    title: 'إتقان تصوير الساعة الذهبية: دليل شامل',
    description: 'تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.',
    image: goldenHourImage,
    time: '8 دقائق للقراءة',
    date: '15 يناير 2026',
    name: 'سالم أحمد',
    role: 'مصور محترف',
    avatar: salemAvatar,
  },
  6: {
    title: 'تصوير الليل والنجوم: دليلك لالتقاط سماء الليل',
    description: 'تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
    time: '11 دقائق للقراءة',
    date: '1 يناير 2026',
    name: 'خالد الفيصل',
    role: 'مصور فلكي',
    avatar: mohamedAvatar,
  },
  12: {
    title: 'التعريض الطويل: كيف تصور الحركة والزمن',
    description: 'تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85',
    time: '8 دقائق للقراءة',
    date: '12 ديسمبر 2025',
    name: 'باسم المصري',
    role: 'مصور فني',
    avatar: ibrahimAvatar,
  },
  18: {
    title: 'أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة',
    description: 'افهم كيفية استخدام الفلاش الخارجي لإنشاء إضاءة احترافية في أي موقف.',
    image: flashCameraImage,
    time: '8 دقائق للقراءة',
    date: '25 نوفمبر 2025',
    name: 'ماجد القحطاني',
    role: 'مصور استوديو',
    avatar: mohamedAvatar,
  },
}

const nonLightingCategories = ['بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات']

const resolvedBlogPosts = blogPosts.map((post, index) => {
  const lightingArticle = lightingArticleOverrides[index]

  return {
    ...post,
    category: lightingArticle
      ? lightingCategory
      : post.category === lightingCategory
        ? nonLightingCategories[index % nonLightingCategories.length]
        : post.category,
    ...lightingArticle,
  }
})

const portraitCategory = 'بورتريه'

const portraitArticleOverrides = {
  1: {
    title: 'أسرار تصوير البورتريه: كيف تلتقط روح الشخصية',
    description: 'اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
    time: '6 دقائق للقراءة',
    date: '12 يناير 2026',
    name: 'محمد علي',
    role: 'مصور بورتريه',
    avatar: mohamedAvatar,
  },
  5: {
    title: 'تصوير الشارع: فن التقاط الحياة اليومية',
    description: 'اكتشف أسرار تصوير الشارع وكيفية توثيق اللحظات العفوية في الحياة اليومية.',
    image: streetImage,
    time: '7 دقائق للقراءة',
    date: '28 ديسمبر 2025',
    name: 'نادر سعيد',
    role: 'مصور شوارع',
    avatar: naderAvatar,
  },
  11: {
    title: 'تصوير حفلات الزفاف: دليل المصور المحترف',
    description: 'تعلم أساسيات تصوير حفلات الزفاف من التحضير إلى تسليم الصور النهائية.',
    image: weddingImage,
    time: '11 دقائق للقراءة',
    date: '10 ديسمبر 2025',
    name: 'منصور الزهراني',
    role: 'مصور زفاف',
    avatar: mansourAvatar,
  },
  16: {
    title: 'تصوير الرياضة والحركة: تجميد اللحظة الحاسمة',
    description: 'تعلم تقنيات تصوير الأحداث الرياضية والحركة السريعة بوضوح ودقة احترافية.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85',
    time: '10 دقائق للقراءة',
    date: '28 نوفمبر 2025',
    name: 'أحمد الشهري',
    role: 'مصور رياضي',
    avatar: ahmedAvatar,
  },
  20: {
    title: 'تصوير المواليد: فن التقاط البراءة',
    description: 'تعلم تقنيات تصوير الأطفال حديثي الولادة بأمان واحترافية.',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=85',
    time: '10 دقائق للقراءة',
    date: '15 نوفمبر 2025',
    name: 'نايف المطيري',
    role: 'مصور مواليد',
    avatar: naifAvatar,
  },
  26: {
    title: 'تصوير البورتريه الذاتي: كن موضوعك الخاص',
    description: 'تعلم كيف تصور نفسك بشكل احترافي وإبداعي دون الحاجة لمساعد.',
    image: selfPortraitImage,
    time: '7 دقائق للقراءة',
    date: '5 نوفمبر 2025',
    name: 'سلطان الراجحي',
    role: 'فنان تصوير',
    avatar: sultanAvatar,
  },
}

const finalBlogPosts = resolvedBlogPosts.map((post, index) => {
  const portraitArticle = portraitArticleOverrides[index]

  return {
    ...post,
    category: portraitArticle
      ? portraitCategory
      : post.category === portraitCategory
        ? nonLightingCategories[(index + 1) % nonLightingCategories.length] === portraitCategory
          ? 'تقنيات'
          : nonLightingCategories[(index + 1) % nonLightingCategories.length]
        : post.category,
    ...portraitArticle,
  }
})

const landscapeCategory = 'مناظر طبيعية'

const landscapeArticleOverrides = {
  2: {
    title: 'دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف',
    description: 'استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.',
    image: landscapeImage,
    time: '10 دقائق للقراءة',
    date: '10 يناير 2026',
    name: 'إبراهيم حسن',
    role: 'مصور طبيعة',
    avatar: ibrahimAvatar,
  },
  7: {
    title: 'تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة',
    description: 'دليل شامل لتصوير الحيوانات في بيئتها الطبيعية مع نصائح للمعدات والتقنيات.',
    image: wildlifeImage,
    time: '10 دقائق للقراءة',
    date: '22 ديسمبر 2025',
    name: 'عمر الراشد',
    role: 'مصور حياة برية',
    avatar: omarAvatar,
  },
  17: {
    title: 'تصوير العمارة: كيف تلتقط روح المباني',
    description: 'اكتشف تقنيات تصوير المباني والهندسة المعمارية بطريقة فنية تبرز جمالها وتفاصيلها.',
    image: architectureImage,
    time: '9 دقائق للقراءة',
    date: '6 ديسمبر 2025',
    name: 'طارق التميمي',
    role: 'مصور معماري',
    avatar: tariqAvatar,
  },
  22: {
    title: 'تصوير السفر: كيف توثق رحلتك بصور لا تُنسى',
    description: 'نصائح عملية لتصوير السفر تساعدك على التقاط جوهر كل مكان تزوره.',
    image: travelImage,
    time: '9 دقائق للقراءة',
    date: '22 نوفمبر 2025',
    name: 'ياسر العتيبي',
    role: 'مصور رحالة',
    avatar: yasserAvatar,
  },
}

const completeBlogPosts = finalBlogPosts.map((post, index) => {
  const landscapeArticle = landscapeArticleOverrides[index]

  return {
    ...post,
    category: landscapeArticle
      ? landscapeCategory
      : post.category === landscapeCategory
        ? 'معدات'
        : post.category,
    ...landscapeArticle,
  }
})

const techniquesCategory = 'تقنيات'

const techniquesArticleOverrides = {
  3: {
    title: 'أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي',
    description: 'افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85',
    time: '7 دقائق للقراءة',
    date: '8 يناير 2026',
    name: 'داود خالد',
    role: 'مدرب تصوير',
    avatar: dawoodAvatar,
  },
  4: {
    title: 'قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية',
    description: 'تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.',
    image: compositionImage,
    time: '9 دقائق للقراءة',
    date: '5 يناير 2026',
    name: 'ليث محمود',
    role: 'فنان بصري',
    avatar: laithAvatar,
  },
  8: {
    title: 'تصوير الطعام: كيف تجعل أطباقك تبدو شهية',
    description: 'تعلم تقنيات تصوير الطعام الاحترافية لإنشاء صور تثير الشهية وتجذب العيون.',
    image: foodImage,
    time: '8 دقائق للقراءة',
    date: '25 ديسمبر 2025',
    name: 'هاني الشمري',
    role: 'مصور طعام',
    avatar: haniAvatar,
  },
  9: {
    title: 'التصوير بالأبيض والأسود: فن الضوء والظل',
    description: 'اكتشف جمال التصوير أحادي اللون وكيفية إنشاء صور قوية بدون ألوان.',
    image: blackWhiteImage,
    time: '9 دقائق للقراءة',
    date: '20 ديسمبر 2025',
    name: 'فارس العلي',
    role: 'فنان فوتوغرافي',
    avatar: faresAvatar,
  },
  10: {
    title: 'عالم التصوير الماكرو: اكتشف التفاصيل الخفية',
    description: 'انغمس في عالم التصوير المقرب واكتشف جمال التفاصيل الصغيرة التي تفوتنا بالعين المجردة.',
    image: macroImage,
    time: '10 دقائق للقراءة',
    date: '15 ديسمبر 2025',
    name: 'رامي الخطيب',
    role: 'مصور ماكرو',
    avatar: ramiAvatar,
  },
  13: {
    title: 'تصوير المنتجات: أساسيات التصوير التجاري',
    description: 'تعلم كيفية تصوير المنتجات بشكل احترافي لمتجرك الإلكتروني أو لعملائك التجاريين.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85',
    time: '8 دقائق للقراءة',
    date: '5 ديسمبر 2025',
    name: 'لؤي الصالح',
    role: 'مصور تجاري',
    avatar: loayAvatar,
  },
  14: {
    title: 'نظرية الألوان في التصوير: كيف تستخدم الألوان بذكاء',
    description: 'افهم كيف تؤثر الألوان على مشاعر المشاهد وكيف تستخدمها لتعزيز صورك.',
    image: colorsImage,
    time: '7 دقائق للقراءة',
    date: '18 نوفمبر 2025',
    name: 'رهام الحسيني',
    role: 'فنان بصري',
    avatar: rihamAvatar,
  },
  15: {
    title: 'تصوير العقارات: كيف تجعل المنزل يبيع نفسه',
    description: 'تعلم تقنيات تصوير العقارات التي تجعل المنازل تبدو أفضل ما يمكن.',
    image: realEstateImage,
    time: '8 دقائق للقراءة',
    date: '12 نوفمبر 2025',
    name: 'عبدالله الغامدي',
    role: 'مصور عقارات',
    avatar: abdullahAvatar,
  },
  19: {
    title: 'التصوير البسيط (Minimalist): قوة الفراغ',
    description: 'اكتشف جمال البساطة في التصوير وكيف تخلق صوراً قوية بعناصر قليلة.',
    image: minimalistImage,
    time: '6 دقائق للقراءة',
    date: '28 أكتوبر 2025',
    name: 'راشد الجاسر',
    role: 'فنان بصري',
    avatar: rashedAvatar,
  },
}

const publishedBlogPosts = completeBlogPosts.map((post, index) => {
  const techniquesArticle = techniquesArticleOverrides[index]

  return {
    ...post,
    category: techniquesArticle
      ? techniquesCategory
      : post.category === techniquesCategory
        ? 'معدات'
        : post.category,
    ...techniquesArticle,
  }
})

const equipmentCategory = 'معدات'

const equipmentArticleOverrides = {
  21: {
    title: 'تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك',
    description: 'اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85',
    time: '8 دقائق للقراءة',
    date: '3 يناير 2026',
    name: 'جمال عبدالله',
    role: 'مصور ومراجع تقني',
    avatar: jamalAvatar,
  },
  23: {
    title: 'أساسيات تعديل الصور في Lightroom',
    description: 'تعلم كيفية استخدام Adobe Lightroom لتحسين صورك وإنشاء أسلوب بصري مميز.',
    image: lightroomImage,
    time: '12 دقائق للقراءة',
    date: '18 ديسمبر 2025',
    name: 'سامي الحربي',
    role: 'خبير تعديل صور',
    avatar: samiAvatar,
  },
  24: {
    title: 'التصوير بالدرون: منظور جديد للعالم',
    description: 'اكتشف عالم التصوير الجوي وتعلم أساسيات استخدام الدرون لالتقاط صور من زوايا فريدة.',
    image: droneImage,
    time: '9 دقائق للقراءة',
    date: '8 ديسمبر 2025',
    name: 'فيصل الدوسري',
    role: 'مصور جوي',
    avatar: faisalAvatar,
  },
  25: {
    title: 'RAW مقابل JPEG: متى تستخدم كلاً منهما',
    description: 'افهم الفرق بين صيغتي الصور الأكثر شيوعاً واختر الأنسب لاحتياجاتك.',
    image: rawJpegImage,
    time: '6 دقائق للقراءة',
    date: '8 نوفمبر 2025',
    name: 'كريم الفهد',
    role: 'خبير تقني',
    avatar: karimAvatar,
  },
  27: {
    title: 'دليل العدسات للمبتدئين: كيف تختار عدستك الأولى',
    description: 'افهم أنواع العدسات المختلفة واختر الأنسب لأسلوب تصويرك واحتياجاتك.',
    image: lensImage,
    time: '9 دقائق للقراءة',
    date: '2 نوفمبر 2025',
    name: 'فهد السبيعي',
    role: 'مراجع معدات',
    avatar: fahadAvatar,
  },
}

const allBlogPosts = publishedBlogPosts.map((post, index) => ({
  ...post,
  category: equipmentArticleOverrides[index] ? equipmentCategory : post.category,
  ...equipmentArticleOverrides[index],
}))

const chronologicalPostOrder = [
  0, 1, 2, 3, 4, 21,
  6, 5, 8, 7, 9, 23,
  10, 12, 11, 24, 17, 13,
  16, 18, 22, 14, 20, 15,
  25, 26, 27, 19,
]

const orderedBlogPosts = chronologicalPostOrder.map((index) => allBlogPosts[index])

function GridIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
}

function ListIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg>
}

function BlogCard({ post, onNavigate }) {
  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
        <span>{post.category}</span>
      </div>
      <div className="blog-card-content">
        <div className="blog-card-meta"><span><ClockIcon />{post.time}</span><i>•</i><span>{post.date}</span></div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div className="blog-card-footer">
          <div className="blog-card-author">
            <img src={post.avatar} alt={post.name} />
            <div><strong>{post.name}</strong><small>{post.role}</small></div>
          </div>
          <a href={`/blog/${post.id}`} onClick={(event) => onNavigate?.(event, `/blog/${post.id}`)} aria-label={`اقرأ ${post.title}`}>
            <span>اقرأ المقال</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </article>
  )
}

function BlogPage({ onNavigate }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('جميع المقالات')
  const [view, setView] = useState('grid')
  const [page, setPage] = useState(1)

  const filteredPosts = useMemo(() => orderedBlogPosts.filter((post) => {
    const matchesCategory = category === 'جميع المقالات' || post.category === category
    const searchText = `${post.title} ${post.description} ${post.name}`.toLowerCase()
    return matchesCategory && searchText.includes(query.trim().toLowerCase())
  }), [category, query])

  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / 6))
  const currentPage = Math.min(page, pageCount)
  const visiblePosts = filteredPosts.slice((currentPage - 1) * 6, currentPage * 6)

  function chooseCategory(name) {
    setCategory(name)
    setPage(1)
  }

  function search(event) {
    setQuery(event.target.value)
    setPage(1)
  }

  function goToPage(nextPage) {
    if (nextPage < 1 || nextPage > pageCount) return
    setPage(nextPage)
    document.querySelector('.blog-toolbar')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-glow" />
        <div className="blog-hero-content">
          <div className="blog-kicker"><span className="small-dot" /><span className="large-dot" />▣ &nbsp; مدونتنا</div>
          <h1>استكشف <span>مقالاتنا</span></h1>
          <p>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>
      </section>

      <section className="blog-controls">
        <label className="blog-search">
          <SearchIcon />
          <input value={query} onChange={search} type="search" placeholder="ابحث في المقالات..." />
        </label>
        <div className="blog-filters">
          {['جميع المقالات', ...categoryNames].map((name) => (
            <button className={category === name ? 'active' : ''} type="button" key={name} onClick={() => chooseCategory(name)}>{name}</button>
          ))}
        </div>
      </section>

      <section className="blog-listing">
        <div className="blog-toolbar">
          <p>عرض <strong>{filteredPosts.length}</strong> مقالات {category !== 'جميع المقالات' && <>في <em>{category}</em></>}</p>
          <div className="blog-toolbar-actions">
            {category !== 'جميع المقالات' && (
              <button className="clear-filter" type="button" onClick={() => chooseCategory('جميع المقالات')}>× &nbsp; مسح الفلتر</button>
            )}
            <div className="view-switcher" aria-label="طريقة عرض المقالات">
              <button className={view === 'list' ? 'active' : ''} type="button" onClick={() => setView('list')} aria-label="عرض قائمة"><ListIcon /></button>
              <button className={view === 'grid' ? 'active' : ''} type="button" onClick={() => setView('grid')} aria-label="عرض شبكي"><GridIcon /></button>
            </div>
          </div>
        </div>

        {visiblePosts.length ? (
          <div className={`blog-posts ${view}`}>
            {visiblePosts.map((post) => <BlogCard post={post} onNavigate={onNavigate} key={post.id} />)}
          </div>
        ) : (
          <div className="blog-empty">لا توجد مقالات مطابقة لبحثك.</div>
        )}

        {pageCount > 1 && <div className="pagination">
          <button type="button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>›</button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
            <button className={currentPage === number ? 'active' : ''} type="button" key={number} onClick={() => goToPage(number)}>{number}</button>
          ))}
          <button type="button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === pageCount}>‹</button>
          <span>صفحة {currentPage} من {pageCount}</span>
        </div>}
      </section>
    </main>
  )
}

function DetailIcon({ type }) {
  const icons = {
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    camera: <><path d="M4 7h4l2-3h4l2 3h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" /><circle cx="12" cy="13" r="4" /></>,
    list: <><path d="M9 6h11M9 12h11M9 18h11" /><circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" /></>,
    tag: <><path d="M20 13 12 21 3 12V3h9l8 8a1.4 1.4 0 0 1 0 2Z" /><circle cx="8" cy="8" r="1.5" /></>,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" /></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="m4 18 5-5 4 4 3-3 4 4" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>
}

function ShareSocialIcon({ type }) {
  const icons = {
    link: <><path d="M10.6 13.4a4.5 4.5 0 0 0 6.4.1l2-2a4.5 4.5 0 0 0-6.4-6.4l-1.1 1.1" /><path d="M13.4 10.6a4.5 4.5 0 0 0-6.4-.1l-2 2a4.5 4.5 0 0 0 6.4 6.4l1.1-1.1" /></>,
    whatsapp: <><path d="M20 11.6a8 8 0 0 1-11.9 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" /><path d="M8.7 8.1c.2-.4.4-.4.7-.4h.4c.1 0 .3 0 .4.4l.7 1.7c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.2.6 0l.8-.9c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.3-.8 1.8-.6.5-1.4.7-2.3.4-1.1-.3-2.5-1-4-2.4-1.2-1.1-2-2.5-2.3-3.5-.3-.9 0-1.8.4-2.2Z" /></>,
    linkedin: <><path d="M5.3 8.4H2.2V21h3.1V8.4ZM3.8 3A1.8 1.8 0 1 0 3.8 6.6 1.8 1.8 0 0 0 3.8 3ZM21.8 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2V8.4h-3.1V21h3.1v-6.2c0-1.6.3-3.2 2.4-3.2 2 0 2.1 1.9 2.1 3.3V21h3.1l.8-7.2Z" fill="currentColor" stroke="none" /></>,
    x: <path d="M3.4 3h4.8l4.6 6.1L18.2 3h2.2l-6.6 7.7L21 21h-4.8l-5-6.7L5.5 21H3.3l6.9-8.3L3.4 3Zm3.7 1.7 10 14.6h1.8L8.9 4.7H7.1Z" fill="currentColor" stroke="none" />,
  }

  return <svg className={`share-social-icon share-social-icon-${type}`} viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>
}

const goldenHourSections = [
  {
    id: 'why-golden-hour',
    title: 'لماذا الساعة الذهبية؟',
    text: 'الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.',
  },
  {
    id: 'preparation',
    title: 'التحضير المسبق',
    text: 'خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك، وصل قبل 30 دقيقة لاختيار أفضل زاوية.',
  },
  {
    id: 'camera-settings',
    title: 'إعدادات الكاميرا',
    text: 'استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8–f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8–f/11 للمناظر الطبيعية الحادة.',
  },
  {
    id: 'composition',
    title: 'التكوين الفني',
    text: 'ضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر، أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.',
  },
  {
    id: 'summary',
    title: 'الخلاصة',
    text: 'الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تنسى تتميز بجمالها الطبيعي.',
  },
]

const portraitSections = [
  {
    id: 'connect-with-subject',
    title: 'التواصل مع الموضوع',
    text: 'قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.',
  },
  {
    id: 'choose-the-right-lens',
    title: 'اختيار العدسة المناسبة',
    text: 'عدسات 85mm و50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.',
  },
  {
    id: 'natural-light',
    title: 'الإضاءة الطبيعية',
    text: 'النافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.',
  },
  {
    id: 'focus-on-eyes',
    title: 'التركيز على العيون',
    text: 'العيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.',
  },
  {
    id: 'background-composition',
    title: 'الخلفية والتكوين',
    text: 'اختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.',
  },
  {
    id: 'portrait-summary',
    title: 'الخلاصة',
    text: 'البورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.',
  },
]

const landscapeSections = [
  {
    id: 'essential-landscape-gear',
    title: 'المعدات الأساسية',
    text: 'حامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.',
  },
  {
    id: 'best-shooting-time',
    title: 'توقيت التصوير',
    text: 'الساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي، فالغيوم والعواصف تضيف شخصية للصورة.',
  },
  {
    id: 'landscape-composition',
    title: 'التكوين الفني',
    text: 'ابحث عن عناصر المقدمة المثيرة للاهتمام، صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.',
  },
  {
    id: 'landscape-camera-settings',
    title: 'إعدادات الكاميرا',
    text: 'فتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.',
  },
  {
    id: 'landscape-post-processing',
    title: 'المعالجة اللاحقة',
    text: 'صور بصيغة RAW لأقصى مرونة في التعديل. عدّل الإضاءة والألوان بلطف ليبرز جمال المشهد دون إفراط.',
  },
  {
    id: 'landscape-summary',
    title: 'الخلاصة',
    text: 'تصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.',
  },
]

const exposureTriangleSections = [
  {
    id: 'camera-aperture',
    title: 'فتحة العدسة (Aperture)',
    text: 'فتحة العدسة تتحكم في كمية الضوء وعمق الميدان. الأرقام الصغيرة (f/1.4, f/2.8) تعني فتحة أكبر وضوءاً أكثر وخلفية ضبابية. الأرقام الكبيرة (f/11, f/16) تعني حدة أكبر في كل الصورة.',
  },
  {
    id: 'camera-shutter-speed',
    title: 'سرعة الغالق (Shutter Speed)',
    text: 'سرعة الغالق تتحكم في تجميد الحركة. 1/500 ثانية تجمد الرياضيين، و1/60 مناسبة للمواضيع الثابتة. أما السرعات البطيئة فتخلق تأثيرات ضبابية إبداعية.',
  },
  {
    id: 'camera-iso',
    title: 'حساسية ISO',
    text: 'ISO هو حساسية المستشعر للضوء. ISO 100-400 مناسب للإضاءة الجيدة، وأعلى من ذلك للإضاءة المنخفضة. كلما زاد ISO، زادت الضوضاء في الصورة.',
  },
  {
    id: 'exposure-balance',
    title: 'التوازن بين الثلاثة',
    text: 'هذه العناصر مترابطة. إذا زدت واحداً، يجب تعديل الآخرين للحفاظ على التعريض الصحيح. تدرب على الوضع اليدوي حتى تصبح هذه العلاقة طبيعية.',
  },
  {
    id: 'exposure-practical-tips',
    title: 'نصائح عملية',
    text: 'ابدأ بوضع أولوية فتحة العدسة (Av/A) للتحكم في عمق الميدان، أو أولوية الغالق (Tv/S) للتحكم في الحركة.',
  },
  {
    id: 'exposure-summary',
    title: 'الخلاصة',
    text: 'إتقان مثلث التعريض يفتح لك عالماً من الإبداع. تدرب يومياً وستصبح هذه الإعدادات طبيعة ثانية.',
  },
]

const articleContentById = {
  1: {
    intro: 'الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.',
    sections: goldenHourSections,
    tags: ['إضاءة', 'الساعة الذهبية', 'تصوير خارجي'],
  },
  2: {
    intro: 'تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.',
    sections: portraitSections,
    tags: ['بورتريه', 'تصوير أشخاص', 'إضاءة طبيعية'],
  },
  3: {
    intro: 'تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.',
    sections: landscapeSections,
    tags: ['مناظر طبيعية', 'تصوير خارجي', 'طبيعة'],
  },
  4: {
    intro: 'مثلث التعريض الضوئي هو أساس كل صورة ناجحة. فهم هذه العناصر الثلاثة يحررك من الوضع التلقائي ويمنحك السيطرة الإبداعية الكاملة.',
    sections: exposureTriangleSections,
    tags: ['إعدادات الكاميرا', 'مبتدئين', 'تقنيات'],
  },
}

function RelatedArticleCard({ post, onNavigate }) {
  const cardImage = post.title === 'أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة'
    ? flashCameraImage
    : post.image

  return (
    <a className="detail-related-card" href={`/blog/${post.id}`} onClick={(event) => onNavigate(event, `/blog/${post.id}`)}>
      <div><img src={cardImage} alt={post.title} /><span>{post.category}</span></div>
      <h3>{post.title}</h3>
      <footer><span><img src={post.avatar} alt="" />{post.name}</span><small>{post.time}</small></footer>
    </a>
  )
}

function BlogDetailsPage({ postId, onNavigate }) {
  const currentPost = allBlogPosts.find((item) => item.id === Number(postId)) || orderedBlogPosts[0]
  const articleContent = articleContentById[currentPost.id] || {
    intro: currentPost.description,
    sections: [
      { id: 'article-introduction', title: 'مقدمة المقال', text: currentPost.description },
      { id: 'practical-tips', title: 'نصائح عملية', text: 'سنضيف محتوى هذا المقال بالتفصيل في الخطوة التالية.' },
      { id: 'article-summary', title: 'الخلاصة', text: 'طبّق ما تعلمته وجرّب أكثر من إعداد حتى تصل إلى أسلوبك الخاص.' },
    ],
    tags: [currentPost.category, 'تصوير فوتوغرافي'],
  }
  const relatedPosts = orderedBlogPosts
    .filter((item) => item.id !== currentPost.id && item.category === currentPost.category)
    .slice(0, 3)

  return (
    <main className="blog-detail-page">
      <section className="detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(4,8,12,.95), rgba(7,7,7,.2) 55%, rgba(20,8,2,.12)), url(${currentPost.image})` }}>
        <div className="detail-hero-inner">
          <nav className="detail-breadcrumb" aria-label="مسار الصفحة">
            <a href="/" onClick={(event) => onNavigate(event, '/')}><DetailIcon type="home" /></a>
            <span>‹</span><a href="/blog" onClick={(event) => onNavigate(event, '/blog')}>المدونة</a><span>‹</span><strong>{currentPost.category}</strong>
          </nav>
          <div className="detail-hero-copy">
            <div className="detail-meta"><b>{currentPost.category}</b><span><DetailIcon type="calendar" />{currentPost.date}</span><span><DetailIcon type="clock" />{currentPost.time}</span></div>
            <h1>{currentPost.title}</h1>
            <div className="detail-author-chip"><img src={currentPost.avatar} alt={currentPost.name} /><div><strong>{currentPost.name}</strong><span>{currentPost.role}</span></div></div>
          </div>
        </div>
      </section>

      <section className="detail-shell">
        <aside className="detail-sidebar">
          <div className="detail-toc detail-panel">
            <h2><span><DetailIcon type="list" /></span>محتويات المقال</h2>
            <ol>{articleContent.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}><b>{index + 1}</b>{section.title}</a></li>)}</ol>
          </div>
          <div className="detail-facts detail-panel">
            <article><DetailIcon type="clock" /><strong>{currentPost.time}</strong><span>وقت القراءة</span></article>
            <article><DetailIcon type="calendar" /><strong>{currentPost.date.replace(' 2026', '')}</strong><span>تاريخ النشر</span></article>
          </div>
          <div className="detail-subscribe">
            <span>✉</span><h3>لا تفوت جديدنا</h3><p>اشترك للحصول على أحدث المقالات</p><a href="/blog" onClick={(event) => onNavigate(event, '/blog')}>تصفح المزيد</a>
          </div>
        </aside>

        <article className="detail-article">
          <blockquote>“{currentPost.description}”</blockquote>
          <p className="detail-intro">{articleContent.intro}</p>
          {articleContent.sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2><span><DetailIcon type="camera" /></span>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}

          <div className="detail-tags detail-box"><h3><span><DetailIcon type="tag" /></span>الوسوم</h3><div>{articleContent.tags.map((tag) => <a href="#tag" key={tag}>#{tag}</a>)}</div></div>
          <div className="detail-share detail-box"><h3><span><DetailIcon type="share" /></span>شارك المقال</h3><div><a href="#copy" aria-label="نسخ رابط المقال" title="نسخ الرابط"><ShareSocialIcon type="link" /></a><a href="#whatsapp" aria-label="مشاركة عبر واتساب" title="واتساب"><ShareSocialIcon type="whatsapp" /></a><a href="#linkedin" aria-label="مشاركة عبر لينكد إن" title="لينكد إن"><ShareSocialIcon type="linkedin" /></a><a href="#x" aria-label="مشاركة عبر إكس" title="إكس"><ShareSocialIcon type="x" /></a></div></div>
          <div className="detail-author-box"><img src={currentPost.avatar} alt={currentPost.name} /><div><b>كاتب المقال</b><h3>{currentPost.name}</h3><span>{currentPost.role}</span><p>مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p></div></div>
        </article>
      </section>

      <section className="detail-related">
        <header><div><span><DetailIcon type="image" /></span><div><h2>مقالات قد تعجبك</h2><p>استكشف المزيد من المحتوى المميز</p></div></div><a href="/blog" onClick={(event) => onNavigate(event, '/blog')}>عرض الكل ←</a></header>
        <div>{relatedPosts.map((item) => <RelatedArticleCard post={item} onNavigate={onNavigate} key={item.id} />)}</div>
      </section>
    </main>
  )
}

function AboutIcon({ type }) {
  const paths = {
    book: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 4H12v16H7.5A3.5 3.5 0 0 0 4 21.5Z" /><path d="M20 5.5A3.5 3.5 0 0 0 16.5 4H12v16h4.5a3.5 3.5 0 0 1 3.5 1.5Z" /></>,
    pen: <><path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10Z" /><path d="m14 7 3 3M4 20l1-4 3 3" /></>,
    article: <><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
    people: <><circle cx="12" cy="8" r="3" /><circle cx="5" cy="10" r="2" /><circle cx="19" cy="10" r="2" /><path d="M7 20v-2a5 5 0 0 1 10 0v2M2 20v-1a4 4 0 0 1 4-4M22 20v-1a4 4 0 0 0-4-4" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7Z" />,
    community: <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90-.3.4c-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7l.4-.2 79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4ZM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96Zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16ZM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384Zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16Zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1Z" />,
    refresh: <path d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749ZM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24Z" />,
  }

  const viewBoxes = {
    community: '0 -64 640 640',
    refresh: '0 0 512 512',
  }

  return <svg className={`about-icon about-icon-${type}`} viewBox={viewBoxes[type] || '0 0 24 24'} aria-hidden="true">{paths[type]}</svg>
}

const teamOrder = [
  'سالم أحمد', 'محمد علي', 'إبراهيم حسن',
  'داود خالد', 'ليث محمود', 'جمال عبدالله',
  'خالد الفيصل', 'نادر سعيد', 'هاني الشمري',
  'عمر الراشد', 'فارس العلي', 'سامي الحربي',
  'رامي الخطيب', 'باسم المصري', 'منصور الزهراني',
  'فيصل الدوسري', 'لؤي الصالح', 'طارق التميمي',
  'أحمد الشهري', 'ماجد القحطاني', 'ياسر العتيبي',
  'رهام الحسيني', 'نايف المطيري', 'عبدالله الغامدي',
  'كريم الفهد', 'سلطان الراجحي', 'فهد السبيعي',
  'راشد الجاسر',
]

const teamMembers = teamOrder
  .map((name) => allBlogPosts.find((post) => post.name === name))
  .filter(Boolean)

function AboutPage({ onNavigate }) {
  const stats = [
    { icon: 'people', number: '+2 مليون', label: 'قارئ شهرياً' },
    { icon: 'article', number: '+500', label: 'مقالة منشورة' },
    { icon: 'pen', number: '+50', label: 'كاتب خبير' },
    { icon: 'book', number: '+15', label: 'تصنيف' },
  ]

  const values = [
    { icon: 'target', title: 'الجودة أولاً', text: 'محتوى مدروس ومكتوب بخبرة' },
    { icon: 'bolt', title: 'تركيز عملي', text: 'أمثلة واقعية يمكنك تطبيقها اليوم' },
    { icon: 'community', title: 'المجتمع', text: 'نتعلم مع آلاف المصورين' },
    { icon: 'refresh', title: 'دائماً محدث', text: 'أحدث الاتجاهات وأفضل الممارسات' },
  ]

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-kicker"><span /> من نحن</div>
          <h1>مهمتنا هي <em>الإعلام والإلهام</em></h1>
          <p>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية<br /> لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من<br /> خلال محتوى عالي الجودة.</p>
          <div className="about-stats">
            {stats.map((stat) => <article key={stat.label}><AboutIcon type={stat.icon} /><strong>{stat.number}</strong><span>{stat.label}</span></article>)}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-heading"><h2>قيمنا</h2><p>المبادئ التي توجه كل ما نقوم بإنشائه</p></div>
        <div className="values-grid">
          {values.map((value) => <article key={value.title}><AboutIcon type={value.icon} /><h3>{value.title}</h3><p>{value.text}</p></article>)}
        </div>
      </section>

      <section className="about-team">
        <div className="about-heading">
          <div className="about-kicker"><span /> فريقنا</div>
          <h2>تعرف على كتابنا</h2>
          <p>فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-avatar"><img src={member.avatar} alt={member.name} /><span>✓</span></div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="team-socials"><a href="#linkedin">in</a><a href="#github">◉</a><a href="#x">𝕏</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>لديك أسئلة؟ دعنا نتحدث!</h2>
        <p>نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء<br /> التحية، لا تتردد في التواصل.</p>
        <div><a className="contact-button" href="mailto:hello@adasa.com">✉ &nbsp; تواصل معنا</a><a className="browse-button" href="/blog" onClick={(event) => onNavigate(event, '/blog')}>تصفح المقالات</a></div>
      </section>
    </main>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const detailMatch = currentPath.match(/^\/blog\/(\d+)\/?$/)

  useEffect(() => {
    const syncPath = () => setCurrentPath(window.location.pathname)
    window.addEventListener('popstate', syncPath)
    return () => window.removeEventListener('popstate', syncPath)
  }, [])

  function navigate(event, path) {
    event.preventDefault()
    if (window.location.pathname !== path) window.history.pushState({}, '', path)
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app" dir="rtl">
      <Header currentPath={currentPath} onNavigate={navigate} />
      {detailMatch ? (
        <BlogDetailsPage postId={detailMatch[1]} onNavigate={navigate} />
      ) : currentPath === '/blog' ? (
        <BlogPage onNavigate={navigate} />
      ) : currentPath === '/about' ? (
        <AboutPage onNavigate={navigate} />
      ) : (
        <>
          <Hero />
          <FeaturedArticles onNavigate={navigate} />
          <Categories />
          <LatestArticles />
          <Newsletter />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
