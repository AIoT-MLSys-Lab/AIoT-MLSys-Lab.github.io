import React, { useState } from 'react';
import './CodeBlock.css'

function CodeBlock({ title, authors, conference, rate, paper, bibtex, code, poster }) {
  const [showCode, setShowCode] = useState(false);

  const toggleCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div className='publicationsItem'>
      <div className="publicationsStrong">{title}</div>
      {authors}<br />
      <span dangerouslySetInnerHTML={{ __html: conference }}></span><br />
      {rate}
      <div className='publicationsBtns'>
        {paper && (
          <>
          [&nbsp;<a href={paper}>Paper</a>
          </>
        )}

        {bibtex && (
          <>
            &nbsp;|&nbsp;<div onClick={toggleCode} className='codeBlock'>BibTex</div>
          </>
        )}
        
        {code && (
          <>
            &nbsp;|&nbsp;<a href={code}>Code</a>
          </>
        )}

        {poster && (
          <>
            &nbsp;|&nbsp;<a href={code}>Poster</a>
          </>
        )}

        {paper && (
          <>
            &nbsp;]
          </>
        )}
      </div>
      {showCode && <pre>{bibtex}</pre>}
    </div>
  );
}

export default CodeBlock;