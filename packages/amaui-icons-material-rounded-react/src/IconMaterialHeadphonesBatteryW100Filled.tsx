import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadphonesBatteryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBatteryW100Filled'

      short_name='HeadphonesBattery'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17.35q-.525 0-.862-.337-.338-.338-.338-.863v-4.2q0-2.175 1.512-3.688Q5.825 6.75 8 6.75q2.175 0 3.688 1.512Q13.2 9.775 13.2 11.95v4.2q0 .525-.337.863-.338.337-.863.337-.525 0-.862-.337-.338-.338-.338-.863v-1.8q0-.525.338-.863.337-.337.862-.337h.5v-1.2q0-1.875-1.312-3.188Q9.875 7.45 8 7.45q-1.875 0-3.188 1.312Q3.5 10.075 3.5 11.95v1.2H4q.525 0 .863.337.337.338.337.863v1.8q0 .525-.337.863-.338.337-.863.337Zm13.45 0q-.3 0-.5-.2t-.2-.5v-8.5q0-.3.2-.5t.5-.2h1.2v-.3q0-.175.113-.288.112-.112.287-.112h-.1q-.525 0-.062.137.462.138.462.263v.3h1.2q.3 0 .5.2t.2.5v8.5q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesBatteryW100Filled.displayName = 'AmauiIconMaterialHeadphonesBatteryW100Filled';

export default IconMaterialHeadphonesBatteryW100Filled;
