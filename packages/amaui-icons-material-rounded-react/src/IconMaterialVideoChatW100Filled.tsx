import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoChatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatW100Filled'

      short_name='VideoChat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.4 13.35h5.2q.325 0 .538-.213.212-.212.212-.537v-2.2l1.225 1.225q.2.2.437.087.238-.112.238-.387v-2.65q0-.275-.238-.388-.237-.112-.437.088L14.35 9.6V7.4q0-.325-.212-.538-.213-.212-.538-.212H8.4q-.325 0-.537.212-.213.213-.213.538v5.2q0 .325.213.537.212.213.537.213ZM3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialVideoChatW100Filled.displayName = 'AmauiIconMaterialVideoChatW100Filled';

export default IconMaterialVideoChatW100Filled;
