import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoChatSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatSharp'
      short_name='VideoChat'

      {...props}
    >
      <path d="M7 14h8v-3l2 2V7l-2 2V6H7Zm-5 8V2h20v16H6Zm2-4.825L5.175 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  )
});

export default IconMaterialVideoChatSharp;
