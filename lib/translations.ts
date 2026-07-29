export type Locale = 'tr' | 'en' | 'ar';

export const locales: Locale[] = ['tr', 'en', 'ar'];

export const localeLabels: Record<Locale, string> = {
  tr: 'TR',
  en: 'EN',
  ar: 'AR',
};

export interface Translations {
  nav: {
    about: string;
    price: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    tagline: string;
    contact: string;
  };
  about: {
    heading: string;
    paragraph: string;
    contact: string;
  };
  services: {
    heading: string;
    items: {
      number: string;
      name: string;
      description: string;
    }[];
  };
  projects: {
    heading: string;
    live: string;
    category: {
      client: string;
      personal: string;
    };
  };
  tools: {
    heading: string;
  };
  contactPage: {
    heading: string;
    subtitle: string;
    emailLabel: string;
    backHome: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      about: 'About',
      price: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Hi, i’m kıvanç',
      tagline:
        'a web developer driven by crafting striking and unforgettable projects',
      contact: 'Contact Me',
    },
    about: {
      heading: 'About me',
      paragraph:
        "With more than two years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!",
      contact: 'Contact Me',
    },
    services: {
      heading: 'Services',
      items: [
        {
          number: '01',
          name: 'Process Optimization',
          description:
            'I analyze data to evaluate processes, identify issues, and develop solutions that improve efficiency.',
        },
        {
          number: '02',
          name: 'PROJECT MANAGEMENT',
          description:
            'I plan project processes, coordinate teams, and build efficient workflows.',
        },
        {
          number: '03',
          name: 'Performance Optimization',
          description:
            'I optimize website speed, performance, and user experience to deliver fast and efficient web solutions.',
        },
        {
          number: '04',
          name: 'WEB DEVELOPMENT',
          description:
            'I develop responsive, user-friendly, and high-performance websites using modern web technologies.',
        },
      ],
    },
    projects: {
      heading: 'PROJECTS',
      live: 'Live Project',
      category: {
        client: 'Client',
        personal: 'Personal',
      },
    },
    tools: {
      heading: 'Tools & Apps I Work With',
    },
    contactPage: {
      heading: "Let's talk",
      subtitle:
        "Have a project in mind or just want to say hi? Drop me a line, i'd love to hear from you.",
      emailLabel: 'Email',
      backHome: 'Back to home',
    },
  },
  tr: {
    nav: {
      about: 'Hakkımda',
      price: 'Hizmetler',
      projects: 'Projeler',
      contact: 'İletişim',
    },
    hero: {
      title: 'Selam, ben kıvanç',
      tagline: 'çarpıcı ve unutulmaz projeler üreten bir web geliştiricisi',
      contact: 'İletişime Geç',
    },
    about: {
      heading: 'Hakkımda',
      paragraph:
        'Tasarım alanında iki yılı aşkın deneyimimle marka kimliği, web tasarımı ve kullanıcı deneyimine odaklanıyorum. Öne çıkmak ve en iyi imajını sunmak isteyen işletmelerle çalışmaktan gerçekten keyif alıyorum. Hadi birlikte inanılmaz bir şey inşa edelim!',
      contact: 'İletişime Geç',
    },
    services: {
      heading: 'Hizmetler',
      items: [
        {
          number: '01',
          name: 'Süreç Optimizasyonu',
          description:
            'Verileri analiz ederek süreçleri değerlendiriyor, sorunları tespit ediyor ve verimliliği artıracak çözümler geliştiriyorum.',
        },
        {
          number: '02',
          name: 'PROJE YÖNETİMİ',
          description:
            'Proje süreçlerini planlıyor, ekip koordinasyonunu sağlıyor ve verimli iş akışları oluşturuyorum.',
        },
        {
          number: '03',
          name: 'Performans Optimizasyonu',
          description:
            'Web sitelerinin hızını, performansını ve kullanıcı deneyimini optimize ederek daha verimli çözümler sunuyorum.',
        },
        {
          number: '04',
          name: 'WEB GELİŞTİRME',
          description:
            'Modern teknolojiler kullanarak performans odaklı, responsive ve kullanıcı dostu web siteleri geliştiriyorum.',
        },
      ],
    },
    projects: {
      heading: 'PROJELER',
      live: 'Canlı Proje',
      category: {
        client: 'Müşteri',
        personal: 'Kişisel',
      },
    },
    tools: {
      heading: 'Çalıştığım Araçlar ve Uygulamalar',
    },
    contactPage: {
      heading: 'Hadi konuşalım',
      subtitle:
        'Aklında bir proje mi var, yoksa sadece merhaba mı demek istiyorsun? Bana yaz, seni duymak isterim.',
      emailLabel: 'E-posta',
      backHome: 'Ana sayfaya dön',
    },
  },
  ar: {
    nav: {
      about: 'نبذة',
      price: 'الخدمات',
      projects: 'المشاريع',
      contact: 'تواصل',
    },
    hero: {
      title: 'مرحبًا، أنا كيفانتش',
      tagline: 'مطور ويب شغوف بابتكار مشاريع لافتة لا تُنسى',
      contact: 'تواصل معي',
    },
    about: {
      heading: 'نبذة عني',
      paragraph:
        'بخبرة تتجاوز سنتين في التصميم، أركز على الهوية البصرية وتصميم المواقع وتجربة المستخدم، وأستمتع حقًا بالعمل مع الشركات التي تسعى للتميز وتقديم أفضل صورة لها. لنبنِ شيئًا مذهلًا معًا!',
      contact: 'تواصل معي',
    },
    services: {
      heading: 'الخدمات',
      items: [
        {
          number: '01',
          name: 'تحسين العمليات',
          description:
            'أحلل البيانات لتقييم العمليات، وتحديد المشكلات، وتطوير حلول تُحسّن الكفاءة.',
        },
        {
          number: '02',
          name: 'إدارة المشاريع',
          description:
            'أخطط لعمليات المشروع، وأنسّق الفرق، وأبني سير عمل فعّالاً.',
        },
        {
          number: '03',
          name: 'تحسين الأداء',
          description:
            'أعمل على تحسين سرعة المواقع وأدائها وتجربة المستخدم لتقديم حلول ويب سريعة وفعّالة.',
        },
        {
          number: '04',
          name: 'تطوير الويب',
          description:
            'أطوّر مواقع ويب متجاوبة وسهلة الاستخدام وعالية الأداء باستخدام أحدث تقنيات الويب.',
        },
      ],
    },
    projects: {
      heading: 'المشاريع',
      live: 'مشاهدة المشروع',
      category: {
        client: 'عميل',
        personal: 'شخصي',
      },
    },
    tools: {
      heading: 'الأدوات والتطبيقات التي أعمل بها',
    },
    contactPage: {
      heading: 'لنتحدث',
      subtitle:
        'هل لديك مشروع في ذهنك أم تريد فقط أن تقول مرحبًا؟ راسلني، يسعدني أن أسمع منك.',
      emailLabel: 'البريد الإلكتروني',
      backHome: 'العودة للرئيسية',
    },
  },
};
