import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailSharpW100Filled'
      short_name='Mail'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM12 11.85 20 6.55V6L12 11L4 6V6.55Z"/>
    </Icon>
  )
});

export default IconMaterialMailSharpW100Filled;
