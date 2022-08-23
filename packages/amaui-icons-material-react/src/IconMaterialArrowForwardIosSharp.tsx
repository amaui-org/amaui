import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardIosSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosSharp'
      short_name='ArrowForwardIos'

      {...props}
    >
      <path d="M8.025 22 6.25 20.225 14.475 12 6.25 3.775 8.025 2 18.025 12Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosSharp.displayName = 'AmauiIconMaterialArrowForwardIosSharp';

export default IconMaterialArrowForwardIosSharp;
