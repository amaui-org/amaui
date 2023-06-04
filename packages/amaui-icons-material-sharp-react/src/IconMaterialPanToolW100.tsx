import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolW100'

      short_name='PanTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.2 22h9.6V5.45h-2.6V2.7h-2.55v-.9H12.9v2.3h-2.5v12.15l-4.725-2.525L4.25 15Zm.25-.7-6.2-6.25.55-.45 5.3 2.8V4.8h1.2V12h1.4V2.5h1.2V12h1.4V3.4h1.2V12h1.4V6.15h1.2V21.3Z"/>
    </Icon>
  );
});

IconMaterialPanToolW100.displayName = 'AmauiIconMaterialPanToolW100';

export default IconMaterialPanToolW100;
