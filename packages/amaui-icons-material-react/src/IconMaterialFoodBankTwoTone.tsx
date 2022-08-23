import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFoodBankTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBankTwoTone'
      short_name='FoodBank'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M12,5.5l6,4.5v9H6v-9L12,5.5 M11.5,9.5v3H11v-3h-1v3H9.5v-3h-1v3c0,0.83,0.67,1.5,1.5,1.5v4h1v-4 c0.83,0,1.5-0.67,1.5-1.5v-3H11.5z M13,11.5v3h1V18h1V9.5C13.9,9.5,13,10.4,13,11.5z" opacity=".3"/><path d="M12,5.5l6,4.5v9H6v-9L12,5.5 M12,3L4,9v12h16V9L12,3L12,3z M11.5,9.5v3H11v-3h-1v3H9.5v-3h-1v3c0,0.83,0.67,1.5,1.5,1.5v4h1 v-4c0.83,0,1.5-0.67,1.5-1.5v-3H11.5z M13,11.5v3h1V18h1V9.5C13.9,9.5,13,10.4,13,11.5z"/>
    </Icon>
  );
});

IconMaterialFoodBankTwoTone.displayName = 'AmauiIconMaterialFoodBankTwoTone';

export default IconMaterialFoodBankTwoTone;
