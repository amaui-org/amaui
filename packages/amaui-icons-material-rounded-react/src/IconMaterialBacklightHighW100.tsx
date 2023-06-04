import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBacklightHighW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightHighW100'

      short_name='BacklightHigh'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M86 670q-5.95 0-9.975-4.035-4.025-4.035-4.025-10T76.025 646q4.025-4 9.975-4h100q5.95 0 9.975 4.035 4.025 4.035 4.025 10T195.975 666q-4.025 4-9.975 4H86Zm196-212q-4 4-9.667 4-5.666 0-9.333-4l-74-74q-4-3.5-4-8.75t3.8-9.25q4.145-4 9.673-4 5.527 0 9.527 4l74 74q4 4 4 9t-4 9Zm58 306q-14.167 0-24.083-9.882-9.917-9.883-9.917-24Q306 716 315.917 706q9.916-10 24.083-10h280q14.167 0 24.083 9.882 9.917 9.883 9.917 24Q654 744 644.083 754q-9.916 10-24.083 10H340Zm139.965-388Q474 376 470 371.975T466 362V222q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v140q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM676 457.5q-4-4.5-3.5-10.5t4.5-10l73-71q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-73 71q-4 4-10 4.5t-10-4ZM774 670q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h100q5.95 0 9.975 4.035 4.025 4.035 4.025 10T883.975 666q-4.025 4-9.975 4H774Z"/>
    </Icon>
  );
});

IconMaterialBacklightHighW100.displayName = 'AmauiIconMaterialBacklightHighW100';

export default IconMaterialBacklightHighW100;
