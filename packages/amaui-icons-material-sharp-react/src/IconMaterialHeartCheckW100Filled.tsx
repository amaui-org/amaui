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
      <path d="m440-190-22-20q-97-89-160.5-152t-100-110.5Q121-520 106.5-558T92-634q0-71 48.5-119.5T260-802q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q69 0 116.5 45.5T788-643q-17-5-34-7.5t-34-2.5q-88 1-150.5 58.5T507-442q0 37 12.5 73.5T559-300q-22 20-46 42.5T462-210l-22 20Zm278-160-77-76 20-20 57 57 141-142 20 20-161 161Z"/>
    </Icon>
  );
});

IconMaterialHeartCheckW100Filled.displayName = 'AmauiIconMaterialHeartCheckW100Filled';

export default IconMaterialHeartCheckW100Filled;
