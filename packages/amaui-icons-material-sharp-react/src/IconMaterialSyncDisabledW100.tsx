import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDisabledW100'

      short_name='SyncDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.3 21.2-3.175-3.175q-.35.25-.712.45-.363.2-.763.375v-.75q.275-.125.513-.263.237-.137.487-.287L6.475 8.375q-.55.8-.837 1.75-.288.95-.288 1.975 0 1.25.475 2.425Q6.3 15.7 7.3 16.7l1.25 1.25v-3.2h.7v4.4h-4.4v-.7h3.2L6.8 17.2q-1.125-1.125-1.637-2.438Q4.65 13.45 4.65 12.1q0-1.175.338-2.238.337-1.062.987-1.987L2.8 4.7l.5-.5 16.5 16.5Zm-1.25-5.1-.5-.5q.525-.8.813-1.738.287-.937.287-1.962 0-1.25-.475-2.425Q17.7 8.3 16.7 7.3l-1.25-1.25v3.2h-.7v-4.4h4.4v.7h-3.2L17.2 6.8q1.125 1.125 1.637 2.438.513 1.312.513 2.662 0 1.15-.337 2.212-.338 1.063-.963 1.988ZM8.375 6.425 7.9 5.95q.35-.25.7-.438.35-.187.75-.362v.75q-.275.125-.512.25-.238.125-.463.275Z"/>
    </Icon>
  );
});

IconMaterialSyncDisabledW100.displayName = 'AmauiIconMaterialSyncDisabledW100';

export default IconMaterialSyncDisabledW100;
