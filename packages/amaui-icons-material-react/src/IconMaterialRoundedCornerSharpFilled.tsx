import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoundedCornerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundedCornerSharpFilled'
      short_name='RoundedCorner'

      {...props}
    >
      <path d="M19 21V19H21V21ZM19 17V15H21V17ZM3 13V11H5V13ZM3 17V15H5V17ZM3 9V7H5V9ZM3 5V3H5V5ZM7 5V3H9V5ZM15 21V19H17V21ZM11 21V19H13V21ZM7 21V19H9V21ZM3 21V19H5V21ZM19 13V5H11V3H21V13Z"/>
    </Icon>
  )
});

export default IconMaterialRoundedCornerSharpFilled;
