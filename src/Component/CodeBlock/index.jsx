import React, { useState } from 'react';
import './CodeBlock.css'

function CodeBlock({ title, authors, conference, rate, paper, bibtex, code, poster, leaderboard, slides, media }) {
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

        {leaderboard && (
          <>
            &nbsp;|&nbsp;<a href={leaderboard}>LeaderBoard</a>
          </>
        )}

        {poster && (
          <>
            &nbsp;|&nbsp;<a href={poster}>Poster</a>
          </>
        )}

        {slides && (
          <>
            &nbsp;|&nbsp;<a href={slides}>Slides</a>
          </>
        )}

        {paper && (
          <>
            &nbsp;]
          </>
        )}
      </div>

      <div className='publicationsMedia'>
          {media && (
            <>
              Media Coverage: [<span dangerouslySetInnerHTML={{ __html: media }}></span>]
            </>
          )}
      </div>
      {showCode && <pre>{bibtex}</pre>}
    </div>
  );
}

export default CodeBlock;