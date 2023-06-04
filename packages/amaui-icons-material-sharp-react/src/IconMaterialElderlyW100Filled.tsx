import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElderlyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElderlyW100Filled'

      short_name='Elderly'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.475 5.1q-.65 0-1.125-.475T11.875 3.5q0-.65.475-1.125t1.125-.475q.65 0 1.125.475t.475 1.125q0 .65-.475 1.125t-1.125.475Zm-6.05 17.475-.55-.425 3.375-4.275-.55-4.025q-.2-1.3.05-2.838.25-1.537.75-2.762l-2.975 1.825v3.275h-.7V9.675l4.025-2.45q.425-.25.763-.363.337-.112.687-.112.35 0 .675.213.325.212.575.612l.825 1.35q.65 1.05 1.713 1.862 1.062.813 2.237.813.55 0 .925.375t.375.925v9.7h-.7v-9.7q0-.25-.175-.425t-.425-.175q-.25 0-.425.175t-.175.425v.475h-.7V12.9q0-.2.1-.425.1-.225.225-.35-1.325-.35-2.262-1.2-.938-.85-1.763-2.275-.5 1.075-.837 2.437-.338 1.363-.213 2.538l2 3.675v5.3h-.7v-4.925l-2.55-3.55-.05 4Z"/>
    </Icon>
  );
});

IconMaterialElderlyW100Filled.displayName = 'AmauiIconMaterialElderlyW100Filled';

export default IconMaterialElderlyW100Filled;
