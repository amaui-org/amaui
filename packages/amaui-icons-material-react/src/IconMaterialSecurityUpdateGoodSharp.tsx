import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSecurityUpdateGoodSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateGoodSharp'
      short_name='SecurityUpdateGood'

      {...props}
    >
      <path d="M11.05 15 8.25 12.2 9.65 10.8 11.05 12.2 14.6 8.65 16 10.05ZM5 23V1H19V23ZM7 18H17V6H7ZM7 21H17V20H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateGoodSharp.displayName = 'AmauiIconMaterialSecurityUpdateGoodSharp';

export default IconMaterialSecurityUpdateGoodSharp;
