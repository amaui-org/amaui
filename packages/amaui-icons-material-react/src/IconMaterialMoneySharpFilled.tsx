import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoneySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneySharpFilled'
      short_name='Money'

      {...props}
    >
      <path d="M14 16H19V8H14ZM16 14V10H17V14ZM8 16H13V8H8ZM10 14V10H11V14ZM5 16H7V8H5ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialMoneySharpFilled.displayName = 'AmauiIconMaterialMoneySharpFilled';

export default IconMaterialMoneySharpFilled;
