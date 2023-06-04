import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultFilled'

      short_name='DisabledByDefault'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm5.4-4 3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6L17 8.4 15.6 7 12 10.6 8.4 7 7 8.4l3.6 3.6L7 15.6Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefaultFilled.displayName = 'AmauiIconMaterialDisabledByDefaultFilled';

export default IconMaterialDisabledByDefaultFilled;
