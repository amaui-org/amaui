import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoChatSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatSharpW700Filled'
      short_name='VideoChat'

      {...props}
    >
      <path d="M7 14h8v-3l2 2V7l-2 2V6H7Zm-5.85 8.85V1.15h21.7v17.7H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialVideoChatSharpW700Filled;
