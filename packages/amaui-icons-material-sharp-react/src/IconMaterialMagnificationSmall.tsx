import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnificationSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationSmall'

      short_name='MagnificationSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 11h4V7H5Zm-3 9V4h20v16Zm2-2V6ZM4 6v12h16V6Z"/>
    </Icon>
  );
});

IconMaterialMagnificationSmall.displayName = 'AmauiIconMaterialMagnificationSmall';

export default IconMaterialMagnificationSmall;
