import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNutritionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NutritionFilled'

      short_name='Nutrition'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-2.925 0-4.962-2.038Q5 16.925 5 14q0-2.35 1.388-4.213 1.387-1.862 3.637-2.512-.5-.125-.975-.363-.475-.237-.85-.612-.825-.825-1.062-1.963Q6.9 3.2 7.025 2.025 8.2 1.9 9.338 2.137q1.137.238 1.962 1.063.575.575.837 1.3.263.725.338 1.525.325-.775.788-1.463.462-.687 1.037-1.262.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7-.55.55-.975 1.212-.425.663-.625 1.413 2.2.7 3.55 2.537Q19 11.7 19 14q0 2.925-2.038 4.962Q14.925 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialNutritionFilled.displayName = 'AmauiIconMaterialNutritionFilled';

export default IconMaterialNutritionFilled;
