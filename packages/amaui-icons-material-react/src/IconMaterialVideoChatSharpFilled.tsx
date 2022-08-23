import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoChatSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatSharpFilled'
      short_name='VideoChat'

      {...props}
    >
      <path d="M7 14h8v-3l2 2V7l-2 2V6H7Zm-5 8V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialVideoChatSharpFilled.displayName = 'AmauiIconMaterialVideoChatSharpFilled';

export default IconMaterialVideoChatSharpFilled;
