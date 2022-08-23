import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewModuleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModuleSharpFilled'
      short_name='ViewModule'

      {...props}
    >
      <path d="M15.675 11.5V5.5H21V11.5ZM9.35 11.5V5.5H14.675V11.5ZM3.025 11.5V5.5H8.35V11.5ZM3.025 18.5V12.5H8.35V18.5ZM9.35 18.5V12.5H14.675V18.5ZM15.675 18.5V12.5H21V18.5Z"/>
    </Icon>
  );
});

IconMaterialViewModuleSharpFilled.displayName = 'AmauiIconMaterialViewModuleSharpFilled';

export default IconMaterialViewModuleSharpFilled;
