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
      <path d="M12 14.975q-.2 0-.387-.075-.188-.075-.313-.2l-4.6-4.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l3.9 3.9 3.9-3.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownFilled.displayName = 'AmauiIconMaterialKeyboardArrowDownFilled';

export default IconMaterialKeyboardArrowDownFilled;
