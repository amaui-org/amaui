import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GateFilled'

      short_name='Gate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V7h2v10Zm18 0V7h2v10ZM5 19V9q0-1.65 1.175-2.825Q7.35 5 9 5h2v6H9v2h2v6Zm8 0v-6h2v-2h-2V5h2q1.65 0 2.825 1.175Q19 7.35 19 9v10Z"/>
    </Icon>
  );
});

IconMaterialGateFilled.displayName = 'AmauiIconMaterialGateFilled';

export default IconMaterialGateFilled;
