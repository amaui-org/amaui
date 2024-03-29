import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardReturnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnFilled'

      short_name='KeyboardReturn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.3 17.3-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.625-4.625q.275-.275.687-.263.413.013.688.288.275.275.275.7 0 .425-.275.7L6.8 11H19V8q0-.425.288-.713Q19.575 7 20 7t.712.287Q21 7.575 21 8v4q0 .425-.288.712Q20.425 13 20 13H6.8l2.925 2.925q.275.275.263.687-.013.413-.288.688-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialKeyboardReturnFilled.displayName = 'AmauiIconMaterialKeyboardReturnFilled';

export default IconMaterialKeyboardReturnFilled;
