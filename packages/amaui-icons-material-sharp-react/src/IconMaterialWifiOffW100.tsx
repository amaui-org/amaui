import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiOffW100'

      short_name='WifiOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.9 11.1q-1.925-1.925-4.462-3.013Q14.9 7 12 7q-.525 0-1.05.037-.525.038-.95.113l-.9-.9q.525-.125 1.225-.188Q11.025 6 12 6q3.125 0 5.825 1.162 2.7 1.163 4.775 3.238Zm-4 3.95-.338-.338-.337-.337L15.6 12.75q.5.2 1.263.662.762.463 1.487 1.188ZM19.95 21 12 13q-1.625 0-3.125.625T6.35 15.35l-.7-.7q1.025-1.025 2.438-1.75 1.412-.725 2.962-.85l-4.1-4.1q-1.175.425-2.5 1.275-1.325.85-2.35 1.875l-.65-.7Q2.5 9.35 3.763 8.475 5.025 7.6 6.15 7.15L3.8 4.8l.5-.5 16.2 16.2ZM12 21l-2.125-2.125q.425-.425.963-.65Q11.375 18 12 18q.625 0 1.163.225.537.225.962.65Z"/>
    </Icon>
  );
});

IconMaterialWifiOffW100.displayName = 'AmauiIconMaterialWifiOffW100';

export default IconMaterialWifiOffW100;
