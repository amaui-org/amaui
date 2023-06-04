import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopFilled'

      short_name='Stop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18V6h12v12Z"/>
    </Icon>
  );
});

IconMaterialStopFilled.displayName = 'AmauiIconMaterialStopFilled';

export default IconMaterialStopFilled;
