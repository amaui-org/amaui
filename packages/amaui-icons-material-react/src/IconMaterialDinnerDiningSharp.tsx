import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDinnerDiningSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DinnerDiningSharp'
      short_name='DinnerDining'

      {...props}
    >
      <path d="M4 21 2 19H22L20 21ZM3 18Q3.15 17.55 3.4 17.15Q3.65 16.75 4 16.4V9H3V7.5H4V6.75H3V5.25H4V4.5H3V3H12V5.25H21V6.75H12V9H8V15.1Q8.375 15.15 8.713 15.25Q9.05 15.35 9.35 15.55Q9.95 14 11.338 13Q12.725 12 14.5 12Q16.925 12 18.55 13.775Q20.175 15.55 19.95 18ZM11.35 16H17.65Q17.2 15.05 16.375 14.525Q15.55 14 14.5 14Q13.475 14 12.625 14.55Q11.775 15.1 11.35 16ZM8 5.25H10V4.5H8ZM8 7.5H10V6.75H8ZM5.5 5.25H6.5V4.5H5.5ZM5.5 7.5H6.5V6.75H5.5ZM5.5 15.35Q5.725 15.225 5.975 15.162Q6.225 15.1 6.5 15.05V9H5.5ZM11.35 16Q11.775 16 12.625 16Q13.475 16 14.5 16Q15.55 16 16.375 16Q17.2 16 17.65 16Z"/>
    </Icon>
  );
});

IconMaterialDinnerDiningSharp.displayName = 'AmauiIconMaterialDinnerDiningSharp';

export default IconMaterialDinnerDiningSharp;
