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
      <path d="M16.65 21.35v-8h-2.3V7q0-1.55.788-2.788.787-1.237 2.212-1.512v18.65Zm-9 0v-9q-1.125-.125-1.912-.963Q4.95 10.55 4.95 9.3V2.65h.7V9.3h2V2.65h.7V9.3h2V2.65h.7V9.3q0 1.25-.788 2.087-.787.838-1.912.963v9Z"/>
    </Icon>
  );
});

IconMaterialRestaurantW100Filled.displayName = 'AmauiIconMaterialRestaurantW100Filled';

export default IconMaterialRestaurantW100Filled;
