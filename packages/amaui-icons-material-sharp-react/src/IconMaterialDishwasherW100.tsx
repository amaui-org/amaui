import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDishwasherW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DishwasherW100'

      short_name='Dishwasher'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-552v352h560v-352H200Zm0-28h560v-180H200v180Zm280 314q-23 0-38.5-16T426-322q0-23 14-52t40-58q26 30 40 58.5t14 51.5q0 24-15.5 40T480-266Zm200.07-386q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q668-708 660-699.93t-8 20q0 11.93 8.07 19.93t20 8ZM172-172v-616h616v616H172Zm28-408v-180 180Z"/>
    </Icon>
  );
});

IconMaterialDishwasherW100.displayName = 'AmauiIconMaterialDishwasherW100';

export default IconMaterialDishwasherW100;
