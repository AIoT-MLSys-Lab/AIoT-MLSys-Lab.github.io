# OSU AIoT & Machine Learning Systems Lab Website

## Environment

### 1. install yarn
`npm install -g yarn@1.22.19`

### 2. test locally
`npm run start`

### 3. deploy
`npm run deploy`

## Update

### update publication
`src\Component\Publications\index.jsx`

1. define a const for bibtex
```jsx
  const AIoTSurvey = `@article{aiotsurvey2024tosn,
    title={Artificial Intelligence of Things: A Survey},
    author={Siam, Shakhrul Iman and Ahn, Hyunho and Liu, Li and Alam, Samiul and Shen, Hui and Cao, Zhichao and Shroff, Ness and Krishnamachari, Bhaskar and Srivastava, Mani and Zhang, Mi},
    journal={ACM Transactions on Sensor Networks (TOSN)},
    year={2024}
}`
```

2. add a CodeBlock below
```jsx
<CodeBlock
    title = "Artificial Intelligence of Things: A Survey"
    authors = "Shakhrul Iman Siam, Hyunho Ahn, Li Liu, Samiul Alam, Hui Shen, Zhichao Cao, Ness Shroff, Bhaskar Krishnamachari, Mani Srivastava, Mi Zhang."
    paper = "https://mi-zhang.github.io/papers/2024_ACMTOSN_AIoTSurvey.pdf"
    conference = "ACM Transactions on Sensor Networks (<div class='pubHighlight'>ACM TOSN</div>), August 2024."
    bibtex = {AIoTSurvey}
    github = "https://github.com/AIoT-MLSys-Lab/AIoT-Survey"
>
</CodeBlock>
```


### update project
`src\Component\Projects`

1. create a project folder in this path
2. copy paste another existing project .jsx file and .css file
3. create a ProjectPanel in the corresponding research topic .jsx file
```jsx
<ProjectPanel 
link = "./#/EdgeAI/AIoTSurvey"
imageURL = "./images/projects/AIoT_overview.svg"
title = "Artificial Intelligence of Things: A Survey"
content = "The integration ......"
></ProjectPanel>
```
4. update the router
`src\Router\index.js`

```jsx
const AIoTSurvey = lazy(
  async () => await import('../Component/Projects/AIoTSurvey')
);
```

```jsx
{
    path: '/EdgeAI/AIoTSurvey',
    element: <AIoTSurvey></AIoTSurvey>
},
```

### update news

1. update news page
`src\Component\News\index.jsx`

```jsx
<NewsCard 
imageURL="./images/projects/FambaVLogo.jpg" 
title="Famba-V: Fast Vision Mamba with Cross-Layer Token Fusion" 
date="Sep. 2024"
content="Famba-V, our work on efficient Vision Mamba is the Best Paper Award winner of ECCV'24 Workshop on Computational Aspects of Deep Learning."
></NewsCard>
```

2. update home page
`src\Component\Home\index.jsx`

```jsx
<div className='newDate'>
Sep. 2024
</div>
<div className='newContent'>
Famba-V, our work on efficient Vision Mamba is the <div className='missionHighLight'>Best Paper Award</div> winner of ECCV'24 Workshop on Computational Aspects of Deep Learning.
</div>
```
