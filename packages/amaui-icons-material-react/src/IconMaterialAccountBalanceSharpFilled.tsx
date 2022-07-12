import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBalanceSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceSharpFilled'
      short_name='AccountBalance'

      {...props}
    >
      <path d="M5 17V10H7V17ZM11 17V10H13V17ZM2 21V19H22V21ZM17 17V10H19V17ZM2 8V6L12 1L22 6V8Z"/>
    </Icon>
  )
});

export default IconMaterialAccountBalanceSharpFilled;
