import React, { useEffect, useState } from 'react';
import config from './config';


require("dotenv").config;

var mediaRecorder; 
var audioText;

// const DG_KEY = process.env.DG_KEY;
const DG_KEY = config.DG_KEY;







const Long = () => {
  
  let currentText = ''; // if you want record all audio even if you stoped and restart MediaRecorder, so you should set it as a global variable

  const [record, setRecord] = useState(false);
  const [text, setText] = useState('');
  const [cc, setCc] = useState(false);
  const [animation, setAnimation] = useState(false);





  const startRec = () => {
    setRecord(true);
    setText('');
  };

  const stopRec = async () => {
    if (record && mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
    setRecord(false);
  };
  

  const deepGramAudio2text = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      if (!MediaRecorder.isTypeSupported('audio/webm')) {
        return alert('Browser not supported');
      }

      var options = { mimeType: 'video/webm' };
      mediaRecorder = new MediaRecorder(stream, options);

      const socket = new WebSocket(`wss://api.deepgram.com/v1/listen`, [
        'token',
        DG_KEY,
      ]);

      socket.onopen = () => {
        mediaRecorder.addEventListener('dataavailable', async (event) => {
          if (event.data.size > 0 && socket.readyState == 1) {
            socket.send(event.data);
          }
        });
      };

      
      mediaRecorder.start(1100);
      console.log('started');

      socket.onmessage = async (message) => {
        const received = JSON.parse(message.data);
        if (received.channel && received.channel.alternatives && received.channel.alternatives.length > 0) {
          const transcript = received.channel.alternatives[0].transcript;
          if (transcript && received.is_final) {
            currentText = currentText.concat(' ' + transcript);
            audioText = currentText;
            console.log(audioText);
            setText(audioText);
          }
        }
      };
      
    }
    
    );
  };

  useEffect(() => {
    if (record) {
      deepGramAudio2text();
    }
  }, [record]);

  let leters = text.split(' ');
  let last2 = leters.slice(-2);

  return (
    <div>
      <div className='homePage'>
      <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-2xl font-semibold ml-4 xs:ml-0">Virtual a.i</h1>

        <div style={{ display: animation ? 'block' : 'none' }} className='mt-6'>
          <p className={`rotatingText-adjective hide`}>
            {leters.slice(-14, -7).map((i) => i + ' ')}
          </p>
          <p className={`rotatingText-adjective show`}>
            {leters.slice(-7).map((i) => i + ' ')}
          </p>
        </div>

        <div className='font-Epilogue'>
          <p>{leters.slice(-14, -7).map((i) => i + ' ')}</p>


          <div style={{ display: 'flex', marginTop: '5px' }}>
            <p className='font-Epilogue mt-6 ml-3'>{leters.slice(-7, -2).map((i) => i + ' ')}</p>
            
              &nbsp;
           
          </div>
        </div>


        <div className='mt-6'>

        <button onClick={startRec} type='button' id='start'  className='ml-3'>
          Start
        </button>
        <button onClick={stopRec} type='button' id='stop' className='ml-2'>
          Stop
        </button>


        </div>

      

        
       
      </div>
      <textarea
        className='textarea font-Epilogue'
        type='text'
        value={text}
        readOnly
        style={{ display: cc ? 'block' : 'none' }}
      />
    </div>
  );
};


export default Long;
