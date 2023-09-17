import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Vimeo('vimeo-player', {});
const savePlaybackTime = throttle(async () => {
  try {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  } catch (error) {
    console.error('Error saving playback time:', error);
  }
}, 1000);
player.on('timeupdate', savePlaybackTime);

async function resumePlayback() {
  try {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime !== null) {
      await player.setCurrentTime(parseFloat(savedTime));
    }
  } catch (error) {
    console.error('Error saving playback time:', error);
  }
}

window.addEventListener('load', resumePlayback);
