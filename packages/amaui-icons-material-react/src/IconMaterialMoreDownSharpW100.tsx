import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreDownSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDownSharpW100'
      short_name='MoreDown'

      {...props}
    >
      <path d="M5.65 18.35V9.3h.7v8.35h8.35v.7Zm5-5V4.3h.7v8.35h8.35v.7Z"/>
    </Icon>
  );
});

IconMaterialMoreDownSharpW100.displayName = 'AmauiIconMaterialMoreDownSharpW100';

export default IconMaterialMoreDownSharpW100;
