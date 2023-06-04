import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolFilled'

      short_name='PanTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.025 24 1 14.825 2.9 13 8 15.9V3h3v8h1V0h3v11h1V1h3v10h1V4h3v20Z"/>
    </Icon>
  );
});

IconMaterialPanToolFilled.displayName = 'AmauiIconMaterialPanToolFilled';

export default IconMaterialPanToolFilled;
