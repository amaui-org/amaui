import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNutritionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NutritionW100Filled'

      short_name='Nutrition'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-2.375 0-4.037-1.662Q6.3 16.375 6.3 14q0-1.95 1.2-3.5t3.125-2.025q-.5-.1-.988-.3-.487-.2-.837-.575-.625-.625-.825-1.475-.2-.85-.2-1.725.85 0 1.65.187.8.188 1.425.738.575.5.825 1.225.25.725.3 1.5.35-.8.837-1.525.488-.725 1.138-1.3l.475.475q-.6.55-1.062 1.212-.463.663-.788 1.438 2.2.225 3.663 1.838Q17.7 11.8 17.7 14q0 2.375-1.675 4.038Q14.35 19.7 12 19.7Z"/>
    </Icon>
  );
});

IconMaterialNutritionW100Filled.displayName = 'AmauiIconMaterialNutritionW100Filled';

export default IconMaterialNutritionW100Filled;
