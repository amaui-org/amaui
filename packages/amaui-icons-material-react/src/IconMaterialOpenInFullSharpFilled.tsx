import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInFullSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullSharpFilled'
      short_name='OpenInFull'

      {...props}
    >
      <path d="M3 21V13H5V17.6L17.6 5H13V3H21V11H19V6.4L6.4 19H11V21Z"/>
    </Icon>
  )
});

export default IconMaterialOpenInFullSharpFilled;
