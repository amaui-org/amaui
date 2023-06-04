import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnificationSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationSmallFilled'

      short_name='MagnificationSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 11h4V7H5Zm-3 9V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialMagnificationSmallFilled.displayName = 'AmauiIconMaterialMagnificationSmallFilled';

export default IconMaterialMagnificationSmallFilled;
