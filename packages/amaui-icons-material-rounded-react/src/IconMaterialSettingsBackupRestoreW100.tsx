import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBackupRestoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBackupRestoreW100'

      short_name='SettingsBackupRestore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.95 12.7q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm0 7q-2.825 0-4.962-1.787-2.138-1.788-2.613-4.538-.025-.15.075-.262.1-.113.275-.113.125 0 .225.087.1.088.125.213.5 2.475 2.413 4.087Q9.4 19 11.95 19q2.925 0 4.963-2.038Q18.95 14.925 18.95 12t-2.037-4.963Q14.875 5 11.95 5q-1.5 0-2.825.612Q7.8 6.225 6.75 7.3H8.8q.15 0 .25.1t.1.25q0 .15-.1.25T8.8 8H6.3q-.325 0-.537-.213-.213-.212-.213-.537v-2.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.8q1.125-1.175 2.6-1.838 1.475-.662 3.1-.662 1.6 0 3 .6t2.45 1.65Q18.45 7.6 19.05 9q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45-1.05 1.05-2.45 1.65-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialSettingsBackupRestoreW100.displayName = 'AmauiIconMaterialSettingsBackupRestoreW100';

export default IconMaterialSettingsBackupRestoreW100;
