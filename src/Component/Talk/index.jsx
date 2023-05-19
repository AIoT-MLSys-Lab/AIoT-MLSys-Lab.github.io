import React from 'react'
import ContentTitle from '../ContentTitle'
import './talk.css'

function Talk() {
  return (
    <div>
      <ContentTitle title = "Our Talk" subtitle = "Talk"></ContentTitle>
      <div className='talkTitle'>
        Invited Talk
      </div>
      <div className='talkYear'>
        2022
      </div>
      <div className='talkContent'>
        <div className='talkItem'>
          <svg t="1684432627196" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2739" width="32" height="32"><path d="M1280 635.8c0 182.6-78.8 297-220.6 297-125.2 0-191.6-69.2-313.8-273.2l-62.8-105.2c-16.6-25-29-48.4-42.4-70-40.2 67.6-94.2 166-94.2 166-134 233.2-209.2 282.4-313.8 282.4C86.84 932.8 0 818.2 0 641c0-286 159.56-556.2 367.8-556.2 100.4 0 187.6 49.36 289.6 179 74.2-100.2 156.2-179 261.2-179 198.2 0 361.4 251.4 361.4 551zM574.8 384.4c-85.8-124.2-141.8-161-208.8-161-123.8 0-227.56 212.2-227.56 420 0 97 36.96 151.4 99.16 151.4 60.4 0 98-38 206.4-207.6 0 0 49.4-78.2 130.8-202.8z m487.6 410.4c64.4 0 93.8-55 93.8-149.8 0-248.4-108.6-450.84-246.4-450.84-66.4 0-122.2 51.84-189.8 156.04 18.8 27.6 38.2 58 58.6 90.8l75 124.8c117.4 188.2 147 229 208.8 229z" p-id="2740" fill="#1296db"></path></svg>
          <div className='talkStrong'>
            Meta (Facebook): 
          </div>
          &nbsp;&nbsp;Building Efficient, Scalable, and Inclusive Federated Learning Systems.
        </div>

        <div className='talkItem'>
          <img src="./images/HKUST.svg" alt=""  className='talkIcon_left'/>
          <div className='talkStrong'>
          &nbsp;Hong Kong University of Science and Technology: 
          </div>
          &nbsp;&nbsp;From Neural Architecture Search to Data-Centric AutoML.
        </div>
          
        <div className='talkItem'>
          <img src="./images/Rutgers.png" alt=""  className='talkIcon'/>
          <div className='talkStrong'>
            Rutgers University:
          </div>
          &nbsp;&nbsp;<a href="https://www.ece.rutgers.edu/events/efficient-ai-seminar-dr-mi-zhang-neural-architecture-search-data-centric-automl" target="_blank">From Neural Architecture Search to Data-Centric AutoML.</a>
          &nbsp;&nbsp;
          <a href="https://www.youtube.com/watch?v=GoGK6UJ5y2A">
          <svg t="1684433748611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2828" width="32" height="32"><path d="M941.3 296.1c-10.3-38.6-40.7-69-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7C123.3 227 93 257.4 82.7 296 64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" p-id="2829" fill="#d81e06"></path></svg>
          </a>
        </div>
      </div>

      <div className='talkYear'>
        2021
      </div>
      <div className='talkContent'>
        <div className='talkItem'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 192.756 192.756" id="stanford"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M0 0h192.756v192.756H0V0z"></path><path fill="#ad4246" d="M153.992 160.082l-24.357 24.17-64.64-.188-25.669-25.668.188-34.85h36.349l-.188-6.184-12.366-.188L38.764 92.63V34.922L65.369 8.504h62.393c8.432 8.057 17.799 17.799 26.043 26.23v34.663l-30.727-.188.562 3.935 4.684.937 25.48 25.295.188 60.706zM45.696 37.171l22.297-22.484h24.544c.937-.75 1.686-2.248 2.811-2.436a747.781 747.781 0 0 0-29.042 0L42.698 36.234l-.187 54.148 23.233 23.608h4.872l-2.811-2.436L45.696 89.82V37.171zm103.988-1.499c-7.869-8.057-14.99-15.364-23.42-23.233-10.68-.188-19.861-.188-29.979-.188 1.124.188 1.874 1.499 2.436 2.436l25.855.375 22.109 21.921v24.92l-31.289.187c.188.937.373 2.623 1.311 2.998l32.977.187V35.672zM78.485 48.225l-.188 7.682c.937-1.124.375-.375 3.186-4.497l6.183-.375c.937-.562 0-.187 2.062-2.623l-11.243-.187zm31.853 0c1.311 1.312 1.686 4.123 4.121 2.998l.188-1.499c-.001-2.435-2.999-1.499-4.309-1.499zM79.422 64.151c-2.249.375-1.312 2.811-1.499 4.31.375.75-.188 2.623 1.312 2.061.937.188 1.686-.562 1.686-1.499-.188-1.687.562-4.31-1.499-4.872zm5.433 0c-.749.562-.375 1.499-.187 2.436l1.686-.562c.375-.75-.75-1.687-1.499-1.874zm-38.597 91.622l.187-24.92 22.859-.188c.749-.562 1.312-1.686 1.124-2.623H42.886v28.291l23.795 23.797 61.268.188 22.297-22.484-.188-56.396-23.047-23.234h-14.988c2.811 3.186 13.303 2.623 13.303 2.623l21.172 21.359v55.086l-20.047 19.861-58.271.187-21.922-21.547zm66.14-41.783c.375.188.561.75 1.123.562.75-.188.938-2.811.562-3.373-1.124-.747-2.247 1.501-1.685 2.811zm-9.369 14.428l-.188 7.682 5.059.188v-5.246l-4.871-2.624zm11.617 4.309s-.375 0-2.998-.938v8.619l-8.619.188v2.998l11.617.375v-11.242zm-26.043 3.935l3.185.375s.188-2.438.188-3.186c-.75.188-3.373 2.811-3.373 2.811zm2.81 6.932l-.187-2.811s-7.12.562-9.369-.562c-.187-1.873-2.249-1.311-3.56-1.686l.375 5.434 12.741-.375z"></path><path fill="#417564" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613" stroke-width=".595" d="M95.91 15.437c-.75-.375-.937.375-1.312.75.562 3.747-4.309 5.809-2.061 9.743-.562 2.623-3.935 2.248-6.371 2.811-1.124 2.811 3.186.937 3.935 3.185 1.312 3.56-3.373 2.061-3.935 4.684 1.874 2.061-1.686 3.935-2.061 6.37 1.686 1.499 3.185-2.248 5.246-1.124 3.747.937 1.874 4.684 3.56 6.933.375 1.124.75 2.811-.375 3.747-.188 0-.562.188-.562-.187-2.436-1.125-2.061 1.874-3.373 2.81-.75.188-2.436-.75-2.998.75-4.122-3.185-3.934 3.185-7.495 2.998-1.499.75-2.811 2.436-2.436 3.935l.562.187c2.811-4.309 7.495-.749 11.429-1.499 1.312.75 2.436 2.249 2.062 3.935-.562 1.686-2.062 2.811-3.561 3.748-2.811 5.621-10.68 3.185-13.115 9.368-.375 1.312-.937 3.747.562 4.497 1.125-4.497 5.059 1.124 6.371-3.185 2.811-4.122 7.869.562 11.055-2.623.375 1.686-1.125 3.185-1.687 4.684-.75 1.499.75 3.748-1.124 4.685-2.998 1.687-7.682 1.874-8.619 5.808 1.687-3.185 5.809-.375 8.244-1.686.562.375.188 1.312.375 1.873-.937 4.684-6.371 4.497-10.118 5.434-1.874 1.312-3.56 3.934-6.37 3.373 0 .375-.188 1.123.375 1.311 1.686.375 3.372 0 4.871-.75 1.124.188 1.874 1.5 2.436 2.25 1.499 5.621-5.996 1.498-6.746 5.809.75.936 1.312 2.248 2.811 2.061 3.56.375 5.809-5.434 9.743-2.248 2.061-.375 3.56-1.5 5.059-2.623 2.623 4.871-5.247 4.871-5.247 9.555-2.248 1.125-5.996 1.312-5.808 4.684 1.686.938 2.436-.936 3.935-.748.562.373 1.686 1.123 1.499 2.061-.937 3.373-4.684 3.186-7.307 3.934-3.373 3.373-6.933 7.121-5.996 12.367.75.562 0 2.248 1.311 2.248.937-2.811 1.687-5.996 4.685-7.682 1.874-1.312 2.436 1.873 4.497 1.311 1.312-2.998 3.935-1.311 6.183-1.498 2.249-1.5 2.811-3.936 4.497-5.809.562-.188 1.124 0 1.499.562 2.249 5.246 1.499 11.805.562 17.424.375 12.555-9.181 22.484-19.86 27.73v.375c3.56.188 6.933-1.125 10.492-1.125 4.872 2.25 10.118-1.873 14.989.75 5.809-1.686 11.805 1.125 17.426-.75l-.938-.748c-9.93-4.123-17.236-14.615-17.236-25.857-.188-7.494-.75-15.363-.188-22.67.373-.938 1.498-2.438 2.996-1.875 1.125.75 2.25 1.688 2.25 2.998.561 1.5 1.498 3.936 3.559 2.998 3.561-3.186 5.246 3.186 9.557 1.312.75 1.123 2.248 1.311 3.559 1.123.938.562 1.5 1.688 1.688 2.811.75 1.688 2.436 2.623 4.121 2.436.75.188 1.688-.748.938-1.498-2.248-2.061-3.561-4.496-4.496-7.121-1.688-.748-3.561-.936-4.873-2.436-2.061-3.186 4.311-3.559 2.623-6.369l-9.18-.188-.562.562-.562-.375.375-.188-1.686-1.688c.936-4.121-3.936-6.369-1.688-10.305.75 0 1.312-.188 1.688.562 1.686 1.686 3.371.562 4.684-.75.938-.188 1.686.562 2.436 1.312.938.188 2.623 1.686 3.373 0-.938-2.436 2.248-3.936 1.123-6.371-1.498-1.498-2.809.75-4.496 0-3.934-2.248-9.367-1.311-12.178-5.621-.562-1.125-1.125-2.623.188-3.373 1.686-.375 3.371.375 4.684 1.499 3.373 2.811 4.496-3.56 7.682-.562 0-.375 0-.937-.375-1.124-3.186-1.125-5.621-5.247-9.742-3.935-1.875-.937-3.936-2.436-4.873-4.497-.748-.75-.373-2.061.188-2.623 2.811-.562 4.311 3.372 6.746 3.935 1.498.562 3.748.937 4.496-.562l-.562-.749c-3.746-1.312-6.182-4.31-8.805-7.495.375-2.248-1.875-4.309-.375-5.995 4.121-.937 6.184 5.059 10.305 2.81 2.061.375 4.123 2.811 5.996.937-2.248-3.56-7.682-5.059-8.807-9.368-.936-2.623-3.934-1.499-5.809-2.623-1.498-.75-3.186-1.874-3.186-3.748 2.062-2.061 3.561 2.061 5.996 1.312 2.998-3.561 5.246 2.811 8.432.187-.938-4.122-5.996-3.56-8.244-7.12-3.186-1.124-8.244-.562-8.807-5.059 1.312-3.56 5.246-.562 7.871-2.061.561-.562 1.311-1.312.936-2.436-.375-.562-.562-1.312-1.498-1.312-2.248.937-4.498.188-6.371-.937-.75-.75-.562-2.249.562-2.623 2.061-1.125 3.561.562 5.621 1.312 3.186-2.249-2.436-3.373-2.623-5.247.562-.937 1.498-.749 2.248-1.311-1.312-4.122-6.559-2.249-8.619-5.621-.562-1.686 1.5-2.998 2.623-3.935 0-1.312-1.686-1.499-2.623-2.249-1.127-1.312-.94-3.185-1.876-4.684z"></path><path fill="#ad4246" d="M152.307 178.818c.562.562.938 1.312.938 2.061 0 .75-.375 1.5-.938 2.062-.562.561-1.125.748-2.061.748-.75 0-1.312-.188-1.875-.748-.561-.562-.936-1.312-.936-2.062 0-.748.375-1.498.936-2.061.562-.562 1.125-.936 1.875-.936.936.001 1.498.374 2.061.936zm.375-.375c-.562-.561-1.5-.936-2.436-.936a3.1 3.1 0 0 0-2.248.936c-.75.75-.938 1.5-.938 2.436 0 .938.188 1.688.938 2.436a3.101 3.101 0 0 0 2.248.938c.936 0 1.873-.375 2.436-.938.75-.748.936-1.498.936-2.436-.001-.936-.186-1.686-.936-2.436zm-1.875 2.248H149.684v-1.311h.562c.375 0 .561.188.748.188.188.188.188.188.188.562 0 .188 0 .374-.375.561zm-1.873 2.063h.75v-1.5h1.123c.375.188.375.562.375.938v.563h.75l-.188-.188v-.751c0-.188 0-.375-.188-.562s-.375-.188-.562-.375h.562c.188-.188.375-.561.375-.748 0-.562-.188-.75-.75-.938-.188-.188-.375-.188-.936-.188h-1.312v3.749h.001z"></path></g></svg>
        <div className='talkStrong'>
          Stanford University:
        </div>
        &nbsp;&nbsp;<a href="https://mlsys.stanford.edu/">Empowering the Next Billion Devices with Deep Learning.</a>
        &nbsp;&nbsp;
        <a href="https://www.youtube.com/watch?v=xy4sbZ4ev2k">
          <svg t="1684433748611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2828" width="32" height="32"><path d="M941.3 296.1c-10.3-38.6-40.7-69-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7C123.3 227 93 257.4 82.7 296 64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" p-id="2829" fill="#d81e06"></path></svg>
        </a>
        </div>

        <div className='talkItem'>
          <img src="./images/USC.png" alt="" className='talkIcon'/>
          <div className='talkStrong'>
            University of Southern California: 
          </div>
          &nbsp;&nbsp;<a href="https://mlsys.stanford.edu/">Empowering the Next Billion Devices with Deep Learning.</a>
        </div>

        <div className='talkItem'>
          <img src="./images/ICML.jpg" alt="" className='talkIcon'/>
          <div className='talkStrong'>
            ICML'21 AutoML Workshop Keynote:
          </div>
          &nbsp;&nbsp;<a href="https://sites.google.com/view/automl2021">Encoding is an Important Design Decision in Neural Architecture Search.</a>
        </div>

        <div className='talkItem'>
          <svg t="1684434927483" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4229" width="32" height="32"><path d="M689.230769 812.110769c-0.787692 0-0.787692 0 0 0-13.390769 0-25.206154-8.664615-29.144615-20.48L598.646154 630.153846l-83.495385-37.809231c-8.664615-3.938462-14.966154-11.027692-17.329231-20.48l-25.993846-94.523077L370.215385 523.815385l-19.692308 63.015384c-3.938462 12.603077-14.966154 21.267692-27.569231 22.055385l-194.56 14.178461c-15.753846 1.575385-29.932308-9.452308-33.083077-25.206153-5.513846-28.356923-8.664615-57.501538-8.664615-86.646154 0-55.138462 10.24-108.701538 30.72-159.113846 4.726154-12.603077 17.329231-20.48 30.72-19.692308l172.504615 9.452308 144.147693-78.769231c3.150769-1.575385 6.301538-2.363077 9.452307-3.150769l76.406154-14.966154 14.178462-120.516923c0.787692-8.664615 5.513846-16.541538 12.603077-22.055385 7.089231-5.513846 16.541538-7.089231 25.206153-5.513846 98.461538 21.267692 185.895385 77.193846 247.335385 156.750769 8.664615 11.027692 8.664615 25.993846 0.787692 37.021539l-49.624615 70.104615 52.775385 89.009231c5.513846 8.664615 5.513846 19.692308 1.575384 28.356923l-137.846154 315.076923c-4.726154 11.027692-16.541538 18.904615-28.356923 18.904615zM553.747692 541.144615l81.92 37.021539c7.876923 3.150769 13.390769 9.452308 16.541539 17.329231l38.596923 101.612307 100.824615-230.006154-55.138461-92.16c-6.301538-11.027692-5.513846-24.418462 1.575384-33.870769l47.261539-66.953846C741.218462 223.704615 685.292308 186.683077 622.276923 166.990769l-12.603077 107.126154c-1.575385 13.390769-11.815385 24.418462-25.206154 26.781539l-93.735384 18.904615-147.298462 82.707692c-5.513846 3.150769-11.027692 3.938462-17.329231 3.938462l-158.326153-8.664616C155.963077 434.018462 149.661538 472.615385 149.661538 512c0 15.753846 0.787692 30.72 3.15077 46.473846l144.147692-10.24 17.329231-55.926154c2.363077-8.664615 8.664615-15.753846 17.329231-19.692307l148.086153-66.953847c8.664615-3.938462 18.116923-3.938462 26.781539 0s14.178462 11.027692 17.329231 20.48l29.932307 115.003077z m-233.156923 37.021539z" fill="#7F7F7F" p-id="4230"></path><path d="M479.704615 290.658462l98.461539-19.692308 17.329231-143.36c-26.781538-5.513846-55.138462-8.664615-83.495385-8.664616-165.415385 0-307.2 102.4-365.489231 246.547693l181.956923 10.24 151.236923-85.070769z" fill="#BFBFBF" p-id="4231"></path><path d="M328.467692 406.449231h-1.575384l-181.956923-10.24c-10.24-0.787692-19.692308-6.301538-25.206154-14.966154s-6.301538-18.904615-2.363077-28.356923C182.744615 191.409231 337.92 86.646154 512 86.646154c29.932308 0 60.652308 3.150769 90.584615 9.452308 15.753846 3.150769 26.781538 18.116923 24.418462 34.658461l-17.329231 143.36c-1.575385 13.390769-11.815385 24.418462-25.206154 26.781539l-93.735384 18.904615-147.298462 82.707692c-4.726154 2.363077-9.452308 3.938462-14.966154 3.938462z m-133.12-70.892308l126.03077 7.089231L464.738462 263.089231c3.150769-1.575385 6.301538-2.363077 9.452307-3.150769l76.406154-14.966154 11.027692-91.372308c-17.329231-3.150769-33.083077-3.938462-49.624615-3.938462-133.12 0-253.636923 71.68-316.652308 185.895385z" fill="#7F7F7F" p-id="4232"></path><path d="M512 905.846154c217.403077 0 393.846154-176.443077 393.846154-393.846154 0-89.796923-29.932308-173.292308-81.132308-239.458462l-60.652308 86.646154 63.015385 106.338462-137.846154 315.076923-66.166154-173.292308L527.753846 563.987692l-35.446154-129.96923-148.086154 66.953846-23.630769 76.406154L126.030769 591.556923C163.052308 771.150769 322.166154 905.846154 512 905.846154z" fill="#BFBFBF" p-id="4233"></path><path d="M512 937.353846c-200.861538 0-375.729231-142.572308-416.689231-338.707692-1.575385-8.664615 0-18.116923 5.513846-25.206154 5.513846-7.089231 14.178462-11.815385 22.843077-12.603077l172.504616-12.603077 17.32923-55.926154c2.363077-8.664615 8.664615-15.753846 17.329231-19.692307l148.086154-66.953847c8.664615-3.938462 18.116923-3.938462 26.781539 0s14.178462 11.027692 17.32923 20.48l31.507693 115.79077 81.92 37.021538c7.876923 3.150769 13.390769 9.452308 16.541538 17.329231l38.596923 101.612308 100.824616-230.006154-55.138462-92.16c-6.301538-11.027692-5.513846-24.418462 1.575385-33.870769l60.652307-86.646154c5.513846-7.876923 14.966154-13.390769 25.206154-13.39077h0.787692c9.452308 0 18.904615 4.726154 25.206154 12.603077 55.926154 74.043077 86.646154 163.052308 86.646154 257.575385 0 234.732308-190.621538 425.353846-425.353846 425.353846zM166.203077 620.701538C212.676923 769.575385 352.886154 874.338462 512 874.338462c200.073846 0 362.338462-162.264615 362.338462-362.338462 0-65.378462-17.329231-128.393846-50.412308-184.32l-22.843077 33.083077 52.775385 89.009231c5.513846 8.664615 5.513846 19.692308 1.575384 28.356923l-137.846154 315.076923c-5.513846 11.815385-17.329231 18.904615-29.932307 18.904615-12.603077 0-24.418462-8.664615-28.356923-20.48L597.858462 630.153846l-83.495385-37.809231c-8.664615-3.938462-14.966154-11.027692-17.329231-20.48l-25.993846-94.523077L370.215385 523.815385l-19.692308 63.015384c-3.938462 12.603077-14.966154 21.267692-27.569231 22.055385l-156.750769 11.815384z" fill="#7F7F7F" p-id="4234"></path></svg>
          <div className='talkStrong'>
            The 7th Workshop on Energy Efficient Machine Learning and Cognitive Computing:
          </div>
          &nbsp;&nbsp;Efficient Neural Architecture Search at Scale.
          &nbsp;&nbsp;
          <a href="https://www.youtube.com/watch?v=yLIiKkvkh9A">
            <svg t="1684433748611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2828" width="32" height="32"><path d="M941.3 296.1c-10.3-38.6-40.7-69-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7C123.3 227 93 257.4 82.7 296 64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" p-id="2829" fill="#d81e06"></path></svg>
          </a>
        </div>

      </div>

      <div className='talkYear'>
        2020
      </div>
      <div className='talkContent'>
        <div className='talkItem'>
          <svg t="1684435116389" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5285" width="32" height="32"><path d="M1008 512C1008 238 786 16 512 16S16 238 16 512c0 247.56 181.38 452.76 418.5 490V655.38h-126V512h126v-109.28c0-124.3 74-192.96 187.34-192.96 54.28 0 111.04 9.68 111.04 9.68v122h-62.56c-61.6 0-80.82 38.24-80.82 77.46V512h137.56l-22 143.38h-115.56V1002C826.62 964.76 1008 759.56 1008 512z" p-id="5286" fill="#1296db"></path></svg>
          <div className='talkStrong'>
            Facebook AI Systems Faculty Summit: 
          </div>
          &nbsp;&nbsp;Efficient On-Device Distributed Deep Learning via Importance Sampling.
        </div>

        <div className='talkItem'>
          <img src="./images/ECCV.webp" alt=""  className='talkIcon'/>
          <div className='talkStrong'>
            ECCV'20 Tutorial on Automated Deep Learning: 
          </div>
          &nbsp;&nbsp;Does Unsupervised Architecture Representation Learning Help Neural Architecture Search?
          &nbsp;&nbsp;
          <a href="https://www.youtube.com/watch?v=xZews-0R5xI">
          <svg t="1684433748611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2828" width="32" height="32"><path d="M941.3 296.1c-10.3-38.6-40.7-69-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7C123.3 227 93 257.4 82.7 296 64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" p-id="2829" fill="#d81e06"></path></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Talk