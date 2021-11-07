/*eslint-disable react/prop-types*/

import React from "react";
import MainViewContainer from "./main/MainViewContainer";
import FeaturesViewContainer from "./features/FeaturesViewContainer";
import FateLineViewContainer from "./fate/FateLineViewContainer";
import ZodiacViewContainer from "./zodiac/ZodiacViewContainer";
import NumerologyViewContainer from "./numerology/NumerologyViewContainer";
import WeeklyTestViewContainer from "./test/WeeklyTestViewContainer";
import DailyUpdateViewContainer from "./update/DailyUpdateViewContainer";
import WeeklyTestQuestion from "./test/components/question/WeeklyTestQuestion";
import PartnerSelector from "./zodiac/components/PartnerSelector";

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
    const key = props.scene.route.key;

    switch (key) {
        case "Main":
            return <MainViewContainer />
        case "Features":
            return <FeaturesViewContainer/>
        case "fate":
            return <FateLineViewContainer />
        case "zodiac":
            return <ZodiacViewContainer />
        case "numerology":
            return <NumerologyViewContainer />
        case "test":
            return <WeeklyTestViewContainer />
        case "update":
            return <DailyUpdateViewContainer />
        case "testQuestions" :
            return <WeeklyTestQuestion/>
        case 'partnerZodiac':
            return <PartnerSelector />
    }

    throw new Error('Unknown navigation key: ' + key);
}
