import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPackageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageW100Filled'

      short_name='Package'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm5-8.05L12 10.3l2.7 1.35V5H9.3ZM7 16.35h5v-.7H7Z"/>
    </Icon>
  );
});

IconMaterialPackageW100Filled.displayName = 'AmauiIconMaterialPackageW100Filled';

export default IconMaterialPackageW100Filled;
