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
      <path d="M8 14h6q.425 0 .713-.288Q15 13.425 15 13v-2l1.15 1.15q.225.225.538.112Q17 12.15 17 11.8V8.2q0-.35-.312-.463-.313-.112-.538.113L15 9V7q0-.425-.287-.713Q14.425 6 14 6H8q-.425 0-.713.287Q7 6.575 7 7v6q0 .425.287.712Q7.575 14 8 14Zm-6 5.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Z"/>
    </Icon>
  );
});

IconMaterialVideoChatFilled.displayName = 'AmauiIconMaterialVideoChatFilled';

export default IconMaterialVideoChatFilled;
