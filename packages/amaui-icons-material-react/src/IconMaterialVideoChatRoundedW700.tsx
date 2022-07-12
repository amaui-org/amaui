import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoChatRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatRoundedW700'
      short_name='VideoChat'

      {...props}
    >
      <path d="M8 14h6q.425 0 .713-.288Q15 13.425 15 13v-2l.625.625q.4.4.888.187Q17 11.6 17 11.05v-2.1q0-.55-.487-.763-.488-.212-.888.188L15 9V7q0-.425-.287-.713Q14.425 6 14 6H8q-.425 0-.713.287Q7 6.575 7 7v6q0 .425.287.712Q7.575 14 8 14Zm-6.85 5.05V4.3q0-1.325.912-2.238.913-.912 2.238-.912h15.4q1.325 0 2.238.912.912.913.912 2.238v11.4q0 1.325-.912 2.238-.913.912-2.238.912H5.15l-1.325 1.325q-.75.75-1.712.338-.963-.413-.963-1.463Zm3.15-3.075.275-.275H19.7V4.3H4.3ZM4.3 4.3v11.675Z"/>
    </Icon>
  )
});

export default IconMaterialVideoChatRoundedW700;
