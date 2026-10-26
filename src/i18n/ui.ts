import type { Language } from '@/i18n/config'

interface Translation {
  title: string
  subtitle: string
  description: string
  posts: string
  tags: string
  about: string
  toc: string
}

export const ui: Record<Language, Translation> = {
  'en': {
    title: 'Aiden\'s Recipe',
    subtitle: 'Meat Lover',
    description: 'Aiden\'s recipe blog!',
    posts: 'Dishes',
    tags: 'Tags',
    about: 'About Aiden',
    toc: 'Recipe Index',
  },
  'ja': {
    title: '桜の音',
    subtitle: '桜川',
    description: '桜の音',
    posts: '音楽世界',
    tags: 'タグ',
    about: '自分紹介',
    toc: '目次',
  },
  'zh': {
    title: '星的博客',
    subtitle: '愿我的想法能帮到你',
    description: '星的博客',
    posts: '文章',
    tags: '标签',
    about: '关于星',
    toc: '目录',
  },
}