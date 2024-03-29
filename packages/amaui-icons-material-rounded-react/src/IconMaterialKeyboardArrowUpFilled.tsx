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
      <path d="M6.7 14.7q-.275-.275-.275-.7 0-.425.275-.7l4.6-4.6q.15-.15.325-.213.175-.062.375-.062t.388.075q.187.075.312.2l4.6 4.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowUpFilled.displayName = 'AmauiIconMaterialKeyboardArrowUpFilled';

export default IconMaterialKeyboardArrowUpFilled;
