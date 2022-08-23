import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreDownRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDownRoundedW100'
      short_name='MoreDown'

      {...props}
    >
      <path d="M5.65 18.35V9.3h.7v8.35h8.35v.7Zm5-5V4.3h.7v8.35h8.35v.7Z"/>
    </Icon>
  );
});

IconMaterialMoreDownRoundedW100.displayName = 'AmauiIconMaterialMoreDownRoundedW100';

export default IconMaterialMoreDownRoundedW100;
