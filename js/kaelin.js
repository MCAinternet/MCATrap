// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
	playAudio("http://www.ibuylocalretailers.com/notify2.mp3");
}

// Audio player
//
var my_media = null;
var mediaTimer = null;

// Play audio
//
function playAudio(src) {
        alert("playAudio():Audio Success and the src is " + src);
        
    // Create Media object from src
    my_media = new Media(src, onSuccess, onError);
    
    // Play audio
    my_media.play();

    // Update my_media position every second
    if (mediaTimer === null) {
        mediaTimer = setInterval(function() {
            // get my_media position
            my_media.getCurrentPosition(
                // success callback
                function(position) {
                    if (position > -1) {
                        setAudioPosition((position) + " sec");
                    }
                },
                // error callback
                function(e) {
                    alert("Error getting pos=" + e);
                    setAudioPosition("Error: " + e);
                }
            );
        }, 1000);
    }
}

// Pause audio
//
function pauseAudio() {
    if (my_media) {
        my_media.pause();
    }
}

// Stop audio
//
function stopAudio() {
    if (my_media) {
        my_media.stop();
    }
    clearInterval(mediaTimer);
    mediaTimer = null;
}

// onSuccess Callback
//
function onSuccess() {
    alert("playAudio():Audio Success");
}

// onError Callback
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Set audio position
//
function setAudioPosition(position) {
    document.getElementById('audio_position').innerHTML = position;
}

function test() {
    alert("test() has been called");
    setTimeout(function () {
    $("#imageone").css("visibility","hidden");
    $("#imageopen").css("visibility","visible"); 
        setTimeout(function () {
        $("#imagetwo").css("visibility","hidden");
        $("#imageopen").css("visibility","hidden");
            setTimeout(function () {
            $("#imagethree").css("visibility","hidden");
            $("#imageopen").css("visibility","visible");
                setTimeout(function () {
                $("#imagefour").css("visibility","hidden");
                $("#imageopen").css("visibility","hidden");
                    setTimeout(function () {
                    $("#imageone").css("visibility","visible");
                    $("#imagetwo").css("visibility","visible");
                    $("#imagethree").css("visibility","visible");
                    $("#imagefour").css("visibility","visible");
                        }
                        ,1 );
                        }
                    ,500 );
                }
                ,500 );
            }
            ,500 );
        }
    ,500 ); //End setTimeoutfunction

playAudio('http://www.ibuylocalretailers.com/notify2.mp3');
		
}

