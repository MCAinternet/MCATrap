<?xml version="1.0" encoding="UTF-8" ?>
    <widget xmlns   = "http://www.w3.org/ns/widgets"
        xmlns:gap   = "http://phonegap.com/ns/1.0"
        id          = "com.mcainternet.itsatrap"
        versionCode = "10" 
        version     = "0.1" >

	<preference name="phonegap-version" value="3.1.0" />

        <name>It's A Trap</name>
        <description>
            Test App Showing File and Media Objects
        </description>
        <author email="http://www.mcainternet.com/" href="http://www.mcainternet.com/">
            MCA App Team Alpha
        </author>
        
        <icon src="Phonegaplogo.png" width="57" height="57"></icon>
        <gap:splash src="splashscreen.png"/>

	<gap:plugin name="org.apache.cordova.media" version="0.2.8" />
    
    (in app/res/xml/config.xml)
    <feature name="File">
    <param name="android-package" value="org.apache.cordova.FileUtils" />
    </feature>
    <feature name="FileTransfer">
    <param name="android-package" value="org.apache.cordova.FileTransfer" />
    </feature>


(in app/AndroidManifest.xml)
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

</widget>
