import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomDrawerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomDrawerW100Filled'

      short_name='BottomDrawer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-588v374l68-68h424l68 68v-374H200Z"/>
    </Icon>
  );
});

IconMaterialBottomDrawerW100Filled.displayName = 'AmauiIconMaterialBottomDrawerW100Filled';

export default IconMaterialBottomDrawerW100Filled;
