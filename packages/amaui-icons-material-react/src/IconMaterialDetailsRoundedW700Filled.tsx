import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetailsRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsRoundedW700Filled'
      short_name='Details'

      {...props}
    >
      <path d="M3.15 21.85Q2.25 21.85 1.8 21.075Q1.35 20.3 1.775 19.5L10.625 3.6Q11.075 2.8 12 2.8Q12.925 2.8 13.375 3.6L22.225 19.5Q22.65 20.3 22.2 21.075Q21.75 21.85 20.85 21.85ZM5.825 18.7H10.425V10.425ZM13.575 18.7H18.175L13.575 10.425Z"/>
    </Icon>
  )
});

export default IconMaterialDetailsRoundedW700Filled;
