import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderOuterRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuterRoundedW100Filled'
      short_name='BorderOuter'

      {...props}
    >
      <path d="M11.5 8.5V7.5H12.5V8.5ZM11.5 12.5V11.5H12.5V12.5ZM15.5 12.5V11.5H16.5V12.5ZM5.1 20.5Q4.4 20.5 3.95 20.05Q3.5 19.6 3.5 18.9V5.1Q3.5 4.4 3.95 3.95Q4.4 3.5 5.1 3.5H18.9Q19.6 3.5 20.05 3.95Q20.5 4.4 20.5 5.1V18.9Q20.5 19.6 20.05 20.05Q19.6 20.5 18.9 20.5ZM5.1 19.5H18.9Q19.15 19.5 19.325 19.325Q19.5 19.15 19.5 18.9V5.1Q19.5 4.85 19.325 4.675Q19.15 4.5 18.9 4.5H5.1Q4.85 4.5 4.675 4.675Q4.5 4.85 4.5 5.1V18.9Q4.5 19.15 4.675 19.325Q4.85 19.5 5.1 19.5ZM11.5 16.5V15.5H12.5V16.5ZM7.5 12.5V11.5H8.5V12.5Z"/>
    </Icon>
  );
});

IconMaterialBorderOuterRoundedW100Filled.displayName = 'AmauiIconMaterialBorderOuterRoundedW100Filled';

export default IconMaterialBorderOuterRoundedW100Filled;
