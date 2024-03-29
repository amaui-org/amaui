import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffFilled'

      short_name='FlashlightOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 22q-.825 0-1.412-.587Q8 20.825 8 20v-9.2L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L16 18.8V20q0 .825-.587 1.413Q14.825 22 14 22Zm6-8.85L9.85 7H18v1l-2 3ZM18 5H7.85L6.125 3.275q.225-.575.725-.925Q7.35 2 8 2h8q.825 0 1.413.587Q18 3.175 18 4Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffFilled.displayName = 'AmauiIconMaterialFlashlightOffFilled';

export default IconMaterialFlashlightOffFilled;
