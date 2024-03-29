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
      <path d="M19.075 21.9 12.15 15q-.8 1.35-2.137 2.175Q8.675 18 7 18q-2.5 0-4.25-1.75T1 12q0-1.65.8-3.025T3.95 6.8L2.075 4.925q-.3-.3-.3-.713 0-.412.3-.712t.713-.3q.412 0 .712.3l17 17q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3Zm1.25-4.4-7.5-7.5H21q.825 0 1.413.587Q23 11.175 23 12q0 .825-.587 1.412Q21.825 14 21 14v2q0 .5-.2.875t-.475.625ZM7 14q.825 0 1.412-.588Q9 12.825 9 12v-.175L7.175 10H7q-.825 0-1.412.587Q5 11.175 5 12q0 .825.588 1.412Q6.175 14 7 14Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyOffFilled.displayName = 'AmauiIconMaterialVpnKeyOffFilled';

export default IconMaterialVpnKeyOffFilled;
