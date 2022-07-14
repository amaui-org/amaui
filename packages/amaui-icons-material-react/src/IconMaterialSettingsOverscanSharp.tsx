import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsOverscanSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanSharp'
      short_name='SettingsOverscan'

      {...props}
    >
      <path d="M10 9H14L12 7ZM17 14 19 12 17 10ZM7 14V10L5 12ZM12 17 14 15H10ZM2 20V4H22V20ZM4 18V6ZM4 18H20V6H4Z"/>
    </Icon>
  );
});

export default IconMaterialSettingsOverscanSharp;
