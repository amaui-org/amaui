import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLogoutRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutRoundedW100'
      short_name='Logout'

      {...props}
    >
      <path d="M16.1 15.5Q15.975 15.375 15.975 15.25Q15.975 15.125 16.1 15L18.1 13H9.65Q9.5 13 9.4 12.9Q9.3 12.8 9.3 12.65Q9.3 12.5 9.4 12.4Q9.5 12.3 9.65 12.3H18.1L16.075 10.275Q15.975 10.175 15.975 10.05Q15.975 9.925 16.1 9.8Q16.225 9.675 16.35 9.675Q16.475 9.675 16.6 9.8L18.925 12.125Q19.05 12.25 19.1 12.375Q19.15 12.5 19.15 12.65Q19.15 12.8 19.1 12.925Q19.05 13.05 18.925 13.175L16.575 15.525Q16.475 15.625 16.35 15.625Q16.225 15.625 16.1 15.5ZM6.05 21Q5.4 21 4.975 20.575Q4.55 20.15 4.55 19.5V5.8Q4.55 5.15 4.975 4.725Q5.4 4.3 6.05 4.3H11.95Q12.1 4.3 12.2 4.4Q12.3 4.5 12.3 4.65Q12.3 4.8 12.2 4.9Q12.1 5 11.95 5H6.05Q5.75 5 5.5 5.25Q5.25 5.5 5.25 5.8V19.5Q5.25 19.8 5.5 20.05Q5.75 20.3 6.05 20.3H11.95Q12.1 20.3 12.2 20.4Q12.3 20.5 12.3 20.65Q12.3 20.8 12.2 20.9Q12.1 21 11.95 21Z"/>
    </Icon>
  );
});

IconMaterialLogoutRoundedW100.displayName = 'AmauiIconMaterialLogoutRoundedW100';

export default IconMaterialLogoutRoundedW100;
