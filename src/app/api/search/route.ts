import { courses, lessons } from '@/lib/data'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest): Promise<Response> {
  console.log(JSON.stringify({ route: '/api/search', method: 'GET', ts: Date.now() }))
  try {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('q') || ''
    const type = searchParams.get('type') // 'course' or 'lesson'

    const lowerCaseQuery = query.toLowerCase()
    let results: Array<any> = []

    if (!query) {
      // If query is empty, return first 5 items
      const limitedCourses = courses.slice(0, 5).map(c => ({ ...c, type: 'course' }))
      const limitedLessons = lessons.slice(0, 5).map(l => ({ ...l, type: 'lesson' }))
      results = [...limitedCourses, ...limitedLessons].slice(0, 5) // Ensure max 5 if query is empty
    } else {
      if (!type || type === 'course') {
        const matchingCourses = courses
          .filter(course => course.name.toLowerCase().includes(lowerCaseQuery))
          .map(c => ({ ...c, type: 'course' }))
        results.push(...matchingCourses)
      }

      if (!type || type === 'lesson') {
        const matchingLessons = lessons
          .filter(lesson => lesson.name.toLowerCase().includes(lowerCaseQuery))
          .map(l => ({ ...l, type: 'lesson' }))
        results.push(...matchingLessons)
      }
    }

    // Limit results to 20
    results = results.slice(0, 20)

    return new Response(
      JSON.stringify({
        ok: true,
        data: {
          results: results,
          total: results.length,
          query: query,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/search', error: String(e), ts: Date.now() }))
    return new Response(
      JSON.stringify({
        ok: false,
        error: String(e),
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}