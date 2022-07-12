import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessAutoOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoOutlinedFilled'
      short_name='BrightnessAuto'

      {...props}
    >
      <path d="M7.8 16H9.4L10.2 13.7H13.85L14.65 16H16.2L12.8 7H11.2ZM10.65 12.4 11.95 8.65H12.05L13.35 12.4ZM12 23.3 8.65 20H4V15.35L0.7 12L4 8.65V4H8.65L12 0.7L15.35 4H20V8.65L23.3 12L20 15.35V20H15.35Z"/>
    </Icon>
  )
});

export default IconMaterialBrightnessAutoOutlinedFilled;
