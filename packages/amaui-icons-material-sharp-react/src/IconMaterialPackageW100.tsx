import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPackageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageW100'

      short_name='Package'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 10.5 2-1 2 1V5h-4Zm-3 5.85v-.7h5v.7ZM4.3 19.7V4.3h15.4v15.4ZM5 5v14V5Zm0 14h14V5h-4.3v6.65L12 10.3l-2.7 1.35V5H5Z"/>
    </Icon>
  );
});

IconMaterialPackageW100.displayName = 'AmauiIconMaterialPackageW100';

export default IconMaterialPackageW100;
