import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabPanelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabPanelW100'

      short_name='LabPanel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 19.7v-6.4h2V8.5h-1V5.65h6.4V8.5h-1v4.8h6.6V8.5h-1V5.65h6.4V8.5h-1v4.8h2v6.4ZM15 7.8h5V6.35h-5Zm-11 0h5V6.35H4Zm12 5.5h3V8.5h-3Zm-11 0h3V8.5H5ZM3 19h18v-5H3ZM4 7.8V6.35 7.8Zm11 0V6.35 7.8ZM3 19v-5 5Z"/>
    </Icon>
  );
});

IconMaterialLabPanelW100.displayName = 'AmauiIconMaterialLabPanelW100';

export default IconMaterialLabPanelW100;
