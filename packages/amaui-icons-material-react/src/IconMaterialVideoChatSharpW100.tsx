import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoChatSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatSharpW100'
      short_name='VideoChat'

      {...props}
    >
      <path d="M7.65 13.35h6.7V10.4l1.9 1.9V7.7l-1.9 1.9V6.65h-6.7ZM3.3 19.5V3.3h17.4v13.4H6.1Zm.7-1.7L5.8 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

export default IconMaterialVideoChatSharpW100;
