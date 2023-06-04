import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpFilled'

      short_name='KeyboardArrowUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 15.4 6 14l6-6 6 6-1.4 1.4-4.6-4.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowUpFilled.displayName = 'AmauiIconMaterialKeyboardArrowUpFilled';

export default IconMaterialKeyboardArrowUpFilled;
