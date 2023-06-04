import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuestionExchangeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuestionExchangeW100'

      short_name='QuestionExchange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 964q-125 0-222.5-69T115 709v125q0 6-4 10t-10 4q-6 0-10-4t-4-10V690q0-13 8.5-21.5T117 660h144q6 0 10 4t4 10q0 6-4 10t-10 4H138q36 112 131 180t211 68q137 0 238-89t119-228q1-7 5-12t11-5q6 0 9.5 5.5T865 620q-8 73-41 135.5t-84.5 109q-51.5 46.5-118 73T480 964Zm0-748q-131 0-234.5 85.5T123 532q-1 7-5 12.5t-11 5.5q-7 0-10-5.5T95 531q10-77 44.5-140t86-108q51.5-45 117-70T480 188q122 0 222.5 69.5T845 447V318q0-6 4-10t10-4q6 0 10 4t4 10v144q0 13-8.5 21.5T843 492H699q-6 0-10-4t-4-10q0-6 4-10t10-4h123q-33-108-128.5-178T480 216Zm2 555q11 0 18.5-7.5T508 745q0-11-7.5-18.5T482 719q-11 0-18.5 7.5T456 745q0 11 7.5 18.5T482 771Zm54-204q27-27 39.5-47.5T588 473q0-45-29.5-72.5T484 373q-32 0-58 14.5T383 428q-4 6-2.5 12.5t7.5 8.5q6 2 12-.5t10-8.5q12-18 31-28.5t41-10.5q33 0 55.5 20t22.5 52q0 21-11 37t-29 33q-26 26-38 46t-15 40q-1 6 3 11t10 5q6 0 10-4.5t6-10.5q3-17 12-30.5t28-32.5Z"/>
    </Icon>
  );
});

IconMaterialQuestionExchangeW100.displayName = 'AmauiIconMaterialQuestionExchangeW100';

export default IconMaterialQuestionExchangeW100;
