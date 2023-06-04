import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCasesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasesW100'

      short_name='Cases'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 19.65V9.55H3v9.4h15.05v.7Zm2.7-2.7V6.55h5.4V3.6h5.9v2.95h5.4v10.4Zm6.1-10.4h4.5V4.3h-4.5Zm-5.4 9.7H21v-9H5.7Zm0-9v9Z"/>
    </Icon>
  );
});

IconMaterialCasesW100.displayName = 'AmauiIconMaterialCasesW100';

export default IconMaterialCasesW100;
