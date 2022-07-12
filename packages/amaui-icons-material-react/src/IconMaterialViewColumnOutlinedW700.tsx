import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewColumnOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnOutlinedW700'
      short_name='ViewColumn'

      {...props}
    >
      <path d="M1.85 19.85V4.15H22.125V19.85ZM5 16.7H7.55V7.3H5ZM10.7 16.7H13.275V7.3H10.7ZM16.425 16.7H18.975V7.3H16.425Z"/>
    </Icon>
  )
});

export default IconMaterialViewColumnOutlinedW700;
