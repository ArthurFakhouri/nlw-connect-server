import { redis } from '../redis/client'

type GetSubscriberRankingPositionParams = {
  subscriberId: string
}

export async function getSubscriberRankingPosition({
  subscriberId,
}: GetSubscriberRankingPositionParams) {
  const rankIndex = await redis.zrevrank('referral:ranking', subscriberId)

  if (rankIndex === null) {
    return { position: null }
  }

  return {
    position: rankIndex + 1,
  }
}
