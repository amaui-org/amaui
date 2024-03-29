import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsBasketballFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBasketballFilled'

      short_name='SportsBasketball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.05 10.975q.125-1.275.525-2.413.4-1.137 1.1-2.137.875.9 1.463 2.087.587 1.188.762 2.463Zm16.05 0q.175-1.275.75-2.45.575-1.175 1.475-2.075.7.975 1.1 2.125.4 1.15.525 2.4ZM3.675 17.55q-.7-.975-1.1-2.112-.4-1.138-.525-2.413H5.9q-.175 1.275-.762 2.45-.588 1.175-1.463 2.075Zm16.65 0q-.9-.9-1.475-2.075-.575-1.175-.75-2.45h3.85q-.125 1.25-.525 2.4t-1.1 2.125Zm-12.4-6.575q-.2-1.8-.975-3.325-.775-1.525-2.025-2.75 1.2-1.2 2.738-1.925Q9.2 2.25 10.975 2.05v8.925Zm5.1 0V2.05q1.775.2 3.312.925 1.538.725 2.738 1.925-1.275 1.2-2.037 2.737-.763 1.538-.963 3.338Zm-2.05 10.975q-1.8-.2-3.325-.938-1.525-.737-2.725-1.937 1.275-1.2 2.038-2.725.762-1.525.962-3.325h3.05Zm2.05 0v-8.925h3.05q.2 1.8.963 3.337.762 1.538 2.037 2.738-1.2 1.2-2.738 1.925-1.537.725-3.312.925Z"/>
    </Icon>
  );
});

IconMaterialSportsBasketballFilled.displayName = 'AmauiIconMaterialSportsBasketballFilled';

export default IconMaterialSportsBasketballFilled;
