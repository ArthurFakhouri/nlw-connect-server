import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'

type SubscribeToEventParams = {
  name: string
  email: string
}

export async function subscribeToEvent({
  name,
  email,
}: SubscribeToEventParams) {
  const [subscriber] = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning()

  return {
    subscriberId: subscriber.id,
  }
}
