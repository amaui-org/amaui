import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffFilled'

      short_name='PowerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 9v3.625q0 .4-.137.762-.138.363-.413.638l-.3.275L8 5.15V4q0-.425.288-.713Q8.575 3 9 3t.713.287Q10 3.575 10 4v3h4V4q0-.425.288-.713Q14.575 3 15 3t.713.287Q16 3.575 16 4v4l-1-1h1q.825 0 1.413.587Q18 8.175 18 9Zm-7.5 12q-.425 0-.712-.288Q9.5 20.425 9.5 20v-2l-2.925-2.925q-.275-.275-.425-.637-.15-.363-.15-.763V9q0-.6.275-1.125t.8-.8v2.8L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-4.25-4.25-.35.35v2q0 .425-.287.712-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterialPowerOffFilled.displayName = 'AmauiIconMaterialPowerOffFilled';

export default IconMaterialPowerOffFilled;
