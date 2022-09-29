import Player from "@vimeo/player";
import throttle from "lodash.throttle";
import localStorage from './storage';

const PLAY_TIME_KEY = 'videoplayer-current-time';
const THROTTLE_DELAY = 1000;

const playerRef = document.querySelector('#vimeo-player');

const player = new Player(playerRef);

function savePlayTime(data) {
  localStorage.save(PLAY_TIME_KEY, Math.floor(data.seconds));
};

player.on('timeupdate', throttle(savePlayTime, THROTTLE_DELAY));

let loadedTime = localStorage.load(PLAY_TIME_KEY);
if (loadedTime) {
  player.setCurrentTime(loadedTime);
};

    

