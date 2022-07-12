import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPointOfSaleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PointOfSaleSharp'
      short_name='PointOfSale'

      {...props}
    >
      <path d="M5 8V2H19V8ZM7 6H17V4H7ZM2 22V19H22V22ZM2 18 6 9H18L22 18ZM8 16H10V15H8ZM8 14H10V13H8ZM8 12H10V11H8ZM11 16H13V15H11ZM11 14H13V13H11ZM11 12H13V11H11ZM14 16H16V15H14ZM14 14H16V13H14ZM14 12H16V11H14Z"/>
    </Icon>
  )
});

export default IconMaterialPointOfSaleSharp;
