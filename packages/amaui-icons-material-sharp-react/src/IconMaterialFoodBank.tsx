import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoodBank = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBank'

      short_name='FoodBank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12Zm2-2h12v-9l-6-4.5L6 10Zm4-1h1v-4q.625 0 1.062-.438.438-.437.438-1.062v-3h-1v3H11v-3h-1v3h-.5v-3h-1v3q0 .625.438 1.062Q9.375 14 10 14Zm4 0h1V9.5q-.825 0-1.412.587Q13 10.675 13 11.5v3h1Zm-8 1h12H6Z"/>
    </Icon>
  );
});

IconMaterialFoodBank.displayName = 'AmauiIconMaterialFoodBank';

export default IconMaterialFoodBank;
