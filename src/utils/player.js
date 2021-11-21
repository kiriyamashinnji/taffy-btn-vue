/**
 * @Author     :retroxz
 * @Date       :21/11/2021 下午1:52
 * @File       :player.js
 * @GitHub     :https://github.com/retroxz
 */

/**
 * 音频播放类
 * @class Player
 */

class Player {
    constructor() {
        this.loop = false;
        this.random = false;
        this.overlap = false;
        this.playList = [];
        this.soundList = [];
    }

    play(url) {
        if (!this.overlap) {
            this.pause();
            this.playList = [];
        }
        let audio = new Audio(url);
        audio.player = this;
        audio.onended = this.audioEnd;
        this.playList.push(audio);
        audio.loop = this.loop;
        audio.play();

        audio.url = url;
    }

    pause() {
        this.playList.forEach((audio) => {
            audio.pause();
        });
    }

    continue() {
        this.playList.forEach((audio) => {
            audio.play();
        });
    }

    setMode(mode, overlap) {
        if (mode === 'loop') {
            this.loop = true;
            this.playList.forEach((sound) => {
                sound.loop = true;
            });
        } else {
            this.loop = false;
            this.playList.forEach((sound) => {
                sound.loop = false;
            });
        }

        this.overlap = overlap;
        this.random = mode === 'random';
    }

    remove(audio) {
        let newPlayList = [];
        this.playList.forEach((sound) => {
            if (sound === audio) {
                sound.pause();
            } else newPlayList.push(sound);
        });
        this.playList = newPlayList;
    }

    playRandom() {
        let idx = this.randInt(0, this.soundList.length - 1);
        this.play(this.soundList[idx]);
    }

    // Todo: 这个方法存在问题需要重写
    audioEnd() {
        if (this.playList.length === 1 && this.random)
            this.playRandom();
        if (this.ended) this.remove(this);
    }

    randInt(l, h) {
        return Math.floor(Math.random() * (h - l + 1)) + l;
    }
}

export default Player