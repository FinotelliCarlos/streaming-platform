import { gql, useQuery } from '@apollo/client'

interface Lesson {
  id: string
  title: string
}

const GET_LECTURE_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

export const App = () => {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LECTURE_QUERY)

  return (
    <ul>
      {data?.lessons.map(lessons => {
        return <li key={lessons.id}>{lessons.title}</li>
      })}
    </ul>
  )
}
