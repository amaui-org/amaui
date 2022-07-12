import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLineStyleOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStyleOutlinedFilled'
      short_name='LineStyle'

      {...props}
    >
      <path d="M3 20V18H5V20ZM7 20V18H9V20ZM11 20V18H13V20ZM15 20V18H17V20ZM19 20V18H21V20ZM3 16V14H8V16ZM9.5 16V14H14.5V16ZM16 16V14H21V16ZM3 12V10H11V12ZM13 12V10H21V12ZM3 8V4H21V8Z"/>
    </Icon>
  )
});

export default IconMaterialLineStyleOutlinedFilled;
