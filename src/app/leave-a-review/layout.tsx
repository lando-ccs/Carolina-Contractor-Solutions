import type { Metadata } from 'next'

// Link-only page: shared directly with clients after a job, never linked from
// the site nav/footer and excluded from search engines.
export const metadata: Metadata = {
  title: 'Leave a Review — Carolina Contractor Solutions',
  robots: { index: false, follow: false },
}

export default function LeaveAReviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
