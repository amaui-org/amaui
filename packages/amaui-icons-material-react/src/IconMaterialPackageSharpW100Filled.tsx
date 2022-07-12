import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageSharpW100Filled'
      short_name='Package'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm5-8.05L12 10.3l2.7 1.35V5H9.3ZM7 16.35h5v-.7H7Z"/>
    </Icon>
  )
});

export default IconMaterialPackageSharpW100Filled;
