import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRespiratoryRateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RespiratoryRateFilled'

      short_name='RespiratoryRate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M500 1016q-25 0-42.5-17.5T440 956V809l53-141q9-23 29.5-37.5T568 616h32v102l-54 54 28 28 66-67V536h80v197l66 67 28-28-54-55V616h32q25 0 45.5 14.5T867 668l53 141v147q0 25-17.5 42.5T860 1016h-80q-25 0-42.5-17.5T720 956V846l-40-40-40 40v110q0 25-17.5 42.5T580 1016h-80ZM280 647l-45-89q-5-10-14.5-16t-20.5-6H80V256h800v300H780v-80H580v80l-25 1-79-159q-5-10-15-15t-21-5q-11 0-21 5t-15 15L280 647ZM80 896V616h95l69 138q5 11 14.5 16.5T280 776q11 0 20.5-5.5T315 754l125-248 40 81q-14 12-25.5 27T436 647l-56 151v98H80Z"/>
    </Icon>
  );
});

IconMaterialRespiratoryRateFilled.displayName = 'AmauiIconMaterialRespiratoryRateFilled';

export default IconMaterialRespiratoryRateFilled;
