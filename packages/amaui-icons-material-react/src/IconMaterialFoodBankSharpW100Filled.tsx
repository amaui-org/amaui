import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFoodBankSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBankSharpW100Filled'
      short_name='FoodBank'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.575L18.7 9.65V19.7ZM10.4 17.15H11.2V13.95Q11.7 13.95 12.05 13.6Q12.4 13.25 12.4 12.75V10.35H11.6V12.75H11.2V10.35H10.4V12.75H10V10.35H9.2V12.75Q9.2 13.25 9.55 13.6Q9.9 13.95 10.4 13.95ZM13.6 17.15H14.4V10.35Q13.75 10.35 13.275 10.825Q12.8 11.3 12.8 11.95V14.35H13.6Z"/>
    </Icon>
  );
});

IconMaterialFoodBankSharpW100Filled.displayName = 'AmauiIconMaterialFoodBankSharpW100Filled';

export default IconMaterialFoodBankSharpW100Filled;
