import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackSharpW100Filled'
      short_name='ArrowBack'

      {...props}
    >
      <path d="M12 19 5 12 12 5 12.5 5.5 6.35 11.65H19V12.35H6.35L12.5 18.5Z"/>
    </Icon>
  );
});

IconMaterialArrowBackSharpW100Filled.displayName = 'AmauiIconMaterialArrowBackSharpW100Filled';

export default IconMaterialArrowBackSharpW100Filled;
