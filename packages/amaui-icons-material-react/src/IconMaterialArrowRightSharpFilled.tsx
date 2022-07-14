import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightSharpFilled'
      short_name='ArrowRight'

      {...props}
    >
      <path d="M10 17V7L15 12Z"/>
    </Icon>
  );
});

export default IconMaterialArrowRightSharpFilled;
