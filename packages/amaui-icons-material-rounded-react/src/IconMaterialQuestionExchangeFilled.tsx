import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuestionExchangeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuestionExchangeFilled'

      short_name='QuestionExchange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 1016q-112 0-206-51T120 829v67q0 17-11.5 28.5T80 936q-17 0-28.5-11.5T40 896V736q0-17 11.5-28.5T80 696h160q17 0 28.5 11.5T280 736q0 17-11.5 28.5T240 776h-59q48 72 126.5 116T480 936q141 0 242.5-94T838 611q2-16 14-25.5t28-9.5q17 0 29 10.5t10 25.5q-7 85-44 158.5t-96 128q-59 54.5-135.5 86T480 1016Zm0-800q-141 0-242.5 94T122 541q-2 16-14 25.5T80 576q-17 0-29-10.5T41 540q7-85 44-158.5t96-128q59-54.5 135.5-86T480 136q112 0 206 51t154 136v-67q0-17 11.5-28.5T880 216q17 0 28.5 11.5T920 256v160q0 17-11.5 28.5T880 456H720q-17 0-28.5-11.5T680 416q0-17 11.5-28.5T720 376h59q-48-72-126.5-116T480 216Zm0 600q21 0 35.5-14.5T530 766q0-21-14.5-36T480 715q-21 0-35.5 14.5T430 765q0 21 14.5 36t35.5 15Zm80-250q35-35 46.5-56.5T618 458q0-56-40-89t-98-33q-40 0-71 16.5T358 401q-8 13-2.5 28t19.5 21q14 6 27-1t23-19q10-12 24-19t31-7q27 0 45.5 15.5T544 461q0 17-8 34t-34 40q-25 22-37.5 43T447 626q-2 15 8 26.5t26 11.5q15 0 25-11.5t14-26.5q4-17 13.5-30t26.5-30Z"/>
    </Icon>
  );
});

IconMaterialQuestionExchangeFilled.displayName = 'AmauiIconMaterialQuestionExchangeFilled';

export default IconMaterialQuestionExchangeFilled;
