import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayPauseTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayPauseTwoTone'
      short_name='PlayPause'

      {...props}
    >
      <path d="M3.35 17.175V6.825L10.75 12ZM12.5 17V6.975H15.525V17ZM17.65 17V6.975H20.675V17Z"/>
    </Icon>
  )
});

export default IconMaterialPlayPauseTwoTone;
