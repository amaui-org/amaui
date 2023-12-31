import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDishwasherFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DishwasherFilled'

      short_name='Dishwasher'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-520v320h560v-320H200Zm280 280q-33 0-56.5-23.5T400-320q0-14 3-27.5t12-30.5q11-20 23-39t25-38q6-9 17-9t17 9q13 19 25 38t23 39q9 17 12 30.5t3 27.5q0 33-23.5 56.5T480-240Zm200-400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720q-17 0-28.5 11.5T640-680q0 17 11.5 28.5T680-640ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialDishwasherFilled.displayName = 'AmauiIconMaterialDishwasherFilled';

export default IconMaterialDishwasherFilled;
