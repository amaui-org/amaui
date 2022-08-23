import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoDrinksRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksRoundedW100Filled'
      short_name='NoDrinks'

      {...props}
    >
      <path d="M7.65 20.35Q7.5 20.35 7.4 20.25Q7.3 20.15 7.3 20Q7.3 19.85 7.4 19.75Q7.5 19.65 7.65 19.65H11.65V12.75L10.85 11.85L3.4 4.4Q3.3 4.3 3.288 4.162Q3.275 4.025 3.4 3.9Q3.525 3.775 3.65 3.775Q3.775 3.775 3.9 3.9L20.1 20.1Q20.2 20.2 20.213 20.337Q20.225 20.475 20.1 20.6Q19.975 20.725 19.85 20.725Q19.725 20.725 19.6 20.6L12.35 13.35V19.65H16.35Q16.5 19.65 16.6 19.75Q16.7 19.85 16.7 20Q16.7 20.15 16.6 20.25Q16.5 20.35 16.35 20.35ZM7.1 4.3H18.775Q18.975 4.3 19.113 4.45Q19.25 4.6 19.25 4.8Q19.25 4.9 19.2 4.987Q19.15 5.075 19.1 5.15L13.85 11.05L13.375 10.575L15.925 7.7H10.5L9.8 7H16.55L18.35 5H7.8ZM10.5 7.7H15.925L13.375 10.575Z"/>
    </Icon>
  );
});

IconMaterialNoDrinksRoundedW100Filled.displayName = 'AmauiIconMaterialNoDrinksRoundedW100Filled';

export default IconMaterialNoDrinksRoundedW100Filled;
