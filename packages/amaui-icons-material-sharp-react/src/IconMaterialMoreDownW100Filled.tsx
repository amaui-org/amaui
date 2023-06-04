import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDownW100Filled'

      short_name='MoreDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.625 18.35V9.3h.7v8.35h8.35v.7Zm5-5V4.3h.7v8.35h8.35v.7Z"/>
    </Icon>
  );
});

IconMaterialMoreDownW100Filled.displayName = 'AmauiIconMaterialMoreDownW100Filled';

export default IconMaterialMoreDownW100Filled;
