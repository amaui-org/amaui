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
      <path d="m19.775 22.575-1.575-1.55h.8q0 .425-.288.712-.287.288-.712.288t-.712-.288Q17 21.45 17 21.025v-1.2L1.375 4.2q-.3-.3-.288-.713.013-.412.313-.712t.713-.3q.412 0 .712.3l18.375 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM19 16.125l-2.075-2.075L14 11.125V7q0-2.075 1.463-3.537Q16.925 2 19 2Zm-7-7-2-2V3q0-.425.288-.713Q10.575 2 11 2t.713.287Q12 2.575 12 3Zm-3-3-2-2V3q0-.425.287-.713Q7.575 2 8 2t.713.287Q9 2.575 9 3Zm-3-3L4.875 2q.475 0 .8.325.325.325.325.8ZM7 21v-8.15q-1.275-.35-2.137-1.4Q4 10.4 4 9V3.975l2 2V9h1V6.975l2 2V9h.025l2.25 2.25q-.4.575-.987.987Q9.7 12.65 9 12.85V21q0 .425-.287.712Q8.425 22 8 22t-.713-.288Q7 21.425 7 21Z"/>
    </Icon>
  );
});

IconMaterialNoMeals.displayName = 'AmauiIconMaterialNoMeals';

export default IconMaterialNoMeals;
