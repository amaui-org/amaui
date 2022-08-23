import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubscriptionsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsSharp'
      short_name='Subscriptions'

      {...props}
    >
      <path d="M7 4V2H17V4ZM4 7V5H20V7ZM2 22V8H22V22ZM4 20H20V10H4ZM10 19 16 15 10 11ZM4 10V20Z"/>
    </Icon>
  );
});

IconMaterialSubscriptionsSharp.displayName = 'AmauiIconMaterialSubscriptionsSharp';

export default IconMaterialSubscriptionsSharp;
