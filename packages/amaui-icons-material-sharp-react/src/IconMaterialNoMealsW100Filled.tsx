import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoMealsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMealsW100Filled'

      short_name='NoMeals'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-3.95-3.95v3h-.7v-3.7L2.25 3.25l.5-.5L21.8 21.8Zm-3.95-7.75-.7-.7v-.5h-.5l-1.8-1.8V7q0-1.55.788-2.788.787-1.237 2.212-1.512Zm-6.3-6.3-.7-.7v-4.9h.7Zm-2.7-2.7-.7-.7v-2.2h.7Zm-2.7-2.7-.2-.2h.2Zm2 18.5v-9q-1.125-.125-1.912-.963Q4.95 10.55 4.95 9.3V4.95l.7.7V9.3h2V7.65l.7.7v.95h.95l1.425 1.425q-.35.675-.975 1.112-.625.438-1.4.513v9Z"/>
    </Icon>
  );
});

IconMaterialNoMealsW100Filled.displayName = 'AmauiIconMaterialNoMealsW100Filled';

export default IconMaterialNoMealsW100Filled;
