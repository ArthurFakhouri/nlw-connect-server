import { accessInviteLinkRoute } from './access-invite-link'
import { getRankingRoute } from './get-ranking'
import { getSubscriberInviteClicksRoute } from './get-subscriber-invite-clicks'
import { getSubscriberInvitesCountRoute } from './get-subscriber-invites-count'
import { getSubscriberRakingPositionRoute } from './get-subscriber-ranking-position'
import { subscribeToEventRoute } from './subscribe-to-event'

export const routes = [
  getRankingRoute,
  accessInviteLinkRoute,
  subscribeToEventRoute,
  getSubscriberInviteClicksRoute,
  getSubscriberInvitesCountRoute,
  getSubscriberRakingPositionRoute,
]
