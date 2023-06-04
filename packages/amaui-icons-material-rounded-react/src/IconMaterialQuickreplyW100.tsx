import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickreplyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyW100'

      short_name='Quickreply'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.1 16.7-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v4.7H20V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8v13L5.8 16h9.1v.7ZM4 16v1.8V4v12Zm14.95.7h-.3q-.325 0-.537-.213-.213-.212-.213-.537v-2.875q0-.25.162-.413.163-.162.413-.162h.5q.3 0 .463.238.162.237.087.512l-.575 2.25h.9q.3 0 .475.25t.075.525l-.975 3.075q-.05.2-.262.163-.213-.038-.213-.238Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyW100.displayName = 'AmauiIconMaterialQuickreplyW100';

export default IconMaterialQuickreplyW100;
