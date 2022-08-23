import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailTwoTone'
      short_name='Mail'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 6H4l8 4.99zM4 8v10h16V8l-8 5z" opacity=".3"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"/>
    </Icon>
  );
});

IconMaterialMailTwoTone.displayName = 'AmauiIconMaterialMailTwoTone';

export default IconMaterialMailTwoTone;
