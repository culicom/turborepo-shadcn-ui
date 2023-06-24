import { Posts } from "./Posts"

type Props = {
  params?: {
    locale: string
  }
  searchParams?: {
    type?: string
  }
}

type QueryType = {
  locale: string
  sort: string
}

async function getPosts(props: QueryType) {
  const sorting = props?.sort ? `?sort=${props?.sort}` : ""

  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts?locale=${props?.locale}${sorting}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  return data.json()
}

export default async function Page(props: Props) {
  const data = await getPosts({
    locale: "nl",
    sort: "desc",
  })

  if (!data.docs) return null

  return <Posts docs={data?.docs} />
}
