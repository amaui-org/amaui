import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchVideoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideoSharpFilled'
      short_name='SwitchVideo'

      {...props}
    >
      <path d="M7.5 15.5 8.9 14.1 7.8 13H12.2L11.1 14.1L12.5 15.5L16 12L12.5 8.5L11.1 9.9L12.2 11H7.8L8.9 9.9L7.5 8.5L4 12ZM2 20V4H18V10.5L22 6.5V17.5L18 13.5V20Z"/>
    </Icon>
  );
});

IconMaterialSwitchVideoSharpFilled.displayName = 'AmauiIconMaterialSwitchVideoSharpFilled';

export default IconMaterialSwitchVideoSharpFilled;
