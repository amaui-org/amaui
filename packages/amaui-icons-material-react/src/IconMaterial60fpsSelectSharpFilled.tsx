import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial60fpsSelectSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsSelectSharpFilled'
      short_name='60fpsSelect'

      {...props}
    >
      <path d="M4 14V4H11V6H6V8H11V14ZM6 12H9V10H6ZM13 14V4H20V14ZM15 12H18V6H15ZM3 22V17H5V22ZM7 22V17H9V22ZM11 22V17H13V22ZM15 22V17H21V22Z"/>
    </Icon>
  )
});

export default IconMaterial60fpsSelectSharpFilled;
