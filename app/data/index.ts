export const navbarData = {
  homeTitle: "Andrew's Blog",
}

export const footerData = {
  author: 'Andrew Xu',
  aboutAuthor: 'Hi! I am Andrew, a Java software engineer. Currently working at Dynadot.',
  authorInterest:
    "From clean code to clean charts. I love exploring the logic behind software and the psychology behind market movements. Let's connect if you share similar passions.",
  aboutTheSite:
    "This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it's deployed in Vercel.",
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description:
    'Code, Capital, and Canvas. A digital log documenting my journey in Java development, financial experiments, and life stories.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description: 'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Andrew Xu',
  description: 'Java Developer & Aspiring Price Action Trader.',
  aboutMe:
    "I am a software engineer specializing in Java, currently on a path to becoming a full-time Price Action Trader. I believe that discipline in coding translates to discipline in trading. Here, I write about the strict rules of programming and the fluid art of market speculation.",
}

export const seoData = {
  title: `Andrew's Blog | Andrew Blog`,
  ogTitle: `Let's learn Code & Price Action Trading - Andrew Blog | Andrew's Blog`,
  description: `Hi, I am a software engineer specializing in Java, currently on a path to becoming a full-time Price Action Trader.  - Andrew Blog | Andrew's Blog`,
  twitterDescription: `Andrew's Blog, where I play around with Java, Vue, and more and showcase my blog, resources, etc - Andrew Blog | Andrew's Blog`,
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://github.com/xmj233',
  twitterHandle: '@JoeZzdf',
  mailAddress: '543055255@qq.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/xmj233',
  twitterLink: 'https://twitter.com/JoeZzdf',
  rednoteLink: 'https://www.xiaohongshu.com/user/profile/67d1774e000000000e010307',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
