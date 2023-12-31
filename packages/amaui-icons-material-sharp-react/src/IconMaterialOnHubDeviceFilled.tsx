import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOnHubDeviceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnHubDeviceFilled'

      short_name='OnHubDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-80h320v80H320Zm0-120-47-600h414l-47 600H320Z"/>
    </Icon>
  );
});

IconMaterialOnHubDeviceFilled.displayName = 'AmauiIconMaterialOnHubDeviceFilled';

export default IconMaterialOnHubDeviceFilled;
