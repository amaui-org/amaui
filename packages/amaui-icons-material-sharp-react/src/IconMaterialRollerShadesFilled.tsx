import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerShadesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesFilled'

      short_name='RollerShades'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-2h2V3h16v16h2v2Zm4-2h12v-6h-5v1.8q.35.25.55.625.2.375.2.825 0 .725-.512 1.238Q12.725 18 12 18t-1.238-.512q-.512-.513-.512-1.238 0-.45.2-.812.2-.363.55-.613V13H6Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesFilled.displayName = 'AmauiIconMaterialRollerShadesFilled';

export default IconMaterialRollerShadesFilled;
