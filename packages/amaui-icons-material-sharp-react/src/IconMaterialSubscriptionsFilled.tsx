import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubscriptionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsFilled'

      short_name='Subscriptions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 4V2h10v2ZM4 7V5h16v2ZM2 22V8h20v14Zm8-3 6-4-6-4Z"/>
    </Icon>
  );
});

IconMaterialSubscriptionsFilled.displayName = 'AmauiIconMaterialSubscriptionsFilled';

export default IconMaterialSubscriptionsFilled;
