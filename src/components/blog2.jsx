import React from 'react'
import './blog2.css'
import Tilda from './images/blog2/tilda.png'
import TildaInstall from './images/blog2/tildaInstall.png'
import CmdLine from './images/blog2/cmdLine.png'
import LaunchTilda from './images/blog2/launchTilda.png'
import Pref from './images/blog2/pref.png'
import Conf from './images/blog2/conf.png'
import ConfNew from './images/blog2/confNew.png'
import TildaFinal from './images/blog2/tildaFinal.png'
import Shortcuts from './images/blog2/shortcuts.png'


function blog2() {
    window.scrollTo(0, 0);
    return(
      <>
      <div id='border'></div>
        <main class="container">
        <div class="custom-container">
        <h1>Install & configure dropdown terminal TILDA in Arch Linux</h1>
        <img alt="" src={Tilda} class="blog-page-cover"/>
        <h6>Last Updated: September 29, 2021</h6>
        <p class="blog-content">
            <h4>The majority of Linux administrators and some of the regular Linux users prefer to use the command line to perform daily operations. However, you may find it tedious to open the terminal over and over again. In this case, we recommend a tool called Tilda. Tilda is an open-source and highly customizable GTK-based drop-down console for Linux. Tilda runs in the background while you can show and hide it with a single keystroke. It has no border window, no title bar, no menu bar, and no maximize/minimize buttons. The classic terminals used in shooter games like Quake and Doom originally inspired the design. The best thing about Tilda is its flexibility; you can customize its behavior and appearance with simple shortcuts.</h4>
            <h3>Tilda Installation Through the Command Line in Arch Linux</h3>
            <p>If you prefer to install Tilda via command line, here is the procedure. Note that only an authorized user can install or remove any application from the Linux system.

To launch the command-line Terminal application in your OS, go to the Activities tab in the top left corner of your desktop. Then in the search bar, type terminal. From the result that appears, click on the Terminal icon to open.

Tilda is available in the official repositories of Debian OS, so you can easily install it via apt command. In the Terminal, execute the following command as sudo in order to install Tilda:

</p>
            <div id='command'><p>$sudo pacman -S tilda</p></div>
            <img alt="" src={TildaInstall} class="blog-page-cover"/>
            <p>The system might prompt for confirmation with Y/n option, hit y and then Enter to confirm. After that, the Tilda will be installed on your system.</p>
            <h3>Launch Tilda</h3>
            <h4>Lunch through command line</h4>
            <div id='command'><p>$tilda</p></div>
            <img alt="" src={CmdLine} class="blog-page-cover"/>
            <h3>Launch through application</h3>
            <p>go to wishker menu aka start menu or go to app search</p>
            <h3>then write "tilda"</h3>
            <img alt="" src={LaunchTilda} class="blog-page-cover"/>
            <p>The following it appears like this below</p>
            <p>To open the configuration window later at any time, right-click anywhere in the Tilda window and select Preferences.</p>
            <img alt="" src={Pref} class="blog-page-cover"/>
            <p>The following view appears when you open the Tilda application Prefences for the first time. This is Tilda configuration window, where you can do a lot of configurations related to color, appearance, font size, keybinding, scrolling and much more.</p>
            <img alt="" src={Conf} class="blog-page-cover"/>
            <h4>then do the following settings in picture given below</h4>
            <img alt="" src={ConfNew} class="blog-page-cover"/>
            <h4>then tilda will be appear like this</h4>
            <h4>to open or toggle tilda press key Alt+F3</h4>
            <img alt="" src={TildaFinal} class="blog-page-cover"/>
            <h3>Here is a list of shortcuts that you will be mostly using while operating Tilda:</h3>
            <img alt="" src={Shortcuts} class="blog-page-cover"/>
            <h4>This is all about install and learn how to use drop-down terminal tilda in Arch Linux</h4>
            <h4>Use and Enjoy!</h4>

            
            
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
export default blog2;