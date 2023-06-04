import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestaurantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantFilled'

      short_name='Restaurant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 22v-8h-3V7q0-2.075 1.463-3.537Q16.925 2 19 2v20ZM7 22v-9.15q-1.275-.35-2.137-1.4Q4 10.4 4 9V2h2v7h1V2h2v7h1V2h2v7q0 1.4-.863 2.45-.862 1.05-2.137 1.4V22Z"/>
    </Icon>
  );
});

IconMaterialRestaurantFilled.displayName = 'AmauiIconMaterialRestaurantFilled';

export default IconMaterialRestaurantFilled;
