import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubscriptionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsW100Filled'

      short_name='Subscriptions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 4.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T8 3.9h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM5 7.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T5 6.6h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-.2 13.4q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2v-8.4q0-.65.425-1.075Q4.15 9.3 4.8 9.3h14.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm7.025-3.675 2.1-1.4q.325-.225.325-.625t-.325-.625l-2.1-1.4q-.375-.275-.775-.05-.4.225-.4.675v2.8q0 .45.4.675.4.225.775-.05Z"/>
    </Icon>
  );
});

IconMaterialSubscriptionsW100Filled.displayName = 'AmauiIconMaterialSubscriptionsW100Filled';

export default IconMaterialSubscriptionsW100Filled;
