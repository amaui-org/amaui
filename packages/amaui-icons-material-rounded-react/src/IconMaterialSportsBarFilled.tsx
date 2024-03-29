import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsBarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBarFilled'

      short_name='SportsBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21q-.825 0-1.412-.587Q6 19.825 6 19v-6.65q-1.3-.35-2.15-1.4Q3 9.9 3 8.5q0-1.325.763-2.35.762-1.025 1.962-1.425.575-1.2 1.713-1.95 1.137-.75 2.562-.75.875 0 1.637.3.763.3 1.388.8.25-.05.475-.088Q13.725 3 14 3q1.65 0 2.825 1.175Q18 5.35 18 7q0 .55-.137 1.05-.138.5-.413.95H19q.825 0 1.413.587Q21 10.175 21 11v6q0 .825-.587 1.413Q19.825 19 19 19h-2q0 .825-.587 1.413Q15.825 21 15 21ZM5 8.5q0 .825.588 1.412.587.588 1.412.588.8 0 1.363-.525.562-.525 1.162-1.175.625-.675 1.413-1.238Q11.725 7 13 7h3q0-.825-.587-1.412Q14.825 5 14 5q-.625 0-1.05.162l-.425.163-.775-.65q-.275-.225-.712-.438Q10.6 4.025 10 4.025q-.8 0-1.462.425-.663.425-1.013 1.15l-.35.75-.8.275q-.625.2-1 .712Q5 7.85 5 8.5ZM17 17h2v-6h-2Z"/>
    </Icon>
  );
});

IconMaterialSportsBarFilled.displayName = 'AmauiIconMaterialSportsBarFilled';

export default IconMaterialSportsBarFilled;
