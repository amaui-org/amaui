import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardTabOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabOutlinedW700'
      short_name='KeyboardTab'

      {...props}
    >
      <path d="M11.5 18.8 9.25 16.6 12.3 13.575H0.925V10.425H12.3L9.3 7.4L11.5 5.2L18.3 12ZM19.95 18.575V5.425H23.1V18.575Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardTabOutlinedW700;
