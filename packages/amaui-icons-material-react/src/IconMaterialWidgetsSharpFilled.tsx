import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWidgetsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsSharpFilled'
      short_name='Widgets'

      {...props}
    >
      <path d="M16.65 13 11 7.35 16.65 1.7 22.3 7.35ZM3 11V3H11V11ZM13 21V13H21V21ZM3 21V13H11V21Z"/>
    </Icon>
  )
});

export default IconMaterialWidgetsSharpFilled;
