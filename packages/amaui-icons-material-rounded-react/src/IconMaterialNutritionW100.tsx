import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNutritionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NutritionW100'

      short_name='Nutrition'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-2.375 0-4.037-1.662Q6.3 16.375 6.3 14q0-1.975 1.2-3.513 1.2-1.537 3.125-2.012-.5-.1-.988-.313Q9.15 7.95 8.8 7.6q-.625-.625-.812-1.475Q7.8 5.275 7.8 4.4q.825 0 1.638.175.812.175 1.437.75.575.5.813 1.212.237.713.287 1.488.3-.725.725-1.375t1-1.225q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25q-.525.525-.925 1.125T12.6 8.325q2.2.225 3.65 1.85Q17.7 11.8 17.7 14q0 2.375-1.662 4.038Q14.375 19.7 12 19.7Zm0-.7q2.075 0 3.538-1.462Q17 16.075 17 14q0-2.075-1.462-3.538Q14.075 9 12 9q-2.075 0-3.537 1.462Q7 11.925 7 14q0 2.075 1.463 3.538Q9.925 19 12 19Zm0-5Z"/>
    </Icon>
  );
});

IconMaterialNutritionW100.displayName = 'AmauiIconMaterialNutritionW100';

export default IconMaterialNutritionW100;
