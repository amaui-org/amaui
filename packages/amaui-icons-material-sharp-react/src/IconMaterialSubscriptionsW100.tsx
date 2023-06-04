import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubscriptionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsW100'

      short_name='Subscriptions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 4.6v-.7h8.7v.7Zm-3 2.7v-.7h14.7v.7ZM3.3 20.7V9.3h17.4v11.4ZM4 20h16V10H4Zm6.65-2.2 4.2-2.8-4.2-2.8ZM4 10v10Z"/>
    </Icon>
  );
});

IconMaterialSubscriptionsW100.displayName = 'AmauiIconMaterialSubscriptionsW100';

export default IconMaterialSubscriptionsW100;
