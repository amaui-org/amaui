import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomDrawerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomDrawerFilled'

      short_name='BottomDrawer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-640v330l50-50h460l50 50v-330H200Z"/>
    </Icon>
  );
});

IconMaterialBottomDrawerFilled.displayName = 'AmauiIconMaterialBottomDrawerFilled';

export default IconMaterialBottomDrawerFilled;
