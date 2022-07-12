import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFortOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortOutlinedFilled'
      short_name='Fort'

      {...props}
    >
      <path d="M1 21V17L3 15V9L1 7V3H3V5H5V3H7V5H9V3H11V7L9 9V10H15V9L13 7V3H15V5H17V3H19V5H21V3H23V7L21 9V15L23 17V21H14V18Q14 17.175 13.413 16.587Q12.825 16 12 16Q11.175 16 10.588 16.587Q10 17.175 10 18V21Z"/>
    </Icon>
  )
});

export default IconMaterialFortOutlinedFilled;
