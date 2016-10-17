import { getPlayersForLeague } from './connectors'

const resolveFunctions = {
  Query: {
    league: async (_, { name }) => ({ name })
  },
  League: {
    players(league){
      return getPlayersForLeague(league.name)
    }
  },
  Match: {
    homePlayer(){
      return {}
    },
    awayPlayer(){
      return {}
    }
  }
}

export default resolveFunctions
