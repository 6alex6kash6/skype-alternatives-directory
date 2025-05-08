export interface Software {
  title: string;
  url: string;
  custom_redirect: string | null;
  slug: string;
  text: string;
  Category: string;
  Rank: number | null;
  Hide: boolean | null;
  isFree: boolean | null;
  verified: boolean | null;
  premium: boolean | null;
  images: string | null;
  thumbnail: string | null;
  screenshotUrl: string | null;
  fullDescription: string;
  pros: string | null;
  cons: string | null;
}

export const softwareData: Software[] = [
  {
    title: "Viber",
    url: "https://www.viber.com",
    custom_redirect: null,
    slug: "viber",
    text: "Viber offers free and secure calls and messages to anyone, anywhere.",
    Category: "International Calling; Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: null,
    thumbnail:
      "https://www.viber.com/app/themes/viber/assets/images/logov2.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329715193.www-viber.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Viber enables users to make free and secure calls and send messages to anyone, anywhere. The platform allows seamless communication with high-quality voice and video calls, group chats, and various messaging features, ensuring that conversations continue uninterrupted. This service is designed for users looking for a reliable way to keep in touch no matter their location.",
    pros: "Good value call plans|Useful for international calls",
    cons: "Account activation issues|Payment processing problems|Too many advertisements|Poor customer support|Technical issues|Subscription problems|Refund difficulties",
  },
  {
    title: "Yolla",
    url: "https://yollacalls.com",
    custom_redirect: null,
    slug: "yolla",
    text: "Viber offers free and secure calls and messages to anyone, anywhere.",
    Category: "International Calling; Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: null,
    thumbnail: "https://yollacalls.com/assets/favicon/apple-touch-icon.png",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329717602.yollacalls.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Yolla is an application designed for making affordable international calls to any mobile or landline phone worldwide. The app provides rates starting as low as $0.004 per minute. Users can keep their existing phone numbers while making calls, ensuring that those they contact recognize it is them calling.",
    pros: "Low call rates|Easy to use|Good support mentioned by some",
    cons: "Call quality issues|Overcharging complaints|Connection problems|Limited web version functionality",
  },
  {
    title: "AI Phone Translator",
    url: "https://www.aiphone.ai",
    custom_redirect: null,
    slug: "ai-phone-translator",
    text: "AI Phone Translator offers live phone call translation in over 100 languages, eliminating language barriers during calls.",
    Category: "International Calling; Business Communication",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: null,
    thumbnail: "https://www.aiphone.ai/images/logo.png",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329735288.www-aiphon.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "AI Phone Translator provides an AI-powered solution for live phone call translation and transcription across more than 100 languages. It aims to help users overcome language barriers and ensures that critical information is not missed during calls. The application is ideal for various scenarios including daily conversations for immigrants, travel needs, and international communications.",
    pros: null,
    cons: null,
  },
  {
    title: "OpenPhone",
    url: "https://www.openphone.com",
    custom_redirect: null,
    slug: "openphone",
    text: "OpenPhone is a collaborative business phone system that merges calls, texts, and contacts into one platform, designed to enhance communication for teams.",
    Category: "Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: null,
    thumbnail:
      "https://cdn.prod.website-files.com/6384fdd9fd42380b529fc942/6384ff50fe6feee653bfd044_openphone-logo.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329736903.www-openph.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "OpenPhone is a collaborative business phone system that integrates calls, texts, and contacts into a single, intuitive interface. This AI-powered application works seamlessly across devices, ensuring that businesses can communicate effectively at all times. Empowering startups and small businesses, OpenPhone has garnered trust from over 50,000 organizations.",
    pros: "Outstanding support|User-friendly interface|Smooth setup process|Good Skype replacement|Useful feature set",
    cons: "Call quality issues (static)|Account closure complaints|Verification process problems",
  },
  {
    title: "Webex",
    url: "https://www.webex.com",
    custom_redirect: null,
    slug: "webex",
    text: "Webex provides industry-leading video conferencing, calling, and contact center solutions to enhance hybrid work environments.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://www.webex.com/content/dam/www/us/en/images/home/og-webex-home-page.jpg",
    thumbnail:
      "https://www.webex.com/content/dam/www/us/en/logos/Logo_Webex.png",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329747367.www-webex.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Webex is a comprehensive solution that offers industry-leading video conferencing, calling, and contact center capabilities. It is designed to facilitate hybrid work for businesses of all sizes, enabling seamless communication and collaboration. With a focus on enhancing customer and employee experiences, Webex stands out as a leader in the collaboration space.",
    pros: "Good for enterprise webinars|Stable for large audiences",
    cons: "Interface complaints|Camera freeze issues|Technical problems|Difficult to use|Poor user experience|Cancellation difficulties|Customer service issues|Device compatibility problems",
  },
  {
    title: "GoTo Connect",
    url: "https://www.goto.com/connect",
    custom_redirect: null,
    slug: "goto-connect",
    text: "GoTo Connect is a market-leading cloud phone system and customer engagement software designed to modernize and centralize business communications.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://www.goto.com/-/media/images/shared/global/open-graph/og1.jpg",
    thumbnail:
      "https://www.goto.com/-/media/images/shared/logos/goto/goat-favicon.ico",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329755050.www-goto-c.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "GoTo Connect is the market-leading cloud phone system and customer engagement software that modernizes and centralizes conversations for businesses. This all-in-one communication platform integrates voice, video, messaging, and collaboration tools into a single solution. Users can streamline their communication processes, enhancing productivity and engagement.",
    pros: "Good customer service from specific reps|Helpful for transitions from other systems",
    cons: "Difficult subscription cancellation|Automatic renewal issues|Poor overall customer service|Technical issues|Higher cost than alternatives|Inflexible contract enforcement",
  },
  {
    title: "FreJun",
    url: "https://frejun.com",
    custom_redirect: null,
    slug: "frejun",
    text: "FreJun automates calling, logging business calls and insights seamlessly with preferred workflow tools.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://images.g2crowd.com/uploads/report_medal/image/1004651/medal.svg",
    thumbnail: "https://frejun.com/wp-content/uploads/2021/04/Frejun-logo.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329750535.frejun-com.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "FreJun is designed to automate calling and streamline business communications. It offers features for logging calls and providing insights, all integrated with popular workflow tools for easy access. This functionality enhances the productivity of teams by simplifying the calling process.",
    pros: "User-friendly interface|Responsive staff support",
    cons: "Complaints about service disruptions|Limited reviews available",
  },
  {
    title: "LINE",
    url: "https://line.me",
    custom_redirect: null,
    slug: "line",
    text: "LINE is a messenger app that serves as a new level of communication and the essential infrastructure for daily life.",
    Category: "Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://line.me/static/a83a28aa13ec25daa7b25a9d20e55d66/aca38/og.png",
    thumbnail:
      "https://line.me/static/0d83b930b5aea21458844be1f39fdfaf/15377/icon-line-w.png",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329771994.line-me.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "LINE is more than just a messenger app; it represents a new level of communication and serves as an essential infrastructure in everyday life. With its innovative features, LINE facilitates seamless communication for users, enhancing their ability to connect with others. This app is designed to enrich the communication experience, making it an integral part of users' lives.",
    pros: "Free calling feature",
    cons: "Account suspension without clear reasons|Data security concerns|Non-responsive support|Verification difficulties|Device transfer problems|Connection issues",
  },
  {
    title: "Sonetel",
    url: "https://www.sonetel.com",
    custom_redirect: null,
    slug: "sonetel",
    text: "Sonetel provides business phone numbers in various cities and countries, allowing users to answer calls anywhere starting at $1.79 per month.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://sonetel.com/wp-content/uploads/2019/09/home-page-featured-image.png",
    thumbnail:
      "https://sonetel.com/wp-content/uploads/2019/09/home-page-featured-image.png",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329770338.www-sonete.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Sonetel offers business phone numbers that can be used in any city and country of choice. This service allows entrepreneurs to answer calls from anywhere, ensuring seamless communication. With plans starting at just $1.79 per month, it provides an affordable solution for growing businesses.",
    pros: "Positive customer service mentions|Simple to use|Reasonable service quality",
    cons: "Connection issues|Technical problems|Non-functioning numbers|Support response problems|Account verification difficulties",
  },
  {
    title: "imo",
    url: "https://imo.im",
    custom_redirect: null,
    slug: "imo",
    text: "imo offers a free video calling app for connecting with family and friends through video chats and messages.",
    Category: "International Calling; Business Communication",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://static-web.imoim.net/as/indigo-static/official/graphics/imo_banner.png",
    thumbnail: "https://static-act.imoim.net/assets-s/imo-official/favicon.ico",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329768945.imo-im.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "imo provides a free video calling application that allows users to stay connected with family and friends through high-definition video chats and messages. It offers options for both one-on-one and group calls, as well as secure messaging features. Users can also enjoy free international calls, making it an ideal choice for communication across distances.",
    pros: "Good call quality for some|Multi-platform availability|Easy to use",
    cons: "Excessive advertisements|Poor customer support|Login problems|Inappropriate message complaints|Limited functionality",
  },
  {
    title: "Ooma",
    url: "https://www.ooma.com",
    custom_redirect: null,
    slug: "ooma",
    text: "Ooma provides advanced VoIP phone services for both business and home environments.",
    Category: "International Calling; Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: "https://www.ooma.com/wp-content/uploads/ooma-home-banner-1.jpg",
    thumbnail:
      "https://www.ooma.com/wp-content/themes/ooma/images/icons/ooma-logo.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329793223.www-ooma-c.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Ooma is recognized as a leading VoIP phone service provider suitable for both business and home use. Not only does it offer cutting-edge phone service, but it also features integrated smart security systems. Users can call 877-353-5168 to discover more about its innovative solutions.",
    pros: "Easy installation|Clear instructions|Good call quality for some",
    cons: "Address book functionality issues|Unexpected charges|Price increases without notice|Poor customer support|Difficult cancellation|Device compatibility problems|Service activation issues",
  },
  {
    title: "magicJack",
    url: "https://www.magicjack.com",
    custom_redirect: null,
    slug: "magicjack",
    text: "magicJack provides VoIP calling with unlimited free calls to the US and Canada.",
    Category: "International Calling; Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: "https://store.magicjack.com/mj/common/img/go-new/go_device.jpg",
    thumbnail: "https://www.magicjack.com/mj/common/img/mj-logo.jpg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329792275.www-magicj.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "magicJack offers a VoIP phone service that allows users to enjoy uncompromised calling without the burden of traditional phone bills. The service includes free unlimited calling to the US and Canada while enabling users to keep their existing phone numbers. Users can easily connect their magicJack devices using high-speed internet for high-quality communications.",
    pros: "Easy installation|Basic home phone functionality|Clear signal mentioned by some",
    cons: "Poor/non-existent customer service|Technical failures|Automatic renewal problems|Refund issues|Sound quality problems|Setup difficulties|Billing complaints",
  },
  {
    title: "Rebtel",
    url: "https://www.rebtel.com",
    custom_redirect: null,
    slug: "rebtel",
    text: "Rebtel offers cheap international calls to any mobile or landline without needing an internet connection.",
    Category: "International Calling; Business Communication",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://rebtel.imgix.net/upload/v2/logo/rebtel-logo-fb.png?auto=compress,format",
    thumbnail:
      "https://rebtel.imgix.net/upload/v2/logo/rebtel-logo-fb.png?auto=compress,format",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329793740.www-rebtel.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Rebtel provides a cost-effective solution for making international calls to any mobile or landline. Users can enjoy high-quality connections without the need for an internet connection, making it convenient for those looking to stay connected globally. The service allows users to try their first call for free, demonstrating their commitment to delivering value and quality.",
    pros: "Reliable for some users|Good value mentioned by some|No hidden costs for some|Works well for international calls for some",
    cons: "Described as scam by multiple users|Call quality issues|Poor customer service|Arbitrary account restrictions|Refund difficulties|Roaming charges problems|Functionality issues",
  },
  {
    title: "Truphone",
    url: "https://www.truphone.com",
    custom_redirect: null,
    slug: "truphone",
    text: "Truphone offers innovative mobile connectivity solutions powered by advanced eSIM technology.",
    Category: "International Calling; Business Communication",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://www.datocms-assets.com/50740/1642586127-truphone-social.png?w=1000&fit=max&fm=jpg",
    thumbnail:
      "https://www.datocms-assets.com/50740/1629889302-favicon.png?w=192&h=192",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329813758.www-trupho.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Truphone focuses on enhancing connectivity through smarter, more efficient solutions. Established in 2006, it has developed state-of-the-art SIM software and platforms that enable seamless global communication. With a commitment to connectivity, Truphone aims to keep everyone connected to their loved ones wherever they are.",
    pros: "Works in some countries (Cyprus, Thailand)|e-SIM functionality|International coverage",
    cons: "Poor customer service|Expensive with frequent bill shocks|Billing issues and inaccuracies|Network connectivity problems in certain regions|Long setup times (2-3 days for new countries)|Refund issues|Some describe as a 'scam'",
  },
  {
    title: "8x8",
    url: "https://www.8x8.com",
    custom_redirect: null,
    slug: "8x8",
    text: "8x8 is an AI-powered platform that unifies contact center solutions and communications to enhance customer experience and business efficiency.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://images.contentstack.io/v3/assets/blte621f0a2bd0e9f69/bltc5f9c56db2c5d47a/67be1326f5cfb37fa1d6b26d/8x8_SEO.png?cache=1744620095&tr=fo-auto,w-1200,h-628",
    thumbnail:
      "https://www.8x8.com/favicon-32x32.png?v=08f6c0d4416b9ec10a53adc96d3d4d8e",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329824075.www-8x8-co.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "The platform known as 8x8 combines contact center services, global telecommunications, video messaging, and low-code APIs into a single AI-powered ecosystem. This integration is designed to improve customer experiences and increase operational efficiency for businesses. It eliminates siloed operations, allowing for a seamless flow of communication and data.",
    pros: "Reliable for some users|Helpful account managers|Good for medium businesses",
    cons: "Poor customer support|Persistent bugs and feature gaps|Contract issues|Call quality problems|UI/UX complaints|Technical difficulties|SMS service problems",
  },
  {
    title: "Talkatone",
    url: "https://www.talkatone.com",
    custom_redirect: null,
    slug: "talkatone",
    text: "Talkatone provides unlimited free calls and texts over WiFi or data without using cell minutes.",
    Category: "International Calling; Business Communication",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: null,
    thumbnail:
      "https://www.talkatone.com/wp-content/themes/talkatone/img/talkatone-logo.png",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329828460.www-talkat.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Talkatone is a calling app that enables users to make unlimited free calls and send texts using a free U.S. phone number, without relying on traditional cellular services. With Talkatone, millions of users can connect with family and friends anywhere, using WiFi or cellular data. The app allows communication without incurring regular cell phone minute charges, providing a cost-effective alternative for phone calls and messaging.",
    pros: null,
    cons: null,
  },
  {
    title: "TextFree",
    url: "https://www.textfree.us",
    custom_redirect: null,
    slug: "textfree",
    text: "TextFree is a free app that allows users to send unlimited texts and make WiFi calls from a free phone number.",
    Category: "International Calling; Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: null,
    thumbnail: "https://textfree.us/wp-content/uploads/TextFree_Wordmark.png",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329829972.www-textfr.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "TextFree offers unlimited free texting and WiFi calling from a complimentary phone number. The app is available for download on multiple platforms, allowing many users to communicate without worrying about costs. With over 130 million downloads, TextFree has become a popular choice for those seeking a reliable communication solution.",
    pros: "Free service ($0/month)|Real human customer service|Privacy features (described as untraceable)|Works without traditional cellular service",
    cons: "Poor customer support (chatbot described as useless)|Slow load times|Account blocking issues|Cannot receive verification codes|Some users describe it as virus-like|Access and verification problems",
  },
  {
    title: "Dingtone",
    url: "https://www.dingtone.me",
    custom_redirect: null,
    slug: "dingtone",
    text: "Dingtone provides an affordable second phone number for making calls and sending texts via WiFi or cellular data.",
    Category: "International Calling; Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: null,
    thumbnail: null,
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329836940.www-dingto.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Dingtone is a service that offers users a second phone number for calling and texting. This app enables cheap calls and texts using WiFi or cellular data, helping users manage their communications without using cell minutes. It also includes features such as call forwarding, voicemail, and spam call blocking, making it a comprehensive solution for phone services.",
    pros: "Saves on phone bills for some|Free calls between Dingtone users",
    cons: "Privacy concerns|Unexpected charges|Verification code issues|Difficult subscription cancellation|Described as scam by many|Credit usage problems",
  },
  {
    title: "Nextiva",
    url: "https://www.nextiva.com",
    custom_redirect: null,
    slug: "nextiva",
    text: "Nextiva is a comprehensive business communication platform that integrates voice, video, chat, social media, and email to enhance customer experiences.",
    Category: "Business Communication",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://www.nextiva.com/wp-content/uploads/2024/05/Nextiva-Logo-Social.webp",
    thumbnail:
      "https://www.nextiva.com/wp-content/themes/nextiva-2024-v2/assets/images/nextiva-logo-lite.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329861112.www-nextiv.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Nextiva is a unified business communication platform that connects all aspects of customer interactions throughout their journey. It encompasses voice and video communications, chat, social media, and email, providing a holistic approach to customer experience management. This platform is designed to streamline communication and improve overall engagement for businesses.",
    pros: null,
    cons: null,
  },
  {
    title: "Phone.com",
    url: "https://www.phone.com",
    custom_redirect: null,
    slug: "phone-com",
    text: "Phone.com offers an affordable VoIP business phone system that provides cloud-based voice, video, SMS, and MMS.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://www.phone.com/wp-content/uploads/2022/05/phone_dot_com_OG_image.png",
    thumbnail:
      "https://pdc-marketing-cdn.s3.us-east-1.amazonaws.com/logos/Phonecom_Logo_With_Tagline.png",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329849678.www-phone.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Phone.com is an affordable VoIP virtual business phone system designed to deliver cloud-based voice, video, SMS, and MMS capabilities. The service aims to empower businesses by offering a dedicated business phone number separate from personal lines, facilitating seamless communication from any device, anywhere. With a simple setup process and a 30-day money-back guarantee, Phone.com makes it easy for businesses to enhance their communication without hefty upfront investments.",
    pros: "Few positive mentions",
    cons: "Poor customer support|Billing issues for unused services|Difficult cancellation|Pricing transparency problems|Technical issues|Reliability concerns",
  },
  {
    title: "RingCentral",
    url: "https://www.ringcentral.com",
    custom_redirect: null,
    slug: "ringcentral",
    text: "RingCentral is a trusted leader in AI-powered communications, facilitating global connections through calls, messages, meetings, and events.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://www.ringcentral.com/content/dam/rc-www/en_us/images/content/ab-tests/homepages/home_b/og-img.jpg",
    thumbnail:
      "https://www.ringcentral.com/content/dam/rc-www/en_us/images/content/ab-tests/homepages/home_b/og-img.jpg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329857558.www-ringce.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "RingCentral is recognized as a leader in AI-powered communications, enabling businesses to connect seamlessly through various channels including calls, messages, meetings, and events. This innovative solution enhances communication efficiency for organizations worldwide. The platform is designed to streamline business interactions and foster collaboration.",
    pros: "Smooth transition from other providers for some|Professional onboarding in some cases|Meets basic business needs",
    cons: "Extremely poor customer support|Long support wait times|Forced contracts and difficult cancellation|Technical setup issues|Billing problems|Messaging/texting limitations|Call quality problems",
  },
  {
    title: "MightyCall",
    url: "https://www.mightycall.com",
    custom_redirect: null,
    slug: "mightycall",
    text: "MightyCall offers cloud call center software tailored for small and mid-sized businesses, providing advanced customer service and sales tools.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://www.mightycall.com/wp-content/uploads/2022/02/MightyCall-logo-G2.png",
    thumbnail:
      "https://www.mightycall.com/wp-content/themes/mightycall2021/img/logo.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329878842.www-mighty.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "MightyCall provides cloud call center software designed specifically for small and mid-sized businesses. It stands out as an industry leader due to its reliable and intuitive nature, exceptional customer support, and ease of setup, making it an ideal solution for companies looking to enhance their customer service capabilities.",
    pros: "User-friendly interface|Good customer support for some|Useful small business features|Responsive support team",
    cons: "Mobile app issues|Billing problems|Difficult cancellation|Technical limitations|Web phone hearing issues|Inflexible contracts",
  },
  {
    title: "JustCall",
    url: "https://justcall.io",
    custom_redirect: null,
    slug: "justcall",
    text: "JustCall offers AI-powered phone systems and SMS solutions for improved business communication.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://cdn.justcall.io/assets-marketing/images/temp/home-hero.webp",
    thumbnail: "https://cdn.justcall.io/assets-marketing/images/svg/logo.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329884533.justcall-i.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "JustCall is a leading business communication platform that provides AI-powered phone systems and SMS solutions. It enhances sales pipelines and facilitates fast, customer-centric support. With a free trial available for 14 days, businesses can experience seamless connectivity and improve customer interactions.",
    pros: "Quick support response|Detailed customer attention|Easy to use|Good sound quality",
    cons: "AI-dependent support|Compliance form issues|Some fraudulent behavior complaints",
  },
  {
    title: "Aircall",
    url: "https://aircall.io",
    custom_redirect: null,
    slug: "aircall",
    text: "Aircall is an AI-powered customer communications platform that unifies channels for business teams.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://a.storyblok.com/f/157376/1200x630/e9706cdc7b/og-image-en_1200x630.png/m/1200x0",
    thumbnail: "https://a.storyblok.com/f/157376/x/b49272a5df/aircall-icon.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329886125.aircall-io.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Aircall is an AI-powered customer communications platform designed to unify communication channels, automate tasks, and provide insights. It serves as a business phone system tailored for high-performing teams and integrates seamlessly with CRM and helpdesk systems. This solution enhances the efficiency of communication processes within organizations.",
    pros: "Good onboarding experience|Integration with CRM systems|Some helpful account managers",
    cons: "Poor customer support|Criticized UI changes|Connection quality issues|SMS limitations (no short-code messages)|Data privacy concerns|Difficult cancellation process|Regional verification problems",
  },
  {
    title: "sipgate",
    url: "https://www.sipgate.com",
    custom_redirect: null,
    slug: "sipgate",
    text: "sipgate is a cloud telephony solution that intelligently connects teams, automates tasks, and enhances customer relationships.",
    Category: "Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://cdn.prod.website-files.com/678900e941dcd8f65b4519f8/67f368f73f855673966ffbf7_Social-Image-Smarte-Telefonie-Home.png",
    thumbnail:
      "https://cdn.prod.website-files.com/678900e941dcd8f65b4519f8/678900e941dcd8f65b451a42_sipgate_logo_black.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329901873.www-sipgat.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "sipgate offers cloud telephony that intelligently connects teams, automates routine tasks, and strengthens customer relationships. It also enables deep CRM integrations, enhancing the overall communication experience for businesses. This solution caters specifically to the needs of businesses looking for a comprehensive communication tool.",
    pros: "Reasonable pricing for VOIP|DE/EU Flat options available|No major problems reported",
    cons: "Mobile service not price competitive|Limited English-language support|Few reviews available",
  },
  {
    title: "VoipBuster",
    url: "https://www.voipbuster.com",
    custom_redirect: null,
    slug: "voipbuster",
    text: "VoipBuster provides a free program for making high-quality international calls from mobile, landline, or computer.",
    Category: "International Calling; Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: null,
    thumbnail: null,
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745329902673.www-voipbu.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "VoipBuster offers a software solution that enables users to make free and high-quality voice communications globally. The application allows free calls to selected destinations and extremely low rates for any other international calls. Additionally, users can call their online contacts at no cost.",
    pros: null,
    cons: null,
  },
  {
    title: "Zadarma",
    url: "https://zadarma.com/",
    custom_redirect: null,
    slug: "zadarma",
    text: "Zadarma provides virtual phone numbers, a free cloud PBX, and various communication tools across 100+ countries.",
    Category: "Business Communication; International Calling; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: "https://zadarma.com/images/content/news/zadarma_300_200.png?v2",
    thumbnail: "https://zadarma.com/v2/img/logo.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745522824643.zadarma-co.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Zadarma offers virtual phone numbers in over 100 countries, along with a free cloud PBX and CRM systems. Users can benefit from video conferencing, call tracking, and speech analytics. This service is designed to enhance business communication and optimize call management.",
    pros: "Easy setup for new users|Stable video conferencing|Useful voicemail features|Good mobile functionality",
    cons: "Privacy concerns|Poor customer service|Unexplained account blocking|Verification difficulties|Data collection issues",
  },
  {
    title: "Chanty",
    url: "https://www.chanty.com/",
    custom_redirect: null,
    slug: "chanty",
    text: "Chanty is an all-in-one team collaboration tool designed to enhance productivity with messaging, video calling, and task management features.",
    Category: "Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://cdn.chanty.com/landing/202503261923/images/chanty-social.png",
    thumbnail: "https://cdn.chanty.com/favicon.png",
    screenshotUrl:
      "https://mars-images.imgix.net/mars-default.jpg?auto=compress",
    fullDescription:
      "Chanty is an all-in-one team collaboration tool that simplifies communication and aids productivity. It offers unlimited message history and powerful features including video calls and task management. The platform is designed to significantly improve team collaboration and efficiency.",
    pros: "Easy-to-use interface|Good team collaboration features|Task management capabilities|Good service integrations|Simple and straightforward",
    cons: "Some complaints about fake reviews|Limited negative feedback available",
  },
  {
    title: "Rocket.Chat",
    url: "https://www.rocket.chat/",
    custom_redirect: null,
    slug: "rocketchat",
    text: "Rocket.Chat is a platform for secure, reliable, and unified communication, enabling real-time messaging, voice, video, and AI functionalities for internal and external stakeholders.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://cdn.prod.website-files.com/611a19b9853b7414a0f6b3f6/67e2c083148c38ccdee0d489_Secure%20comms%20os%20hero%20rocket%20chat.png",
    thumbnail:
      "https://cdn.prod.website-files.com/611a19b9853b7414a0f6b3f6/611bbb87319adfd903b90f24_logoRC.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745522840280.www-rocket.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Rocket.Chat is a comprehensive communication platform that centralizes real-time messaging, voice, video, AI, and applications, promoting secure and reliable collaboration among internal and external stakeholders. The platform is designed for mission-critical operations, ensuring seamless communication and data sovereignty. Its robust features offer businesses an efficient solution for maintaining secure interactions while enhancing operational efficiency.",
    pros: null,
    cons: null,
  },
  {
    title: "Brosix",
    url: "https://www.brosix.com/",
    custom_redirect: null,
    slug: "brosix",
    text: "Brosix Instant Messenger enhances business efficiency and reduces costs through various chat features.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://www.brosix.com/wp-content/uploads/2019/02/home-page-image.png",
    thumbnail:
      "https://www.brosix.com/wp-content/themes/bootscore-child-main/img/logo/logo.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745522838050.www-brosix.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Brosix Instant Messenger is designed to improve business efficiency while decreasing expenses by providing multiple chat features. This comprehensive tool allows teams to communicate securely, ensuring that all exchanges are private and streamlined. Users can benefit from various functionalities tailored to enhance collaboration in professional settings.",
    pros: "Effective screen sharing|HIPAA compliance|Multi-platform support|Responsive customer service|Good video/audio quality",
    cons: "Occasional login issues|Mobile app limitations|Periodic technical problems",
  },
  {
    title: "Google Meet",
    url: "https://meet.google.com/",
    custom_redirect: null,
    slug: "google-meet",
    text: "Google Meet enables secure audio and video conferencing through Google Workspace.",
    Category: "Business Communication; International Calling; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://lh3.googleusercontent.com/y7QLXoHdD1ZX1NqtEi_0SJbd7XrcX_nyIrsYqIMM3i9I5LB5YkB8RoiBvnothJuXOLfpTb0yFn-Mp0ERz98FrUTY8TxYFD9KiBH5=w1600-rj-e365",
    thumbnail:
      "https://storage.googleapis.com/gweb-workspace-assets/uploads/7uffzv9dk4sn-3dAGxdfnn2dy6LPNvOTYRx-8be390cd801f65e46a67dec3941d7c86-Google_Meet_Logo_x2.svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745522845834.meet-googl.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Google Meet, provided by Google Workspace, facilitates secure audio and video conferencing for users. It allows individuals and teams to connect effectively, enhancing collaboration in both personal and professional settings. This tool is designed to provide a seamless meeting experience, whether for formal business discussions or casual gatherings.",
    pros: "Low international rates|Long-term reliability",
    cons: "Verification issues|Limited features|Setup difficulties",
  },
  {
    title: "FaceTime",
    url: "https://www.apple.com/facetime/",
    custom_redirect: null,
    slug: "facetime",
    text: "FaceTime enables video and audio calling on iPhone and iPad devices.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: null,
    thumbnail: "https://www.apple.com/favicon.ico",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745522853391.www-apple.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "FaceTime is a service that allows users to make high-quality video and audio calls using their iPhone or iPad. This seamless communication tool enhances connectivity, enabling users to stay in touch with family and friends through live interactions. With its easy-to-use interface, FaceTime offers an intuitive calling experience for iOS device users.",
    pros: null,
    cons: null,
  },
  {
    title: "Voice",
    url: "https://voice.google.com/",
    custom_redirect: null,
    slug: "voice",
    text: "Google Voice offers smart voice calling across various devices.",
    Category: "Business Communication; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: null,
    thumbnail:
      "https://fonts.gstatic.com/s/i/productlogos/voice_2020q4/v1/web-96dp/logo_voice_2020q4_color_2x_web_96dp.png",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745522850440.voice-goog.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Google Voice provides a smarter phone number that works on both smartphones and the web, enabling users to place and receive calls from anywhere. It streamlines communication with features like voicemail transcription and allows users to easily manage incoming calls, including blocking spam calls. This service is designed to enhance connectivity and control over calls for both personal and business use.",
    pros: null,
    cons: null,
  },
  {
    title: "Sona",
    url: "https://www.openphone.com/sona",
    custom_redirect: null,
    slug: "sona",
    text: "Sona is an AI voice agent that answers calls 24/7, capturing leads and responding to FAQs to ensure no customer is missed.",
    Category: "Business Communication; International Calling",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images:
      "https://cdn.prod.website-files.com/6384fdd9fd42380b529fc942/6800d5714df8b264054c4a01_2OpenGraph-Sona-Landing-page%20(1).jpg",
    thumbnail:
      "https://cdn.prod.website-files.com/6384fdd9fd42380b529fc942/67f3dd80b34d4d5654987e96_Logo%20(6).svg",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1745522864773.www-openph.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Sona is a 24/7 AI voice agent designed to ensure businesses never miss a customer. It efficiently handles calls, captures leads, and provides answers to frequently asked questions, thereby preventing missed opportunities. This AI solution allows for seamless customer interaction, making it an essential tool for modern business communication.",
    pros: null,
    cons: null,
  },
  {
    title: "Zkypee",
    url: "https://www.zkypee.com/",
    custom_redirect: null,
    slug: "zkypee",
    text: "Zkypee is a free Skype alternative that offers high-quality voice and video calls globally.",
    Category: "Business Communication; International Calling; Personal VoIP",
    Rank: null,
    Hide: null,
    isFree: null,
    verified: null,
    premium: null,
    images: null,
    thumbnail: "https://www.zkypee.com/favicon.ico",
    screenshotUrl:
      "https://mars-images.imgix.net/aiscraper/anon/1746025146843.www-zkypee.jpeg?auto=format&w=1200&fit=max&w=1000",
    fullDescription:
      "Zkypee is presented as the ideal free replacement for Skype, especially as the original service faces shutdown. It enables users to make high-quality voice and video calls to anyone around the world, essentially bringing back the classic communication experience. The platform also provides messaging capabilities, making it a versatile solution for staying connected.",
    pros: null,
    cons: null,
  },
];

export const getSoftwareBySlug = (slug: string): Software | undefined => {
  return softwareData.find((software) => software.slug === slug);
};
