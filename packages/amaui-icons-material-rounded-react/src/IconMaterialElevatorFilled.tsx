import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElevatorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevatorFilled'

      short_name='Elevator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 18h1q.425 0 .713-.288Q10 17.425 10 17v-3q.425 0 .713-.288Q11 13.425 11 13v-1.5q0-.825-.587-1.413Q9.825 9.5 9 9.5H8q-.825 0-1.412.587Q6 10.675 6 11.5V13q0 .425.287.712Q6.575 14 7 14v3q0 .425.287.712Q7.575 18 8 18Zm.5-9.5q.525 0 .887-.363.363-.362.363-.887t-.363-.888Q9.025 6 8.5 6t-.887.362q-.363.363-.363.888t.363.887q.362.363.887.363Zm5.4 2.5h3.2q.3 0 .438-.25.137-.25-.013-.525l-1.6-2.55q-.05-.075-.425-.225-.125 0-.238.05-.112.05-.187.175l-1.6 2.55q-.15.275-.012.525.137.25.437.25Zm1.6 5.55q.125 0 .238-.05.112-.05.187-.175l1.6-2.55q.15-.275.013-.525Q17.4 13 17.1 13h-3.2q-.3 0-.437.25-.138.25.012.525l1.6 2.55q.05.075.425.225ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialElevatorFilled.displayName = 'AmauiIconMaterialElevatorFilled';

export default IconMaterialElevatorFilled;
