import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsMotorsports = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMotorsports'

      short_name='SportsMotorsports'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12Zm2 6q2.5 0 4.25-1.75T20 12q0-2.525-1.837-4.263Q16.325 6 13.75 6q-1.2 0-2.325.275Q10.3 6.55 9.25 7.1l2.5 1q1.025.425 1.637 1.312Q14 10.3 14 11.4q0 1.5-1.037 2.55Q11.925 15 10.45 15h-6.4Q4 15.6 4 16.363V18Zm-9.6-5h6q.675 0 1.138-.463Q12 12.075 12 11.4q0-.475-.262-.863-.263-.387-.738-.587l-3.7-1.5q-1.05.925-1.787 2.1Q4.775 11.725 4.4 13Zm9.6 7H4q-.825 0-1.412-.587Q2 18.825 2 18v-2.25q0-2.45.925-4.588.925-2.137 2.513-3.725Q7.025 5.85 9.175 4.925 11.325 4 13.75 4q1.7 0 3.2.625 1.5.625 2.625 1.713Q20.7 7.425 21.35 8.875 22 10.325 22 12q0 1.65-.625 3.112-.625 1.463-1.712 2.551-1.088 1.087-2.55 1.712Q15.65 20 14 20Z"/>
    </Icon>
  );
});

IconMaterialSportsMotorsports.displayName = 'AmauiIconMaterialSportsMotorsports';

export default IconMaterialSportsMotorsports;
