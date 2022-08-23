import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodSharp'
      short_name='Aod'

      {...props}
    >
      <path d="M8 11.5V10H16V11.5ZM9 14.5V13H15V14.5ZM5 23V1H19V23ZM7 18H17V6H7ZM7 21H17V20H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  );
});

IconMaterialAodSharp.displayName = 'AmauiIconMaterialAodSharp';

export default IconMaterialAodSharp;
