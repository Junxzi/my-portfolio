import type { Metadata } from 'next'
import CareerTimeline from '@/components/CareerTimeline'

export const metadata: Metadata = {
  title: 'Career',
  description: 'My professional journey',
}

export default function CareerPage() {
  return <CareerTimeline />
}
