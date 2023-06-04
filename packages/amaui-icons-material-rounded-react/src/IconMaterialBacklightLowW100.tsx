import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBacklightLowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightLowW100'

      short_name='BacklightLow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M126 670q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h60q5.95 0 9.975 4.035 4.025 4.035 4.025 10T195.975 666q-4.025 4-9.975 4h-60Zm156-212q-4 4-9.667 4-5.666 0-9.333-4l-44-44q-4-4-4-9t4-9q4-4 9.667-4 5.666 0 9.333 4l44 44q4 4 4 9t-4 9Zm58 306q-14.167 0-24.083-9.882-9.917-9.883-9.917-24Q306 716 315.917 706q9.916-10 24.083-10h280q14.167 0 24.083 9.882 9.917 9.883 9.917 24Q654 744 644.083 754q-9.916 10-24.083 10H340Zm139.965-388Q474 376 470 371.975T466 362v-60q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v60q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM676 457q-4-4-3.5-10t4.5-10l43-42q4-4 10-4t10.174 5Q744 401 744 406.5t-5 9.5l-43 41q-4 4-10 4.5t-10-4.5Zm98 213q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h60q5.95 0 9.975 4.035 4.025 4.035 4.025 10T843.975 666q-4.025 4-9.975 4h-60Z"/>
    </Icon>
  );
});

IconMaterialBacklightLowW100.displayName = 'AmauiIconMaterialBacklightLowW100';

export default IconMaterialBacklightLowW100;
