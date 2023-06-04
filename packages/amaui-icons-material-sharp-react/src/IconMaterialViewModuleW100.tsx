import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewModuleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModuleW100'

      short_name='ViewModule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.35 17.7V6.3h15.325v11.4Zm10.45-6.05h4.175V7H14.8Zm-4.875 0H14.1V7H9.925Zm-4.875 0h4.175V7H5.05Zm0 5.35h4.175v-4.65H5.05Zm4.875 0H14.1v-4.65H9.925Zm4.875 0h4.175v-4.65H14.8Z"/>
    </Icon>
  );
});

IconMaterialViewModuleW100.displayName = 'AmauiIconMaterialViewModuleW100';

export default IconMaterialViewModuleW100;
