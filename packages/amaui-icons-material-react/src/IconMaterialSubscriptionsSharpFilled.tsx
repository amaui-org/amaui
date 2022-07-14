import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubscriptionsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsSharpFilled'
      short_name='Subscriptions'

      {...props}
    >
      <path d="M7 4V2H17V4ZM4 7V5H20V7ZM2 22V8H22V22ZM10 19 16 15 10 11Z"/>
    </Icon>
  );
});

export default IconMaterialSubscriptionsSharpFilled;
