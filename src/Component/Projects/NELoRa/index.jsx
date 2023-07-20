import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function NELoRa() {
  return (
    <div className='project_container'>
        <div className='project_title'>
        NELoRa: Towards Ultra-low SNR LoRa Communication with Neural-enhanced Demodulation
        </div>

        <div className='project_conference'>
        SenSys'21
        </div>
        <div className='project_members'>
        Chenning Li, Hanqing Guo, Shuai Tong, Xiao Zeng, Zhichao Cao, Mi Zhang, Qiben Yan, Li Xiao, Jiliang Wang, and Yunhao Liu.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2021_SenSys_NELoRa.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{nelora2021sensys,`}
                title = {`title={{NELoRa: Towards Ultra-low SNR LoRa Communication with Neural-enhanced Demodulation}},`}
                author = {`author={Li, Chenning and Guo, Hanqing and Tong, Shuai and Zeng, Xiao and Cao, Zhichao and Zhang, Mi and Yan, Qiben and Xiao, Li and Wang, Jiliang and Liu, Yunhao},`}
                booktitle = {`booktitle={ACM Conference on Embedded Networked Sensor Systems (SenSys)},`}
                year = {`year={2021}`}
            />
        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/NELoRa_in.svg" alt=""  className='project_collection_img'/>
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            Low-Power Wide-Area Networks (LPWANs) are an emerging Internetof-Things (IoT) paradigm marked by low-power and long-distance communication. Among them, LoRa is widely deployed for its unique characteristics and open-source technology. By adopting the Chirp Spread Spectrum (CSS) modulation, LoRa enables low signal-to-noise ratio (SNR) communication. However, the standard demodulation method does not fully exploit the properties of chirp signals, thus yields a sub-optimal SNR threshold under which the decoding fails. Consequently, the communication range and energy consumption have to be compromised for robust transmission. This paper presents NELoRa, a neural-enhanced LoRa demodulation method, exploiting the feature abstraction ability of deep learning to support ultra-low SNR LoRa communication. Taking the spectrogram of both amplitude and phase as input, we !rst design a mask-enabled Deep Neural Network (DNN) !lter that extracts multi-dimension features to capture clean chirp symbols. Second, we develop a spectrogram-based DNN decoder to decode these chirp symbols accurately. Finally, we propose a generic packet demodulation system by incorporating a method that generates high-quality chirp symbols from received signals. We implement and evaluate NELoRa on both indoor and campus-scale outdoor testbeds. The results show that NELoRa achieves 1.84-2.35 dB SNR gains and extends the battery life up to 272% (⇠0.38-1.51 years) in average for various LoRa con!gurations.
            </div>
        </div>
    </div>
  )
}

export default NELoRa