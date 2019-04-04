import { helloWorldHandler } from './handlers/hello-world.handler';
import { getPointsHandler, resetPointsHandler } from './handlers/points.handler';
import {
  getAllTracksHandler,
  getTrackQuestsHandler,
  getAllQuestsHandler,
  updateQuestHandler,
  updateTrackHandler
} from './handlers/tracks.handler';

const appRoutes = [
  { path: '/api/helloworld', handler: helloWorldHandler },
  { path: '/api/content/getPoints', handler: getPointsHandler },
  { path: '/api/content/resetPoints', handler: resetPointsHandler },
  { path: '/api/content/getAllTracks', handler: getAllTracksHandler },
  { path: '/api/content/getAllQuests', handler: getAllQuestsHandler },
  { path: '/api/content/getTrackQuests', handler: getTrackQuestsHandler },
  { path: '/api/content/updateQuest', handler: updateQuestHandler },
  { path: '/api/content/updateTrack', handler: updateTrackHandler },
];

export default appRoutes;
