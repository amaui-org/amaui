import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubscriptionsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsSharpW100'
      short_name='Subscriptions'

      {...props}
    >
      <path d="M7.65 4.6V3.9H16.35V4.6ZM4.65 7.3V6.6H19.35V7.3ZM3.3 20.7V9.3H20.7V20.7ZM4 20H20V10H4ZM10.65 17.8 14.85 15 10.65 12.2ZM4 10V20Z"/>
    </Icon>
  );
});

IconMaterialSubscriptionsSharpW100.displayName = 'AmauiIconMaterialSubscriptionsSharpW100';

export default IconMaterialSubscriptionsSharpW100;
