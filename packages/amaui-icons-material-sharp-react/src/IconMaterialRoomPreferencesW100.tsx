import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoomPreferencesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomPreferencesW100'

      short_name='RoomPreferences'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.95 19.7V19h2V4.3h7.4v1h2.7v5.75h-.7V6h-2v6.6h-.7V5h-6v14h4.7v.7Zm12.4.45-.05-.675q-.65-.125-1.05-.375t-.75-.625l-.6.325-.45-.6.575-.45q-.225-.6-.225-1.15 0-.55.225-1.15L14.45 15l.45-.6.6.325q.35-.375.75-.625t1.05-.375l.05-.675h.7l.05.675q.65.125 1.05.375t.75.625l.6-.325.45.6-.575.45q.225.6.225 1.15 0 .55-.225 1.15l.575.45-.45.6-.6-.325q-.35.375-.75.625t-1.05.375l-.05.675Zm.35-1.35q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65Zm-6.05-6.1q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-4 6.3V5v14Z"/>
    </Icon>
  );
});

IconMaterialRoomPreferencesW100.displayName = 'AmauiIconMaterialRoomPreferencesW100';

export default IconMaterialRoomPreferencesW100;
