import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSharpFilled'
      short_name='Delete'

      {...props}
    >
      <path d="M5 21V6H4V4H9V3H15V4H20V6H19V21ZM9 17H11V8H9ZM13 17H15V8H13Z"/>
    </Icon>
  )
});

export default IconMaterialDeleteSharpFilled;
