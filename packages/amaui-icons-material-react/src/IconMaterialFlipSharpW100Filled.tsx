import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipSharpW100Filled'
      short_name='Flip'

      {...props}
    >
      <path d="M4.3 19.7V4.3H9.65V5H5V19H9.65V19.7ZM11.65 23V1.5H12.35V23ZM19 5.525V5H18.475V4.3H19.7V5.525ZM19 12.825V11.175H19.7V12.825ZM18.475 19.7V19H19V18.475H19.7V19.7ZM19 9.175V7.525H19.7V9.175ZM19 16.475V14.825H19.7V16.475ZM14.35 19.7V19H16.475V19.7ZM14.35 5V4.3H16.475V5Z"/>
    </Icon>
  );
});

IconMaterialFlipSharpW100Filled.displayName = 'AmauiIconMaterialFlipSharpW100Filled';

export default IconMaterialFlipSharpW100Filled;
