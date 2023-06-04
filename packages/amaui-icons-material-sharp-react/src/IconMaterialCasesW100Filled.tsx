import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCasesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasesW100Filled'

      short_name='Cases'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 19.65V9.55H3v9.4h15.05v.7Zm2.7-2.7V6.55h5.4V3.6h5.9v2.95h5.4v10.4Zm6.1-10.4h4.5V4.3h-4.5Z"/>
    </Icon>
  );
});

IconMaterialCasesW100Filled.displayName = 'AmauiIconMaterialCasesW100Filled';

export default IconMaterialCasesW100Filled;
