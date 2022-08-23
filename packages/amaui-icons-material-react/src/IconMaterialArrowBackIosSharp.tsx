import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosSharp'
      short_name='ArrowBackIos'

      {...props}
    >
      <path d="M10 22 0 12 10 2 11.775 3.775 3.55 12 11.775 20.225Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosSharp.displayName = 'AmauiIconMaterialArrowBackIosSharp';

export default IconMaterialArrowBackIosSharp;
