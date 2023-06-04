import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownFilled'

      short_name='KeyboardArrowDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownFilled.displayName = 'AmauiIconMaterialKeyboardArrowDownFilled';

export default IconMaterialKeyboardArrowDownFilled;
