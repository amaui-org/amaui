import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKingBedOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBedOutlinedFilled'
      short_name='KingBed'

      {...props}
    >
      <path d="M5 19H4L3.35 17H2V11.975Q2 11.15 2.588 10.575Q3.175 10 4 10V7Q4 6.175 4.588 5.588Q5.175 5 6 5H18Q18.825 5 19.413 5.588Q20 6.175 20 7V10Q20.825 10 21.413 10.587Q22 11.175 22 12V17H20.65L20 19H19L18.35 17H5.65ZM13 10H18V7Q18 7 18 7Q18 7 18 7H13ZM6 10H11V7H6Q6 7 6 7Q6 7 6 7Z"/>
    </Icon>
  )
});

export default IconMaterialKingBedOutlinedFilled;
