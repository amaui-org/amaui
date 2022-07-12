import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailSharpW100'
      short_name='Mail'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM12 11.85 4 6.55V18H20V6.55ZM12 11 19.6 6H4.4ZM4 6.55V6V6.55V18Z"/>
    </Icon>
  )
});

export default IconMaterialMailSharpW100;
