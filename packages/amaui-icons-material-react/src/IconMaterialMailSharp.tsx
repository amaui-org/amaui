import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailSharp'
      short_name='Mail'

      {...props}
    >
      <path d="M2 20V4H22V20ZM12 13 4 8V18H20V8ZM12 11 20 6H4ZM4 8V6V8Z"/>
    </Icon>
  );
});

IconMaterialMailSharp.displayName = 'AmauiIconMaterialMailSharp';

export default IconMaterialMailSharp;
