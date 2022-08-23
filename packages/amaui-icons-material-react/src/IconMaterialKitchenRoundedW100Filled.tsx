import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenRoundedW100Filled'
      short_name='Kitchen'

      {...props}
    >
      <path d="M5.3 9.5V4.8Q5.3 4.175 5.738 3.737Q6.175 3.3 6.8 3.3H17.2Q17.825 3.3 18.262 3.737Q18.7 4.175 18.7 4.8V9.5ZM8.6 8Q8.75 8 8.85 7.9Q8.95 7.8 8.95 7.65V5.85Q8.95 5.7 8.85 5.6Q8.75 5.5 8.6 5.5Q8.45 5.5 8.35 5.6Q8.25 5.7 8.25 5.85V7.65Q8.25 7.8 8.35 7.9Q8.45 8 8.6 8ZM8.6 15.85Q8.75 15.85 8.85 15.75Q8.95 15.65 8.95 15.5V12.05Q8.95 11.9 8.85 11.8Q8.75 11.7 8.6 11.7Q8.45 11.7 8.35 11.8Q8.25 11.9 8.25 12.05V15.5Q8.25 15.65 8.35 15.75Q8.45 15.85 8.6 15.85ZM6.8 20.7Q6.175 20.7 5.738 20.262Q5.3 19.825 5.3 19.2V10.2H18.7V19.2Q18.7 19.825 18.262 20.262Q17.825 20.7 17.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialKitchenRoundedW100Filled.displayName = 'AmauiIconMaterialKitchenRoundedW100Filled';

export default IconMaterialKitchenRoundedW100Filled;
