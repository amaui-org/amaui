import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPercentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PercentW100Filled'

      short_name='Percent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 10.35q-1.2 0-2.025-.825T4.65 7.5q0-1.2.825-2.025T7.5 4.65q1.2 0 2.025.825T10.35 7.5q0 1.2-.825 2.025T7.5 10.35Zm0-.7q.875 0 1.512-.638.638-.637.638-1.512t-.638-1.513Q8.375 5.35 7.5 5.35t-1.512.637Q5.35 6.625 5.35 7.5q0 .875.638 1.512.637.638 1.512.638Zm9 9.7q-1.2 0-2.025-.825T13.65 16.5q0-1.2.825-2.025t2.025-.825q1.2 0 2.025.825t.825 2.025q0 1.2-.825 2.025t-2.025.825Zm0-.7q.875 0 1.513-.638.637-.637.637-1.512t-.637-1.512q-.638-.638-1.513-.638-.875 0-1.512.638-.638.637-.638 1.512t.638 1.512q.637.638 1.512.638Zm-11.1.425-.475-.475L18.6 4.925l.475.475Z"/>
    </Icon>
  );
});

IconMaterialPercentW100Filled.displayName = 'AmauiIconMaterialPercentW100Filled';

export default IconMaterialPercentW100Filled;
