import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanTool = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanTool'

      short_name='PanTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 24H22V3.65h-3V.9h-3.45V0H11v2.3H8v12.1l-3.9-1.975L1 15.15Zm.825-2L3.9 15.3l.5-.5 5.6 2.85V4.3h1V12h2V2h1v10h2V2.9h1V12h2V5.65h1V22Z"/>
    </Icon>
  );
});

IconMaterialPanTool.displayName = 'AmauiIconMaterialPanTool';

export default IconMaterialPanTool;
