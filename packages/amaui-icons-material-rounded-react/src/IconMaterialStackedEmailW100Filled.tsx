import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedEmailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedEmailW100Filled'

      short_name='StackedEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-522q8 6 18 6t18-6l288-218q0-6-3.5-14.5T830-766L534-542 236-764q-3 3-5.5 11t-2.5 13l288 218ZM152-184q-26 0-43-17t-17-43v-330q0-6 4-10t10-4q6 0 10 4t4 10v330q0 14 9 23t23 9h556q6 0 10 4t4 10q0 6-4 10t-10 4H152Zm108-108q-26 0-43-17t-17-43v-388q0-26 17-43t43-17h548q26 0 43 17t17 43v388q0 26-17 43t-43 17H260Z"/>
    </Icon>
  );
});

IconMaterialStackedEmailW100Filled.displayName = 'AmauiIconMaterialStackedEmailW100Filled';

export default IconMaterialStackedEmailW100Filled;
