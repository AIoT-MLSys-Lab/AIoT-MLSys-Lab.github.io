import React, { useState } from 'react';
import './CodeBlock.css'

function CodeBlock({ title, authors, conference, rate, link, paper, bibtex, code, poster, leaderboard, slides, media, honor, presentation, invited, video }) {
  const [showCode, setShowCode] = useState(false);

  const toggleCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div className='publicationsItem'>

      <div className="publicationsStrong">{title}</div>
      <div>{authors}</div>
      <span dangerouslySetInnerHTML={{ __html: conference }}></span>
      <div dangerouslySetInnerHTML={{ __html: rate }}></div>
      <span dangerouslySetInnerHTML={{ __html: honor }}></span>
      <div dangerouslySetInnerHTML={{ __html: invited }}></div>

      <div className='publicationsBtns'>
        {(link || paper) && (
          <>
          [&nbsp;
          </>
        )}

        {link && (
          <>
          <a href={link}>Link</a>
          </>
        )}

        {(link && paper) && (
          <>
          &nbsp;|&nbsp;
          </>
        )}

        {paper && (
          <>
          <a href={paper}>Paper</a>
          </>
        )}

        {bibtex && (
          <>
            &nbsp;|&nbsp;<div onClick={toggleCode} className='codeBlock'>BibTex</div>
          </>
        )}

        {(!paper) && code && (
          <>
            [&nbsp;<a href={code}>Code</a>
          </>
        )}
        
        { paper && code && (
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

        {presentation && (
          <>
            &nbsp;|&nbsp;<a href={presentation}>Presentation</a>
          </>
        )}

        {video && (
          <>
            &nbsp;|&nbsp;<a href={video}>Video</a>
          </>
        )}

        {(paper || code) && (
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