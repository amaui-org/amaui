import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoChatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatFilled'

      short_name='VideoChat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 14h8v-3l2 2V7l-2 2V6H7Zm-5 8V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialVideoChatFilled.displayName = 'AmauiIconMaterialVideoChatFilled';

export default IconMaterialVideoChatFilled;
