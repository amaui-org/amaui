import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoChatOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatOutlinedW700Filled'
      short_name='VideoChat'

      {...props}
    >
      <path d="M8 14h6q.425 0 .713-.288Q15 13.425 15 13v-2l2 2V7l-2 2V7q0-.425-.287-.713Q14.425 6 14 6H8q-.425 0-.713.287Q7 6.575 7 7v6q0 .425.287.712Q7.575 14 8 14Zm-6.85 8.85V4.3q0-1.325.912-2.238.913-.912 2.238-.912h15.4q1.325 0 2.238.912.912.913.912 2.238v11.4q0 1.325-.912 2.238-.913.912-2.238.912H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialVideoChatOutlinedW700Filled;
