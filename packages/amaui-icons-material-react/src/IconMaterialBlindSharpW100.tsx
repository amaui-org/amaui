import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlindSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindSharpW100'
      short_name='Blind'

      {...props}
    >
      <path d="M11.475 4.6q-.65 0-1.125-.475T9.875 3q0-.65.475-1.125t1.125-.475q.65 0 1.125.475T13.075 3q0 .65-.475 1.125t-1.125.475Zm.1 17.5v-4.925l-2.55-3.55-.05 4-3.55 4.45-.55-.425 3.375-4.275-.55-4.025q-.2-1.2.025-2.725Q7.95 9.1 8.5 7.75L5.525 9.575v3.275h-.7V9.175l4.025-2.45q.425-.275.763-.375.337-.1.687-.1.4 0 .688.188.287.187.562.637l.825 1.35q.775 1.275 1.95 1.975 1.175.7 2.5.7v.7h-.9l4.5 10-.625.3-4.75-10.575q-1.125-.375-2.025-1.175-.9-.8-1.775-2.25-.6 1.5-.85 2.812-.25 1.313-.125 2.213l2 3.675v5.3Z"/>
    </Icon>
  );
});

IconMaterialBlindSharpW100.displayName = 'AmauiIconMaterialBlindSharpW100';

export default IconMaterialBlindSharpW100;
