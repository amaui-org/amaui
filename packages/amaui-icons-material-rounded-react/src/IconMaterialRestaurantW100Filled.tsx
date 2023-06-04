import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestaurantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantW100Filled'

      short_name='Restaurant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 21.35q-.15 0-.25-.1t-.1-.25v-7.65h-.8q-.625 0-1.062-.438-.438-.437-.438-1.062V7q0-1.55.788-2.788.787-1.237 2.212-1.512V21q0 .15-.1.25t-.25.1Zm-9 0q-.15 0-.25-.1t-.1-.25v-8.65q-1.125-.125-1.912-.963Q4.95 10.55 4.95 9.3V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v6.3h2V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v6.3h2V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v6.3q0 1.25-.788 2.087-.787.838-1.912.963V21q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRestaurantW100Filled.displayName = 'AmauiIconMaterialRestaurantW100Filled';

export default IconMaterialRestaurantW100Filled;
