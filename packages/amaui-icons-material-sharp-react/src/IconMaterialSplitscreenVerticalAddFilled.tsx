import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenVerticalAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenVerticalAddFilled'

      short_name='SplitscreenVerticalAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h320v720H120Zm400 0v-720h320v484q-10-2-20-3t-20-1q-83 0-141.5 58T600-161q0 11 1 21t3 20h-84Zm240 80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenVerticalAddFilled.displayName = 'AmauiIconMaterialSplitscreenVerticalAddFilled';

export default IconMaterialSplitscreenVerticalAddFilled;
