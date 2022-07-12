import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewDaySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDaySharpFilled'
      short_name='ViewDay'

      {...props}
    >
      <path d="M3 20V18H21V20ZM3 16V8H21V16ZM3 6V4H21V6Z"/>
    </Icon>
  )
});

export default IconMaterialViewDaySharpFilled;
