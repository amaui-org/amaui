import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMatchCase = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatchCase'

      short_name='MatchCase'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m264 674-29 81q-3 10-11 15.5t-18 5.5q-17 0-27-14t-4-30l126-334q4-10 12-16t19-6h26q11 0 19 6t12 16l126 335q6 16-3.5 29.5T485 776q-11 0-19-6t-12-16l-28-80H264Zm21-58h120l-58-166h-4l-58 166Zm369 171q-49 0-77-25.5T549 692q0-42 32.5-68.5T665 597q23 0 42.5 3.5T741 612v-14q0-27-18.5-43T672 539q-15 0-28.5 4.5T619 556q-9 7-20 8t-20-6q-9-7-10.5-17.5T575 522q19-17 43-26t55-9q62 0 95 29.5t33 85.5v152q0 12-8.5 20.5T772 783q-12 0-21-9t-9-21v-9h-3q-13 20-35 31.5T654 787Zm10-50q32 0 54.5-22.5T741 660q-14-8-32-12t-33-4q-32 0-49 12.5T610 692q0 20 15 32.5t39 12.5Z"/>
    </Icon>
  );
});

IconMaterialMatchCase.displayName = 'AmauiIconMaterialMatchCase';

export default IconMaterialMatchCase;
