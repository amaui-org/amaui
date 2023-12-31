import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomDrawerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomDrawerW100Filled'

      short_name='BottomDrawer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-246q15-18 36-27t44-9h400q23 0 44 9t36 27v-310q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v310Z"/>
    </Icon>
  );
});

IconMaterialBottomDrawerW100Filled.displayName = 'AmauiIconMaterialBottomDrawerW100Filled';

export default IconMaterialBottomDrawerW100Filled;
