import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayPauseSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayPauseSharpFilled'
      short_name='PlayPause'

      {...props}
    >
      <path d="M5 16.2V7.8L11 12ZM13 16V8H15V16ZM17 16V8H19V16Z"/>
    </Icon>
  )
});

export default IconMaterialPlayPauseSharpFilled;
