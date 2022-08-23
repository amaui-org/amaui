import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightSharp'
      short_name='ArrowRight'

      {...props}
    >
      <path d="M10 17V7L15 12Z"/>
    </Icon>
  );
});

IconMaterialArrowRightSharp.displayName = 'AmauiIconMaterialArrowRightSharp';

export default IconMaterialArrowRightSharp;
