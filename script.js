const logTextarea = document.getElementById("log-textarea");
const goLive = document.getElementById("goLive");
let player = null;
const cookie = 'hdntl=exp=1711190074~acl=%2f*~id=d581561e71e24250909820c5e9fbf962~data=hdntl~hmac=4e55d6d2b8028c1597bd10f46faca667711ea21b7d9268c385c9bb04c94aac60';

document.addEventListener("DOMContentLoaded", function () {
    player = videojs('my-video');
});


function playVideo(resolution) {
    var sourceUrl;

    // Assign the appropriate source URL based on the selected resolution
    switch (resolution) {
        case '640x360':
            sourceUrl = `https://jcevents.jiocinema.com/bpk-tv/JV_SportsHD15_DIG_MOB/Fallback/${cookie}/JV_SportsHD15_DIG_MOB-audio_33636_eng=33600-video=560800.m3u8`;
            break;
        case '854x480':
            sourceUrl = `https://jcevents.jiocinema.com/bpk-tv/JV_SportsHD15_DIG_MOB/Fallback/${cookie}/JV_SportsHD15_DIG_MOB-audio_98835_eng=98800-video=765200.m3u8`;
            break;
        case '1280x720':
            sourceUrl = `https://jcevents.jiocinema.com/bpk-tv/JV_SportsHD15_DIG_MOB/Fallback/${cookie}/JV_SportsHD15_DIG_MOB-audio_98835_eng=98800-video=1173600.m3u8`;
            break;
        case '1920x1080':
            sourceUrl = `https://jcevents.jiocinema.com/bpk-tv/JV_SportsHD15_DIG_MOB/Fallback/${cookie}/JV_SportsHD15_DIG_MOB-audio_98835_eng=98800-video=3110800.m3u8`;
            break;
        default:
            // Default to a suitable resolution or handle the error
            break;
    }

    // Update the source of the video element and play
    player.src({
        src: sourceUrl,
        type: 'application/x-mpegURL'
    });

    player.play();
    goLive.style.display = 'block';
}

function seekLowestLatency() {
    player.currentTime(54);
    goLive.style.display = 'none';
}
