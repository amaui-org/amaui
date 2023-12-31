import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomDrawerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomDrawerW100'

      short_name='BottomDrawer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-588v374l68-68h424l68 68v-374H200Zm0 560h560v-146l-80-80H280l-80 80v146Zm0 0h560-560Z"/>
    </Icon>
  );
});

IconMaterialBottomDrawerW100.displayName = 'AmauiIconMaterialBottomDrawerW100';

export default IconMaterialBottomDrawerW100;
