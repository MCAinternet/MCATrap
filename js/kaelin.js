// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
	playAudio("http://www.ibuylocalretailers.com/notify2.mp3");
    
}

// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Phonegap File Object 
// device APIs are available
//
function onDeviceReady() {
    // window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    //is this right?
}


// Audio player
//
var my_media = null;
var mediaTimer = null;

// Play audio
//
function playAudio(src) {
        console.log("my_media is playing and the src is " + src);
    if (my_media === null) {
        // Create Media object from src
        my_media = new Media(src, onSuccess, onError);
    } // else play current audio
    // Play audio
    my_media.play();
    // Testing is my_media being called and if so what is the src
    if (my_media) {
        console.log("my_media is playing and the src is " + src);
    }

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
                    console.log("Error getting pos=" + e);
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
    console.log("playAudio():Audio Success");
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

