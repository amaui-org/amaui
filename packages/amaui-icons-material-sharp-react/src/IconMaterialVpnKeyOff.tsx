import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyOff'

      short_name='VpnKeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 12.15 15q-.8 1.35-2.137 2.175Q8.675 18 7 18q-2.5 0-4.25-1.75T1 12q0-1.65.8-3.025T3.95 6.8L1.375 4.225 2.8 2.8l18.4 18.4ZM17 14.175 15.825 13H17Zm4 4-2-2V13h2v-2h-7.175l-2-2H23v6h-2v3.175ZM7 16q1.625 0 2.488-.875.862-.875 1.237-1.575L5.475 8.3q-1.1.45-1.787 1.438Q3 10.725 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Zm0-2q-.825 0-1.412-.588Q5 12.825 5 12t.588-1.413Q6.175 10 7 10t1.412.587Q9 11.175 9 12q0 .825-.588 1.412Q7.825 14 7 14Zm7.725-2.1Zm-7.85.25Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyOff.displayName = 'AmauiIconMaterialVpnKeyOff';

export default IconMaterialVpnKeyOff;
