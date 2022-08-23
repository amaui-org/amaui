import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlindSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindSharpW100Filled'
      short_name='Blind'

      {...props}
    >
      <path d="M11.475 4.6q-.65 0-1.125-.475T9.875 3q0-.65.475-1.125t1.125-.475q.65 0 1.125.475T13.075 3q0 .65-.475 1.125t-1.125.475Zm.1 17.5v-4.925l-2.55-3.55-.05 4-3.55 4.45-.55-.425 3.375-4.275-.55-4.025q-.2-1.325 0-2.725.2-1.4.8-2.875L5.525 9.575v3.275h-.7V9.175l4.025-2.45q.425-.25.763-.363.337-.112.687-.112.35 0 .675.213.325.212.575.612l.825 1.35q.775 1.275 1.95 1.975 1.175.7 2.5.7v.7h-.9l4.5 10-.625.3-4.75-10.575q-1.075-.35-2.012-1.2-.938-.85-1.788-2.225-.675 1.675-.9 2.838-.225 1.162-.075 2.187l2 3.675v5.3Z"/>
    </Icon>
  );
});

IconMaterialBlindSharpW100Filled.displayName = 'AmauiIconMaterialBlindSharpW100Filled';

export default IconMaterialBlindSharpW100Filled;
