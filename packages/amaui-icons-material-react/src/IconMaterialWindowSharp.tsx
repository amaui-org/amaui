import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSharp'
      short_name='Window'

      {...props}
    >
      <path d="M2 22V2H22V22ZM11 11V4H4V11ZM11 13H4V20H11ZM13 13V20H20V13ZM13 11H20V4H13Z"/>
    </Icon>
  )
});

export default IconMaterialWindowSharp;
