import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageSharpFilled'
      short_name='Package'

      {...props}
    >
      <path d="M3 21V3h18v18Zm5-8 4-2 4 2V5H8Zm-1 4h5v-2H7Z"/>
    </Icon>
  );
});

export default IconMaterialPackageSharpFilled;
