import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileOpenSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenSharp'
      short_name='FileOpen'

      {...props}
    >
      <path d="M4 22V2H14L20 8V14H18V9H13V4H6V20H15V22ZM21.95 22.375 19 19.425V21.65H17V16H22.65V18H20.4L23.35 20.95ZM6 20V14V9V4V20Z"/>
    </Icon>
  )
});

export default IconMaterialFileOpenSharp;
