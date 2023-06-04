import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdbW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdbW100Filled'

      short_name='Adb'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 11.25v-.8q0-1.45.65-2.625t1.75-1.95l-1.5-1.5.7-.725 1.7 1.7q.5-.25 1.1-.375.6-.125 1.2-.125t1.2.125q.6.125 1.1.375l1.7-1.7.7.725-1.5 1.5q1.1.775 1.75 1.95.65 1.175.65 2.625v.8Zm8-1.6q.35 0 .575-.225.225-.225.225-.575t-.225-.575q-.225-.225-.575-.225t-.575.225q-.225.225-.225.575t.225.575q.225.225.575.225Zm-4.8 0q.35 0 .575-.225.225-.225.225-.575t-.225-.575Q9.95 8.05 9.6 8.05t-.575.225Q8.8 8.5 8.8 8.85t.225.575q.225.225.575.225Zm2.4 11.2q-2.35 0-3.975-1.625T6.4 15.25v-3.2h11.2v3.2q0 2.35-1.625 3.975T12 20.85Z"/>
    </Icon>
  );
});

IconMaterialAdbW100Filled.displayName = 'AmauiIconMaterialAdbW100Filled';

export default IconMaterialAdbW100Filled;
