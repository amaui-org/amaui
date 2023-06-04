import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolW100Filled'

      short_name='PanTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.2 22-6.95-7 1.425-1.275 4.425 2.35V4.1h2.15V12h.7V1.8h2.15V12h.7V2.7h2.15V12h.7V5.45h2.15V22Z"/>
    </Icon>
  );
});

IconMaterialPanToolW100Filled.displayName = 'AmauiIconMaterialPanToolW100Filled';

export default IconMaterialPanToolW100Filled;
