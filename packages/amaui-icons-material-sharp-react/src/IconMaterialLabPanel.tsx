import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabPanel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabPanel'

      short_name='LabPanel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21v-9h2V8H2V3h9v5h-1v4h4V8h-1V3h9v5h-1v4h2v9ZM15 6h5V5h-5ZM4 6h5V5H4Zm12 6h3V8h-3ZM5 12h3V8H5Zm-2 7h18v-5H3ZM4 6V5v1Zm11 0V5v1ZM3 19v-5 5Z"/>
    </Icon>
  );
});

IconMaterialLabPanel.displayName = 'AmauiIconMaterialLabPanel';

export default IconMaterialLabPanel;
