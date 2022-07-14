import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial30fpsSelectSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsSelectSharpFilled'
      short_name='30fpsSelect'

      {...props}
    >
      <path d="M4 14V12H9V10H4V8H9V6H4V4H11V14ZM13 14V4H20V14ZM15 12H18V6H15ZM3 22V17H5V22ZM7 22V17H9V22ZM11 22V17H13V22ZM15 22V17H21V22Z"/>
    </Icon>
  );
});

export default IconMaterial30fpsSelectSharpFilled;
