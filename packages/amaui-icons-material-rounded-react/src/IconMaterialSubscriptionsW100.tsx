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
      <path d="M8 4.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T8 3.9h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM5 7.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T5 6.6h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-.2 13.4q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2v-8.4q0-.65.425-1.075Q4.15 9.3 4.8 9.3h14.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm-.05-.7H19.2q.35 0 .575-.225Q20 19.55 20 19.2v-8.4q0-.35-.225-.575Q19.55 10 19.2 10H4.8q-.35 0-.575.225Q4 10.45 4 10.8v8.4q0 .35.2.575.2.225.55.225Zm7.075-2.975 2.1-1.4q.35-.225.35-.625t-.35-.625l-2.1-1.4q-.375-.275-.775-.05-.4.225-.4.675v2.8q0 .45.4.675.4.225.775-.05ZM4 10v10-10Z"/>
    </Icon>
  );
});

IconMaterialSubscriptionsW100.displayName = 'AmauiIconMaterialSubscriptionsW100';

export default IconMaterialSubscriptionsW100;
