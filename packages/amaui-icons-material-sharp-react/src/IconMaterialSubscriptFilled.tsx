import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubscriptFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptFilled'

      short_name='Subscript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 20v-3h3v-1h-3v-1h4v3h-3v1h3v1ZM5.875 18l4.625-7.275L6.2 4h2.65l3.1 5h.1l3.075-5H17.8l-4.325 6.725L18.125 18H15.45l-3.4-5.425h-.1L8.55 18Z"/>
    </Icon>
  );
});

IconMaterialSubscriptFilled.displayName = 'AmauiIconMaterialSubscriptFilled';

export default IconMaterialSubscriptFilled;
