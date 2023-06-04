import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisabledByDefault = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefault'

      short_name='DisabledByDefault'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19h14V5H5Zm-2 2V3h18v18Zm5.4-4 3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6L17 8.4 15.6 7 12 10.6 8.4 7 7 8.4l3.6 3.6L7 15.6ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefault.displayName = 'AmauiIconMaterialDisabledByDefault';

export default IconMaterialDisabledByDefault;
