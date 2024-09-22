import React, { lazy, Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom';
import Talk from '../Component/Talk';

const Main = lazy(
  async () => await import('../Page/Main.jsx')
);


const Home = lazy(
  async () => await import('../Component/Home')
);
const Research = lazy(
  async () => await import('../Component/Research')
);

const Members = lazy(
  async () => await import('../Component/Members')
);

const News = lazy(
  async () => await import('../Component/News')
);

const Publications = lazy(
  async () => await import('../Component/Publications')
);

const Courses = lazy(
  async () => await import('../Component/Courses')
);

const Join = lazy(
  async () => await import('../Component/Join')
);

const MiZhang = lazy(
  async () => await import('../Component/MiZhang')
);

const EdgeAI = lazy(
  async () => await import('../Component/Projects/EdgeAI')
);

const FederatedLearningandSystems = lazy(
  async () => await import('../Component/Projects/FederatedLearningandSystems')
);

const AutoML = lazy(
  async () => await import('../Component/Projects/AutoML')
);

const AIforWirelessSensingandNetworking = lazy(
  async () => await import('../Component/Projects/Wireless')
);

const MobileHealth = lazy(
  async () => await import('../Component/Projects/MobileHealth')
);

const LLM = lazy(
  async () => await import('../Component/Projects/LLM')
);

const NestDNN = lazy(
  async () => await import('../Component/Projects/NestDNN')
);

const FlexDNN = lazy(
  async () => await import('../Component/Projects/FlexDNN')
);

const Mercury = lazy(
  async () => await import('../Component/Projects/Mercury')
);

const Distream = lazy(
  async () => await import('../Component/Projects/Distream')
);

const FedAIoT = lazy(
  async () => await import('../Component/Projects/FedAIoT')
)

const GPTFL = lazy(
  async () => await import('../Component/Projects/GPT-FL')
);

const FedRolex = lazy(
  async () => await import('../Component/Projects/FedRolex')
);

const PyramidFL = lazy(
  async () => await import('../Component/Projects/PyramidFL')
);

const DoesUnsupervisedArchitectureRepresentationLearningHelpNeuralArchitectureSearch = lazy(
  async () => await import('../Component/Projects/DoesUnsupervisedArchitectureRepresentationLearningHelpNeuralArchitectureSearch')
);

const DeepAutoAugment = lazy(
  async () => await import('../Component/Projects/DeepAutoAugment')
);

const CATE = lazy(
  async () => await import('../Component/Projects/CATE')
);

const NELoRa = lazy(
  async () => await import('../Component/Projects/NELoRa')
);

const WiFiSeeItAll = lazy(
  async () => await import('../Component/Projects/WiFiSeeItAll')
);

const BodyScan = lazy(
  async () => await import('../Component/Projects/BodyScan')
);

const HeadScan = lazy(
  async () => await import('../Component/Projects/HeadScan')
);

const MobileDeepPill = lazy(
  async () => await import('../Component/Projects/MobileDeepPill')
);

const SharpEar = lazy(
  async () => await import('../Component/Projects/SharpEar')
);

const MobilePhoneSensorCorrelatesofDepressiveSymptomSeverityinDailyLifeBehavior = lazy(
  async () => await import('../Component/Projects/MobilePhoneSensorCorrelatesofDepressiveSymptomSeverityinDailyLifeBehavior')
);

const DeepASL = lazy(
  async () => await import('../Component/Projects/DeepASL')
);

const IoTinEraOfGAI = lazy(
  async () => await import('../Component/Projects/IoTinEraOfGAI')
);

const EfficientLLM = lazy(
  async () => await import('../Component/Projects/EfficientLLM')
);

const AIoTSurvey = lazy(
  async () => await import('../Component/Projects/AIoTSurvey')
);

const FambaV = lazy(
  async () => await import('../Component/Projects/FambaV')
);

const SVDLLM = lazy(
  async () => await import('../Component/Projects/SVDLLM')
);

const MEIT = lazy(
  async () => await import('../Component/Projects/MEIT')
);

const D2O = lazy(
  async () => await import('../Component/Projects/D2O')
);

function Index() {
  const element = useRoutes([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/research',
          element: <Research></Research>,
        },
        {
          path: '/members',
          element: <Members></Members>,
        },
        {
          path: '/members/MiZhang',
          element: <MiZhang></MiZhang>,
        },
        {
          path: '/news',
          element: <News></News>,
        },
        {
          path: '/publications',
          element: <Publications></Publications>,
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
        },
        {
          path: '/talk',
          element: <Talk></Talk>,
        },
        {
          path: '/join',
          element: <Join></Join>,
        },
        {
          path: '/EdgeAI',
          element: <EdgeAI></EdgeAI>,
        },
        {
          path: '/FederatedLearningandSystems',
          element: <FederatedLearningandSystems></FederatedLearningandSystems>,
        },
        {
          path: '/AutoML',
          element: <AutoML></AutoML>,
        },
        {
          path: '/LLM',
          element: <LLM></LLM>,
        },
        {
          path: '/AIforWirelessSensingandNetworking',
          element: <AIforWirelessSensingandNetworking></AIforWirelessSensingandNetworking>,
        },
        {
          path: '/MobileHealth',
          element: <MobileHealth></MobileHealth>,
        },
        {
          path: '/EdgeAI/NestDNN',
          element: <NestDNN></NestDNN>
        },
        {
          path: '/EdgeAI/FlexDNN',
          element: <FlexDNN></FlexDNN>
        },
        {
          path: '/EdgeAI/AIoTSurvey',
          element: <AIoTSurvey></AIoTSurvey>
        },
        {
          path: '/EdgeAI/Mercury',
          element: <Mercury></Mercury>
        },
        {
          path: '/EdgeAI/Distream',
          element: <Distream></Distream>
        },
        {
          path: '/FederatedLearningandSystems/FedAIoT',
          element: <FedAIoT></FedAIoT>
        },
        {
          path: '/FederatedLearningandSystems/GPT-FL',
          element: <GPTFL></GPTFL>
        },
        {
          path: '/FederatedLearningandSystems/FedRolex',
          element: <FedRolex></FedRolex>
        },
        {
          path: '/FederatedLearningandSystems/PyramidFL',
          element: <PyramidFL></PyramidFL>
        },
        {
          path: '/AutoML/DoesUnsupervisedArchitectureRepresentationLearningHelpNeuralArchitectureSearch',
          element: <DoesUnsupervisedArchitectureRepresentationLearningHelpNeuralArchitectureSearch></DoesUnsupervisedArchitectureRepresentationLearningHelpNeuralArchitectureSearch>
        },
        {
          path: '/AutoML/DeepAutoAugment',
          element: <DeepAutoAugment></DeepAutoAugment>
        },
        {
          path: '/AutoML/CATE',
          element: <CATE></CATE>
        },
        {
          path: '/AIforWirelessSensingandNetworking/NELoRa',
          element: <NELoRa></NELoRa>
        },
        {
          path: '/AIforWirelessSensingandNetworking/WiFiSeeItAll',
          element: <WiFiSeeItAll></WiFiSeeItAll>
        },
        {
          path: '/AIforWirelessSensingandNetworking/BodyScan',
          element: <BodyScan></BodyScan>
        },
        {
          path: '/AIforWirelessSensingandNetworking/HeadScan',
          element: <HeadScan></HeadScan>
        },
        {
          path: '/MobileHealth/MobileDeepPill',
          element: <MobileDeepPill></MobileDeepPill>
        },
        {
          path: '/MobileHealth/SharpEar',
          element: <SharpEar></SharpEar>
        },
        {
          path: '/MobileHealth/DeepASL',
          element: <DeepASL></DeepASL>
        },
        {
          path: '/MobileHealth/MobilePhoneSensorCorrelatesofDepressiveSymptomSeverityinDailyLifeBehavior',
          element: <MobilePhoneSensorCorrelatesofDepressiveSymptomSeverityinDailyLifeBehavior></MobilePhoneSensorCorrelatesofDepressiveSymptomSeverityinDailyLifeBehavior>
        },
        {
          path: '/EdgeAI/IoTinEraOfGAI',
          element: <IoTinEraOfGAI></IoTinEraOfGAI>
        },
        {
          path: '/LLM/EfficientLLM',
          element: <EfficientLLM></EfficientLLM>
        },
        {
          path: '/LLM/FambaV',
          element: <FambaV></FambaV>
        },
        {
          path: '/LLM/SVDLLM',
          element: <SVDLLM></SVDLLM>
        },
        {
          path: '/MobileHealth/MEIT',
          element: <MEIT></MEIT>
        },
        {
          path: '/LLM/D2O',
          element: <D2O></D2O>
        },
      ]
    },
  ])

  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
          {element}
      </Suspense>
    </div>

  )
}

export default Index