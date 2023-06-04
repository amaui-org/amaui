import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickreplyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyW100Filled'

      short_name='Quickreply'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.95 16.7h-.3q-.325 0-.537-.213-.213-.212-.213-.537v-2.875q0-.25.162-.413.163-.162.413-.162h.5q.3 0 .463.238.162.237.087.512l-.575 2.25h.9q.3 0 .475.238.175.237.075.537l-.975 3.075q-.05.2-.262.163-.213-.038-.213-.238Zm-12.85 0-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v4.7h-4.3q-.625 0-1.062.438-.438.437-.438 1.062v5.7Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyW100Filled.displayName = 'AmauiIconMaterialQuickreplyW100Filled';

export default IconMaterialQuickreplyW100Filled;
