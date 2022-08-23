import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenRoundedW100Filled'
      short_name='AddToHomeScreen'

      {...props}
    >
      <path d="M4.15 15.85Q4.025 15.725 4.025 15.6Q4.025 15.475 4.15 15.35L10.15 9.35H6Q5.85 9.35 5.75 9.25Q5.65 9.15 5.65 9Q5.65 8.85 5.75 8.75Q5.85 8.65 6 8.65H10.6Q10.925 8.65 11.138 8.862Q11.35 9.075 11.35 9.4V14Q11.35 14.15 11.25 14.25Q11.15 14.35 11 14.35Q10.85 14.35 10.75 14.25Q10.65 14.15 10.65 14V9.85L4.65 15.85Q4.55 15.95 4.412 15.962Q4.275 15.975 4.15 15.85ZM8.8 21.7Q8.175 21.7 7.738 21.262Q7.3 20.825 7.3 20.2V17.1H8V18.65H18V5.35H8V6.9H7.3V3.8Q7.3 3.175 7.738 2.737Q8.175 2.3 8.8 2.3H17.2Q17.825 2.3 18.262 2.737Q18.7 3.175 18.7 3.8V20.2Q18.7 20.825 18.262 21.262Q17.825 21.7 17.2 21.7Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenRoundedW100Filled.displayName = 'AmauiIconMaterialAddToHomeScreenRoundedW100Filled';

export default IconMaterialAddToHomeScreenRoundedW100Filled;
