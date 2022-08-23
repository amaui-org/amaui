import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowDownSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownSharpFilled'
      short_name='KeyboardArrowDown'

      {...props}
    >
      <path d="M12 15.4 6 9.4 7.4 8 12 12.6 16.6 8 18 9.4Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownSharpFilled.displayName = 'AmauiIconMaterialKeyboardArrowDownSharpFilled';

export default IconMaterialKeyboardArrowDownSharpFilled;
