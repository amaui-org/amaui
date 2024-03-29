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
      <path d="M500 1016q-25 0-42.5-17.5T440 956V824q0-8 1.5-15t3.5-14l48-127q9-23 29.5-37.5T568 616h32v102l-40 40q-6 6-6 14t6 14q6 6 13.5 6t13.5-6l53-53V576q0-17 11.5-28.5T680 536q17 0 28.5 11.5T720 576v157l52 53q6 6 14 6t14-6q6-6 6-14.5t-6-14.5l-40-40V616h32q25 0 45.5 14.5T867 668l48 127q2 7 3.5 14t1.5 15v132q0 25-17.5 42.5T860 1016h-80q-25 0-42.5-17.5T720 956V846l-40-40-40 40v110q0 25-17.5 42.5T580 1016h-80ZM280 647l-45-89q-5-10-14.5-16t-20.5-6H80V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v220H780q0-42-29-71t-71-29q-42 0-71 29t-29 71l-25 1-79-159q-5-10-15-15t-21-5q-11 0-21 5t-15 15L280 647ZM160 896q-33 0-56.5-23.5T80 816V616h95l69 138q5 11 14.5 16.5T280 776q11 0 20.5-5.5T315 754l125-248 40 81q-14 12-25.5 27T436 647l-51 138q-2 7-3.5 13.5T380 812v84H160Z"/>
    </Icon>
  );
});

IconMaterialRespiratoryRateFilled.displayName = 'AmauiIconMaterialRespiratoryRateFilled';

export default IconMaterialRespiratoryRateFilled;
