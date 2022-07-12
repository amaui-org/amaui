import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageSharpW700Filled'
      short_name='Package'

      {...props}
    >
      <path d="M2.15 21.85V2.15h19.7v19.7Zm5.525-8.7L12 11l4.325 2.15V5.3h-8.65ZM6.3 17.7H12v-2.9H6.3Z"/>
    </Icon>
  )
});

export default IconMaterialPackageSharpW700Filled;
