import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabPanelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabPanelFilled'

      short_name='LabPanel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21v-9h2V8H2V3h9v5h-1v4h4V8h-1V3h9v5h-1v4h2v9Zm15-9h3V8h-3ZM5 12h3V8H5Z"/>
    </Icon>
  );
});

IconMaterialLabPanelFilled.displayName = 'AmauiIconMaterialLabPanelFilled';

export default IconMaterialLabPanelFilled;
