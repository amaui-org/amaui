import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowLeftSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowLeftSharpFilled'
      short_name='KeyboardArrowLeft'

      {...props}
    >
      <path d="M14 18 8 12 14 6 15.4 7.4 10.8 12 15.4 16.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowLeftSharpFilled.displayName = 'AmauiIconMaterialKeyboardArrowLeftSharpFilled';

export default IconMaterialKeyboardArrowLeftSharpFilled;
