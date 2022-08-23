import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallSplitSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitSharpW100Filled'
      short_name='CallSplit'

      {...props}
    >
      <path d="M13.95 10.55 13.45 10.05 18.15 5.35H14.65V4.65H19.35V9.35H18.65V5.85ZM11.65 19.35V12.1L5.35 5.85V9.35H4.65V4.65H9.35V5.35H5.85L12.35 11.8V19.35Z"/>
    </Icon>
  );
});

IconMaterialCallSplitSharpW100Filled.displayName = 'AmauiIconMaterialCallSplitSharpW100Filled';

export default IconMaterialCallSplitSharpW100Filled;
