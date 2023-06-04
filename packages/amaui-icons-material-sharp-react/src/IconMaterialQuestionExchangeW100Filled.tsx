import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuestionExchangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuestionExchangeW100Filled'

      short_name='QuestionExchange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 964q-125 0-222.5-69T115 709v139H87V660h188v28H138q36 112 131 180t211 68q71 0 133.5-25T724 841.5q48-44.5 78.5-106T839 602h28q-5 76-37.5 142t-84 115q-51.5 49-120 77T480 964ZM93 550q7-81 40.5-147.5t86-114.5Q272 240 339 214t141-26q122 0 222.5 69.5T845 447V304h28v188H685v-28h137q-33-108-128.5-178T480 216q-67 0-129 24t-111 67.5q-49 43.5-81 105T121 550H93Zm389 221q11 0 18.5-7.5T508 745q0-11-7.5-18.5T482 719q-11 0-18.5 7.5T456 745q0 11 7.5 18.5T482 771Zm-16-126h28q2-24 10.5-39.5T536 567q27-27 39.5-47.5T588 473q0-45-29.5-72.5T484 373q-37 0-65 18.5T374 443l28 12q11-24 32.5-39t47.5-15q33 0 55.5 20t22.5 52q0 21-11 37t-29 33q-32 30-43 53t-11 49Z"/>
    </Icon>
  );
});

IconMaterialQuestionExchangeW100Filled.displayName = 'AmauiIconMaterialQuestionExchangeW100Filled';

export default IconMaterialQuestionExchangeW100Filled;
