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
      <path d="M12 21q-2.925 0-4.962-2.038Q5 16.925 5 14q0-2.35 1.375-4.2t3.65-2.5q-.525-.125-1-.375T8.2 6.3q-.825-.8-1.075-1.938-.25-1.137-.1-2.337Q8.2 1.9 9.338 2.15q1.137.25 1.962 1.05.55.575.813 1.312.262.738.337 1.513.425-.975 1.075-1.837.65-.863 1.5-1.538l1.4 1.4q-.8.65-1.425 1.462-.625.813-.9 1.813 2.2.7 3.55 2.537Q19 11.7 19 14q0 2.925-2.05 4.962Q14.9 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialNutritionFilled.displayName = 'AmauiIconMaterialNutritionFilled';

export default IconMaterialNutritionFilled;
