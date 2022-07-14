import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowUpwardSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardSharpW100Filled'
      short_name='ArrowUpward'

      {...props}
    >
      <path d="M11.65 19V6.35L5.5 12.5L5 12L12 5L19 12L18.5 12.5L12.35 6.35V19Z"/>
    </Icon>
  );
});

export default IconMaterialArrowUpwardSharpW100Filled;
