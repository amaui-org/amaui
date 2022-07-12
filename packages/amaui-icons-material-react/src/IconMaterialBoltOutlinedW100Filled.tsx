import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBoltOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltOutlinedW100Filled'
      short_name='Bolt'

      {...props}
    >
      <path d="M10.3 19.7 11.15 13.7H8.65Q8.3 13.7 8.25 13.525Q8.2 13.35 8.35 13.05L12.85 4.3H13.7L12.85 10.3H15.35Q15.65 10.3 15.725 10.475Q15.8 10.65 15.65 10.95L11.15 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialBoltOutlinedW100Filled;
