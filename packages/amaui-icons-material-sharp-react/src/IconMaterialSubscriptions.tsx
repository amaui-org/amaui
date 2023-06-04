import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubscriptions = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subscriptions'

      short_name='Subscriptions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 4V2h10v2ZM4 7V5h16v2ZM2 22V8h20v14Zm2-2h16V10H4Zm6-1 6-4-6-4Zm-6-9v10Z"/>
    </Icon>
  );
});

IconMaterialSubscriptions.displayName = 'AmauiIconMaterialSubscriptions';

export default IconMaterialSubscriptions;
