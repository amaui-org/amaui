import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslockSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockSharpFilled'
      short_name='KeyboardCapslock'

      {...props}
    >
      <path d="M7.4 13 6 11.6 12 5.6 18 11.6 16.6 13 12 8.4ZM6 18V16H18V18Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockSharpFilled.displayName = 'AmauiIconMaterialKeyboardCapslockSharpFilled';

export default IconMaterialKeyboardCapslockSharpFilled;
