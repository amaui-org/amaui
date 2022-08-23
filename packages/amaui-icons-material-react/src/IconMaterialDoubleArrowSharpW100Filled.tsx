import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoubleArrowSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowSharpW100Filled'
      short_name='DoubleArrow'

      {...props}
    >
      <path d="M13.15 18.35 17.7 12 13.15 5.65H14L18.55 12L14 18.35ZM7.4 18.35 11.95 12 7.4 5.65H8.25L12.8 12L8.25 18.35Z"/>
    </Icon>
  );
});

IconMaterialDoubleArrowSharpW100Filled.displayName = 'AmauiIconMaterialDoubleArrowSharpW100Filled';

export default IconMaterialDoubleArrowSharpW100Filled;
