import {
  getTracks,
  getAllQuests,
  getTrackQuests,
  getAllTracks,
  updateQuest,
  updateTrack,
  getAllAchievements,
  updateAchievement
} from '../../contentful/contentful';
import { sendSuccess, sendServerError, sendNotFound } from './send-response';
import { parseBody } from './parse-body';

/* TODO:
  put some of these in different places
*/

export const getTracksHandler = (_, __, res) =>
  getTracks()
    .then(tracks => sendSuccess(res, tracks))
    .catch(err => sendServerError(res, err));

export const getAllQuestsHandler = (_, __, res) =>
  getAllQuests()
    .then(quests => sendSuccess(res, quests))
    .catch(err => sendServerError(res, err));

export const getAllTracksHandler = (_, __, res) =>
  getAllTracks()
    .then(tracks => sendSuccess(res, tracks))
    .catch(err => sendServerError(res, err));

export const getAllAchievementsHandler = (_, __, res) =>
  getAllAchievements()
    .then(achievements => sendSuccess(res, achievements))
    .catch(err => sendServerError(res, err));

export const getTrackQuestsHandler = (url, _, res) => {
  const trackId = url.query;
  return getTrackQuests(trackId)
    .then(quests => sendSuccess(res, quests))
    .catch(err => sendServerError(res, err));
};

/*
  TODO:
  deal with duplicate code
*/

export const updateQuestsHandler = (_, req, res) => {
  if (req.method !== 'POST') {
    sendNotFound(res);
    return;
  }
  parseBody(req)
    .then((body) => {
      if (!body) {
        sendServerError(res, 'No request body');
        return;
      }

      const data = JSON.parse(body);
      return Promise.all(data.quests.map(quest => updateQuest(quest)));
    })
    .then((data) => sendSuccess(res, data))
    .catch(err => sendServerError(res, err));
};

export const updateTrackHandler = (_, req, res) => {
  if (req.method !== 'POST') {
    sendNotFound(res);
    return;
  }
  parseBody(req)
    .then((body) => {
      if (!body) {
        sendServerError(res, 'No request body');
        return;
      }

      const data = JSON.parse(body)
      return updateTrack(data.track)
    })
    .then((data) => sendSuccess(res, data))
    .catch(err => sendServerError(res, err));
};

export const updateAchievementsHandler = (_, req, res) => {
  if (req.method !== 'POST') {
    sendNotFound(res);
    return;
  }
  parseBody(req)
    .then((body) => {
      if (!body) {
        sendServerError(res, 'No request body');
        return;
      }

      const data = JSON.parse(body);
      return Promise.all(data.achievements.map(achievement => updateAchievement(achievement)));
    })
    .then((data) => sendSuccess(res, data))
    .catch(err => sendServerError(res, err));
}