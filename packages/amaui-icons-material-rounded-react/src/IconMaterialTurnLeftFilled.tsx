import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnLeftFilled'

      short_name='TurnLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 20q-.425 0-.712-.288Q15 19.425 15 19v-8H6.8l.9.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-2.6-2.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375Q3.55 9.45 3.7 9.3l2.6-2.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-.9.9H15q.825 0 1.413.587Q17 10.175 17 11v8q0 .425-.288.712Q16.425 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialTurnLeftFilled.displayName = 'AmauiIconMaterialTurnLeftFilled';

export default IconMaterialTurnLeftFilled;
