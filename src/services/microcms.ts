import { createClient, type MicroCMSQueries } from 'microcms-js-sdk'

const ARTICLE_ENDPOINT = 'articles'
const CATEGORY_ENDPOINT = 'categories'

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_SERVICE_API_KEY,
})

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}

export type Article = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  category: Category
}

type ContentList<T> = {
  totalCount: number
  offset: number
  limit: number
  contents: T[]
}
export type ArticlesList = ContentList<Article>
export type CategoriesList = ContentList<Category>

/**
 * microCMS管理のコンテンツの一覧を取得する.
 *
 * @param endpoint
 * @param queries
 * @returns コンテンツ一覧
 */
const getList = async <T>(
  endpoint: string,
  queries?: MicroCMSQueries,
): Promise<T> => {
  return await client.get<T>({
    endpoint: endpoint,
    queries,
  })
}

/**
 * 記事の一覧を取得する.
 *
 * @param queries
 */
export const getArticles = async (
  queries?: MicroCMSQueries,
): Promise<ArticlesList> => {
  return await getList<ArticlesList>(ARTICLE_ENDPOINT, queries)
}

/**
 * カテゴリの一覧を取得する.
 *
 * @param queries
 */
export const getCategories = async (
  queries?: MicroCMSQueries,
): Promise<CategoriesList> => {
  return await getList<CategoriesList>(CATEGORY_ENDPOINT, queries)
}

/**
 * 記事詳細を取得する.
 *
 * @param contentId
 * @param queries
 */
export const getArticle = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Article>({
    endpoint: ARTICLE_ENDPOINT,
    contentId: contentId,
    queries,
  })
}
