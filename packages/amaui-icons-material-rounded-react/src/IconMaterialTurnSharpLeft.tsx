import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSharpLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpLeft'

      short_name='TurnSharpLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 21q-.425 0-.712-.288Q16 20.425 16 20v-5H8q-.825 0-1.412-.588Q6 13.825 6 13V6.8l-.9.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L8 6.8V13h8q.825 0 1.413.587Q18 14.175 18 15v5q0 .425-.288.712Q17.425 21 17 21Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpLeft.displayName = 'AmauiIconMaterialTurnSharpLeft';

export default IconMaterialTurnSharpLeft;
