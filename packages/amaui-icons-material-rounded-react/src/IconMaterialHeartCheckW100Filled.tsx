import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeartCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartCheckW100Filled'

      short_name='HeartCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M868-520q5 4 5 9.5t-5 10.5L738-370q-8 8-20.5 8t-21.5-8l-46-46q-4-4-4-9.5t5-9.5q4-5 9.5-5t9.5 5l47 46 132-131q4-5 9.5-5t9.5 5ZM419-208l-1-2q-97-89-160.5-152t-100-110.5Q121-520 106.5-558T92-634q0-71 48.5-119.5T260-802q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q69 0 116.5 45.5T788-643q-16-5-33-7.5t-34-2.5q-88 0-151.5 58.5T506-441q0 37 12.5 73t40.5 68q-22 20-46 42.5T462-210l-2 2q-9 8-20.5 8t-20.5-8Z"/>
    </Icon>
  );
});

IconMaterialHeartCheckW100Filled.displayName = 'AmauiIconMaterialHeartCheckW100Filled';

export default IconMaterialHeartCheckW100Filled;
