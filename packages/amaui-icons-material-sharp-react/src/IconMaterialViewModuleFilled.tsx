import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewModuleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModuleFilled'

      short_name='ViewModule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.675 11.5v-6H21v6Zm-6.325 0v-6h5.325v6Zm-6.325 0v-6H8.35v6Zm0 7v-6H8.35v6Zm6.325 0v-6h5.325v6Zm6.325 0v-6H21v6Z"/>
    </Icon>
  );
});

IconMaterialViewModuleFilled.displayName = 'AmauiIconMaterialViewModuleFilled';

export default IconMaterialViewModuleFilled;
