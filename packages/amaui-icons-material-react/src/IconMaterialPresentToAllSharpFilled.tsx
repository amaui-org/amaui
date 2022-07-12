import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPresentToAllSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllSharpFilled'
      short_name='PresentToAll'

      {...props}
    >
      <path d="M11 16H13V11.85L14.6 13.425L16.025 12L12 8L8 12L9.425 13.4L11 11.825ZM2 20V4H22V20Z"/>
    </Icon>
  )
});

export default IconMaterialPresentToAllSharpFilled;
