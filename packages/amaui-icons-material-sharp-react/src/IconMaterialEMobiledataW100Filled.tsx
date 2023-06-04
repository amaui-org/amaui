import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataW100Filled'

      short_name='EMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 17V7h6.7v.7h-6v3.95h6v.7h-6v3.95h6v.7Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataW100Filled.displayName = 'AmauiIconMaterialEMobiledataW100Filled';

export default IconMaterialEMobiledataW100Filled;
