import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoodBankFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBankFilled'

      short_name='FoodBank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12Zm6-3h1v-4q.625 0 1.062-.438.438-.437.438-1.062v-3h-1v3H11v-3h-1v3h-.5v-3h-1v3q0 .625.438 1.062Q9.375 14 10 14Zm4 0h1V9.5q-.825 0-1.412.587Q13 10.675 13 11.5v3h1Z"/>
    </Icon>
  );
});

IconMaterialFoodBankFilled.displayName = 'AmauiIconMaterialFoodBankFilled';

export default IconMaterialFoodBankFilled;
