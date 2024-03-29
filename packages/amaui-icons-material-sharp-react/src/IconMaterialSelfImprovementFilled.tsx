import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelfImprovementFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelfImprovementFilled'

      short_name='SelfImprovement'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8ZM6.8 20q-.75 0-1.275-.525Q5 18.95 5 18.2q0-.525.3-.988.3-.462.8-.662L10 15v-2.25q-1.35 1.575-3.137 2.412Q5.075 16 3 16v-2q1.7 0 3.088-.7 1.387-.7 2.512-2l1.35-1.6q.3-.35.7-.525.4-.175.85-.175h1q.45 0 .85.175.4.175.7.525l1.35 1.6q1.125 1.3 2.513 2Q19.3 14 21 14v2q-2.075 0-3.862-.838Q15.35 14.325 14 12.75V15l3.9 1.55q.5.2.8.662.3.463.3.988 0 .75-.525 1.275Q17.95 20 17.2 20H10v-.5q0-.65.425-1.075Q10.85 18 11.5 18h3q.225 0 .363-.137.137-.138.137-.363 0-.225-.137-.363Q14.725 17 14.5 17h-3q-1.05 0-1.775.725Q9 18.45 9 19.5v.5Z"/>
    </Icon>
  );
});

IconMaterialSelfImprovementFilled.displayName = 'AmauiIconMaterialSelfImprovementFilled';

export default IconMaterialSelfImprovementFilled;
