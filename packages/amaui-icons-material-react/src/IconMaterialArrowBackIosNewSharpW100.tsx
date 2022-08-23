import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosNewSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewSharpW100'
      short_name='ArrowBackIosNew'

      {...props}
    >
      <path d="M16 21.1 6.9 12 16 2.9 16.85 3.75 8.6 12 16.85 20.25Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosNewSharpW100.displayName = 'AmauiIconMaterialArrowBackIosNewSharpW100';

export default IconMaterialArrowBackIosNewSharpW100;
