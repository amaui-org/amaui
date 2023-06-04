import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartButtonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartButtonW100'

      short_name='SmartButton'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 16.35q-.625 0-1.062-.437-.438-.438-.438-1.063v-5.7q0-.625.438-1.063.437-.437 1.062-.437h15.7q.625 0 1.063.437.437.438.437 1.063v5.7q0 .625-.437 1.063-.438.437-1.063.437h-.7v-.7h.7q.35 0 .575-.225.225-.225.225-.575v-5.7q0-.35-.225-.575-.225-.225-.575-.225H4.15q-.35 0-.575.225-.225.225-.225.575v5.7q0 .35.225.575.225.225.575.225h5.7v.7Zm10.05 1.175-.525-1.2-1.2-.525q-.275-.125-.275-.3t.275-.3l1.2-.525.525-1.2q.125-.275.3-.275t.3.275l.525 1.2 1.2.525q.275.125.275.3t-.275.3l-1.2.525-.525 1.2q-.125.275-.3.275t-.3-.275Zm2.55-4.075-.375-.825-.825-.375q-.225-.1-.225-.25t.225-.25l.825-.375.375-.825q.1-.225.25-.225t.25.225l.375.825.825.375q.225.1.225.25t-.225.25l-.825.375-.375.825q-.1.225-.25.225t-.25-.225Z"/>
    </Icon>
  );
});

IconMaterialSmartButtonW100.displayName = 'AmauiIconMaterialSmartButtonW100';

export default IconMaterialSmartButtonW100;
