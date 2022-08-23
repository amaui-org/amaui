import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareSharp'
      short_name='Compare'

      {...props}
    >
      <path d="M10 23V21H3V3H10V1H12V23ZM5 18H10V12ZM14 21V12L19 18V5H14V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialCompareSharp.displayName = 'AmauiIconMaterialCompareSharp';

export default IconMaterialCompareSharp;
