import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelfImprovement = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelfImprovement'

      short_name='SelfImprovement'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8ZM6.8 20q-.75 0-1.275-.525Q5 18.95 5 18.2q0-.525.3-.988.3-.462.8-.662L10 15v-2.25q-1.2 1.375-2.7 2.188-1.5.812-3.25 1.012-.425.05-.738-.25Q3 15.4 3 14.925q0-.375.263-.65.262-.275.662-.325 1.4-.175 2.563-.85 1.162-.675 2.112-1.8l1.35-1.6q.3-.35.7-.525.4-.175.85-.175h1q.45 0 .85.175.4.175.7.525l1.35 1.6q.95 1.125 2.113 1.8 1.162.675 2.562.85.4.05.663.337.262.288.262.663 0 .45-.312.75-.313.3-.738.25-1.75-.2-3.25-1.012-1.5-.813-2.7-2.188V15l3.9 1.55q.5.2.8.662.3.463.3.988 0 .75-.525 1.275Q17.95 20 17.2 20H10v-.5q0-.65.425-1.075Q10.85 18 11.5 18h3q.225 0 .363-.137.137-.138.137-.363 0-.225-.137-.363Q14.725 17 14.5 17h-3q-1.05 0-1.775.725Q9 18.45 9 19.5v.5Z"/>
    </Icon>
  );
});

IconMaterialSelfImprovement.displayName = 'AmauiIconMaterialSelfImprovement';

export default IconMaterialSelfImprovement;
