import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenAddFilled'

      short_name='SplitscreenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-520v-320h720v320H120Zm0 400v-320h720v84q-11-2-20.5-3t-19.5-1q-85 0-142.5 59T600-160q0 11 1 21t3 19H120Zm640 80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenAddFilled.displayName = 'AmauiIconMaterialSplitscreenAddFilled';

export default IconMaterialSplitscreenAddFilled;
