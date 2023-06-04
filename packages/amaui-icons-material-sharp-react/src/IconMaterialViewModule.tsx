import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewModule = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModule'

      short_name='ViewModule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.025 19V5H21v14Zm12.65-8H19V7h-3.325Zm-5.325 0h3.325V7H10.35Zm-5.325 0H8.35V7H5.025Zm0 6H8.35v-4H5.025Zm5.325 0h3.325v-4H10.35Zm5.325 0H19v-4h-3.325Z"/>
    </Icon>
  );
});

IconMaterialViewModule.displayName = 'AmauiIconMaterialViewModule';

export default IconMaterialViewModule;
