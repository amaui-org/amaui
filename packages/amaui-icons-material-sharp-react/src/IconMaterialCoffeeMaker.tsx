import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCoffeeMaker = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMaker'

      short_name='CoffeeMaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v2h-2v3H8V4H6v16h4.05q-.95-.675-1.5-1.712Q8 17.25 8 16v-5h10v5q0 1.25-.55 2.288-.55 1.037-1.5 1.712H20v2Zm9-3q1.25 0 2.125-.875T16 16v-3h-6v3q0 1.25.875 2.125T13 19Zm0-9q.425 0 .713-.288Q14 9.425 14 9t-.287-.713Q13.425 8 13 8t-.712.287Q12 8.575 12 9t.288.712Q12.575 10 13 10Zm0 3Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMaker.displayName = 'AmauiIconMaterialCoffeeMaker';

export default IconMaterialCoffeeMaker;
