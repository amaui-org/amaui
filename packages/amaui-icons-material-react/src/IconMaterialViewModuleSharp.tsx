import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewModuleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModuleSharp'
      short_name='ViewModule'

      {...props}
    >
      <path d="M3.025 19V5H21V19ZM15.675 11H19V7H15.675ZM10.35 11H13.675V7H10.35ZM5.025 11H8.35V7H5.025ZM5.025 17H8.35V13H5.025ZM10.35 17H13.675V13H10.35ZM15.675 17H19V13H15.675Z"/>
    </Icon>
  );
});

IconMaterialViewModuleSharp.displayName = 'AmauiIconMaterialViewModuleSharp';

export default IconMaterialViewModuleSharp;
