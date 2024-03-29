import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyOffFilled'

      short_name='VpnKeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 12.15 15q-.8 1.35-2.137 2.175Q8.675 18 7 18q-2.5 0-4.25-1.75T1 12q0-1.65.8-3.025T3.95 6.8L1.375 4.225 2.8 2.8l18.4 18.4ZM7 14q.825 0 1.412-.588Q9 12.825 9 12v-.175L7.175 10H7q-.825 0-1.412.587Q5 11.175 5 12q0 .825.588 1.412Q6.175 14 7 14Zm13.825 4-8-8H23v4h-2v4Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyOffFilled.displayName = 'AmauiIconMaterialVpnKeyOffFilled';

export default IconMaterialVpnKeyOffFilled;
