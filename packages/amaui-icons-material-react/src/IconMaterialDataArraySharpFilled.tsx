import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataArraySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArraySharpFilled'
      short_name='DataArray'

      {...props}
    >
      <path d="M15 20V18H18V6H15V4H20V20ZM4 20V4H9V6H6V18H9V20Z"/>
    </Icon>
  )
});

export default IconMaterialDataArraySharpFilled;
