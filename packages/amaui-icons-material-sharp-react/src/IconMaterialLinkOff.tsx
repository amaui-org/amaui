import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinkOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkOff'

      short_name='LinkOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.25 16.45-1.5-1.55q.975-.275 1.613-1.063Q20 13.05 20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.438Q22 9.875 22 12q0 1.425-.75 2.637-.75 1.213-2 1.813ZM15.85 13l-2-2H16v2Zm3.95 9.6L1.4 4.2l1.4-1.4 18.4 18.4ZM11 17H7q-2.075 0-3.537-1.463Q2 14.075 2 12q0-1.75 1.062-3.088Q4.125 7.575 5.75 7.15L7.6 9H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4Zm-3-4v-2h1.625l1.975 2Z"/>
    </Icon>
  );
});

IconMaterialLinkOff.displayName = 'AmauiIconMaterialLinkOff';

export default IconMaterialLinkOff;
