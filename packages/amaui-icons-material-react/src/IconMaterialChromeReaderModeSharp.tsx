import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChromeReaderModeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeSharp'
      short_name='ChromeReaderMode'

      {...props}
    >
      <path d="M2 20V4H22V20ZM4 18H11V6H4ZM13 18H20V6H13ZM14 10H19V8.5H14ZM14 12.5H19V11H14ZM14 15H19V13.5H14ZM4 6V18Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeSharp.displayName = 'AmauiIconMaterialChromeReaderModeSharp';

export default IconMaterialChromeReaderModeSharp;
