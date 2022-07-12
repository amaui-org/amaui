import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPauseSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPauseSharp'
      short_name='AutoReadPause'

      {...props}
    >
      <path d="M9 14H11V6H9ZM13 14H15V6H13ZM2 22V2H22V18H6ZM4 17.175 5.175 16H20V4H4ZM4 17.175V4V16Z"/>
    </Icon>
  )
});

export default IconMaterialAutoReadPauseSharp;
