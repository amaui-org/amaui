import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopChromebookOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookOutlinedFilled'
      short_name='LaptopChromebook'

      {...props}
    >
      <path d="M0 20V18H2V3H22V18H24V20ZM10 18H14V17H10Z"/>
    </Icon>
  )
});

export default IconMaterialLaptopChromebookOutlinedFilled;
