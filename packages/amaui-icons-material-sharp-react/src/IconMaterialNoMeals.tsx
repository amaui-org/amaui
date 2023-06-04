import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoMeals = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeals'

      short_name='NoMeals'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.475 23.3 19 21.825V22h-2v-2.175L.675 3.5 2.1 2.075l19.8 19.8ZM19 16.125l-2.075-2.075L14 11.125V7q0-2.075 1.463-3.537Q16.925 2 19 2Zm-7-7-2-2V2h2Zm-3-3-2-2V2h2Zm-3-3L4.875 2H6ZM7 22v-9.15q-1.275-.35-2.137-1.4Q4 10.4 4 9V3.975l2 2V9h1V6.975l2 2V9h.025l2.25 2.25q-.4.575-.987.987Q9.7 12.65 9 12.85V22Z"/>
    </Icon>
  );
});

IconMaterialNoMeals.displayName = 'AmauiIconMaterialNoMeals';

export default IconMaterialNoMeals;
