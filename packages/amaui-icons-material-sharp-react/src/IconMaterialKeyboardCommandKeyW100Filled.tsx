import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardCommandKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCommandKeyW100Filled'

      short_name='KeyboardCommandKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20.35q-1.2 0-2.025-.825T3.65 17.5q0-1.2.825-2.025T6.5 14.65h2.15v-5.3H6.5q-1.2 0-2.025-.825T3.65 6.5q0-1.2.825-2.025T6.5 3.65q1.2 0 2.025.825T9.35 6.5v2.15h5.3V6.5q0-1.2.825-2.025T17.5 3.65q1.2 0 2.025.825T20.35 6.5q0 1.2-.825 2.025T17.5 9.35h-2.15v5.3h2.15q1.2 0 2.025.825t.825 2.025q0 1.2-.825 2.025t-2.025.825q-1.2 0-2.025-.825T14.65 17.5v-2.15h-5.3v2.15q0 1.2-.825 2.025T6.5 20.35Zm0-.7q.875 0 1.512-.638.638-.637.638-1.512v-2.15H6.5q-.875 0-1.512.638-.638.637-.638 1.512t.638 1.512q.637.638 1.512.638Zm11 0q.875 0 1.513-.638.637-.637.637-1.512t-.637-1.512q-.638-.638-1.513-.638h-2.15v2.15q0 .875.638 1.512.637.638 1.512.638Zm-8.15-5h5.3v-5.3h-5.3Zm-2.85-6h2.15V6.5q0-.875-.638-1.513Q7.375 4.35 6.5 4.35t-1.512.637Q4.35 5.625 4.35 6.5q0 .875.638 1.512.637.638 1.512.638Zm8.85 0h2.15q.875 0 1.513-.638.637-.637.637-1.512t-.637-1.513q-.638-.637-1.513-.637-.875 0-1.512.637-.638.638-.638 1.513Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCommandKeyW100Filled.displayName = 'AmauiIconMaterialKeyboardCommandKeyW100Filled';

export default IconMaterialKeyboardCommandKeyW100Filled;
