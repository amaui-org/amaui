import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosOutlinedW100Filled'
      short_name='ArrowBackIos'

      {...props}
    >
      <path d="M10 21.1 0.9 12 10 2.9 10.85 3.75 2.6 12 10.85 20.25Z"/>
    </Icon>
  )
});

export default IconMaterialArrowBackIosOutlinedW100Filled;
