import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownOutlinedW700Filled'
      short_name='ArrowsMoreDown'

      {...props}
    >
      <path d="M4.325 21.675V9.525h3.15v9h9v3.15Zm5.15-5.15V4.375h3.15v9h9v3.15Z"/>
    </Icon>
  )
});

export default IconMaterialArrowsMoreDownOutlinedW700Filled;
