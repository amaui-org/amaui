import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabPanelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabPanelW100Filled'

      short_name='LabPanel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 19.7v-6.4h2V8.5h-1V5.65h6.4V8.5h-1v4.8h6.6V8.5h-1V5.65h6.4V8.5h-1v4.8h2v6.4ZM16 13.3h3V8.5h-3Zm-11 0h3V8.5H5Z"/>
    </Icon>
  );
});

IconMaterialLabPanelW100Filled.displayName = 'AmauiIconMaterialLabPanelW100Filled';

export default IconMaterialLabPanelW100Filled;
