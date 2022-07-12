import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageSharpFilled'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M6 12.575 3 9.575V3H21V11.575L18 8.575L14 12.575L10 8.575ZM3 21V12.4L6 15.4L10 11.4L14 15.4L18 11.4L21 14.4V21Z"/>
    </Icon>
  )
});

export default IconMaterialBrokenImageSharpFilled;
