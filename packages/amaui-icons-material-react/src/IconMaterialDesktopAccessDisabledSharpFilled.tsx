import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopAccessDisabledSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabledSharpFilled'
      short_name='DesktopAccessDisabled'

      {...props}
    >
      <path d="M20.7 17.85 5.85 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.625 21.638 17.125Q21.275 17.625 20.7 17.85ZM20.5 23.3 15.15 18H14V20H16V22H8V20H10V18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4.85L0.7 3.5L2.1 2.1L21.9 21.9Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledSharpFilled.displayName = 'AmauiIconMaterialDesktopAccessDisabledSharpFilled';

export default IconMaterialDesktopAccessDisabledSharpFilled;
