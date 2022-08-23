import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreDownRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDownRoundedW100Filled'
      short_name='MoreDown'

      {...props}
    >
      <path d="M5.625 18.35V9.3h.7v8.35h8.35v.7Zm5-5V4.3h.7v8.35h8.35v.7Z"/>
    </Icon>
  );
});

IconMaterialMoreDownRoundedW100Filled.displayName = 'AmauiIconMaterialMoreDownRoundedW100Filled';

export default IconMaterialMoreDownRoundedW100Filled;
