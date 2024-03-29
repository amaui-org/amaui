import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCoffeeMakerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMakerFilled'

      short_name='CoffeeMaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v2h-2v3H8V4H6v16h4.05q-.95-.7-1.5-1.75T8 16v-5h10v5q0 1.2-.55 2.25T15.95 20H20v2Zm9-12q.425 0 .713-.288Q14 9.425 14 9t-.287-.713Q13.425 8 13 8t-.712.287Q12 8.575 12 9t.288.712Q12.575 10 13 10Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMakerFilled.displayName = 'AmauiIconMaterialCoffeeMakerFilled';

export default IconMaterialCoffeeMakerFilled;
