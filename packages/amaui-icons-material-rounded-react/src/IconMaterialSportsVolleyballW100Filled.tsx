import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsVolleyballW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsVolleyballW100Filled'

      short_name='SportsVolleyball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.575 10.375 12.35 5.5V3.3q3.075.125 5.338 2.1 2.262 1.975 2.887 4.975ZM6.925 14.55v-9.6q1-.75 2.113-1.138 1.112-.387 2.612-.512v8.5Zm-2.65 1.5q-.5-.925-.75-1.95t-.25-2.1q0-1.875.738-3.537Q4.75 6.8 6.225 5.5v9.45ZM8.4 19.925q-1.2-.575-2.15-1.375t-1.625-1.9L12 12.4l4.75 2.75Zm3.6.775q-.725 0-1.412-.088-.688-.087-1.338-.362l8.2-4.7 1.925 1.1q-1.225 1.9-3.162 2.975Q14.275 20.7 12 20.7Zm7.7-4.675L12.35 11.8V6.3l8.325 4.925q.075 1.25-.15 2.475-.225 1.225-.825 2.325Z"/>
    </Icon>
  );
});

IconMaterialSportsVolleyballW100Filled.displayName = 'AmauiIconMaterialSportsVolleyballW100Filled';

export default IconMaterialSportsVolleyballW100Filled;
