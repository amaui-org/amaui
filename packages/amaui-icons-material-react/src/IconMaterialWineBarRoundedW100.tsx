import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWineBarRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarRoundedW100'
      short_name='WineBar'

      {...props}
    >
      <path d="M9.25 19.7Q9.1 19.7 9 19.6Q8.9 19.5 8.9 19.35Q8.9 19.2 9 19.1Q9.1 19 9.25 19H11.65V14.35Q9.5 14.025 8.325 12.512Q7.15 11 7.15 9V5.05Q7.15 4.725 7.363 4.512Q7.575 4.3 7.9 4.3H16.1Q16.425 4.3 16.638 4.512Q16.85 4.725 16.85 5.05V9Q16.85 11 15.675 12.512Q14.5 14.025 12.35 14.35V19H14.75Q14.9 19 15 19.1Q15.1 19.2 15.1 19.35Q15.1 19.5 15 19.6Q14.9 19.7 14.75 19.7ZM12 13.65Q13.625 13.65 14.825 12.4Q16.025 11.15 16.15 9.35H7.85Q7.975 11.15 9.175 12.4Q10.375 13.65 12 13.65ZM7.85 8.65H16.15V5H7.85ZM12 13.65Q12 13.65 12 13.65Q12 13.65 12 13.65Q12 13.65 12 13.65Q12 13.65 12 13.65Z"/>
    </Icon>
  );
});

IconMaterialWineBarRoundedW100.displayName = 'AmauiIconMaterialWineBarRoundedW100';

export default IconMaterialWineBarRoundedW100;
