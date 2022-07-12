import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoubleArrowOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowOutlinedW700'
      short_name='DoubleArrow'

      {...props}
    >
      <path d="M11.625 19.575 17 12 11.625 4.425H15.475L20.875 12L15.475 19.575ZM4.25 19.575 9.625 12 4.25 4.425H8.125L13.5 12L8.125 19.575Z"/>
    </Icon>
  )
});

export default IconMaterialDoubleArrowOutlinedW700;
