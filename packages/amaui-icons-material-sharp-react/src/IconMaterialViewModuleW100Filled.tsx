import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewModuleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModuleW100Filled'

      short_name='ViewModule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.8 11.65V6.3h4.875v5.35Zm-5.125 0V6.3h4.675v5.35Zm-5.325 0V6.3h4.875v5.35Zm0 6.05v-5.35h4.875v5.35Zm5.325 0v-5.35h4.675v5.35Zm5.125 0v-5.35h4.875v5.35Z"/>
    </Icon>
  );
});

IconMaterialViewModuleW100Filled.displayName = 'AmauiIconMaterialViewModuleW100Filled';

export default IconMaterialViewModuleW100Filled;
