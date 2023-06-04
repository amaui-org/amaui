import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoomPreferencesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomPreferencesW100Filled'

      short_name='RoomPreferences'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.35 20.15-.05-.675q-.65-.125-1.05-.375t-.75-.625l-.6.325-.45-.6.575-.45q-.225-.6-.225-1.15 0-.55.225-1.15L14.45 15l.45-.6.6.325q.35-.375.75-.625t1.05-.375l.05-.675h.7l.05.675q.65.125 1.05.375t.75.625l.6-.325.45.6-.575.45q.225.6.225 1.15 0 .55-.225 1.15l.575.45-.45.6-.6-.325q-.35.375-.75.625t-1.05.375l-.05.675Zm.35-1.35q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65Zm-6.05-6.1q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm-6.7 7V19h2V4.3h7.4v1h2.7v5.75h-.7V6h-2v6.15q-.225.2-.362.325-.138.125-.338.325-.75.75-1.138 1.775-.387 1.025-.387 2.025 0 .7.15 1.288.15.587.4 1.112l.2.363q.075.137.2.337Z"/>
    </Icon>
  );
});

IconMaterialRoomPreferencesW100Filled.displayName = 'AmauiIconMaterialRoomPreferencesW100Filled';

export default IconMaterialRoomPreferencesW100Filled;
