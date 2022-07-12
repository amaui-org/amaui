import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderOuterOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuterOutlinedFilled'
      short_name='BorderOuter'

      {...props}
    >
      <path d="M11 9V7H13V9ZM11 13V11H13V13ZM15 13V11H17V13ZM3 21V3H21V21ZM5 19H19V5H5ZM11 17V15H13V17ZM7 13V11H9V13Z"/>
    </Icon>
  )
});

export default IconMaterialBorderOuterOutlinedFilled;
