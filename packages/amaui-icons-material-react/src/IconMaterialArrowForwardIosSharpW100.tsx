import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardIosSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosSharpW100'
      short_name='ArrowForwardIos'

      {...props}
    >
      <path d="M8 21.1 7.15 20.25 15.4 12 7.15 3.75 8 2.9 17.1 12Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosSharpW100.displayName = 'AmauiIconMaterialArrowForwardIosSharpW100';

export default IconMaterialArrowForwardIosSharpW100;
