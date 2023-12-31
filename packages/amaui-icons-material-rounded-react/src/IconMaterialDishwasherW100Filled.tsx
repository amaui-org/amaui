import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDishwasherW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DishwasherW100Filled'

      short_name='Dishwasher'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-552v320q0 12 10 22t22 10h496q12 0 22-10t10-22v-320H200Zm280 286q-23 0-38.5-16T426-322q0-11 3.5-24.5T440-374q6-12 13-22t15-21q5-6 12-6t12 6q8 11 15 21.5t13 22.5q7 14 10.5 27t3.5 24q0 24-15.5 40T480-266Zm200-386q12 0 20-8t8-20q0-12-8-20t-20-8q-12 0-20 8t-8 20q0 12 8 20t20 8ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialDishwasherW100Filled.displayName = 'AmauiIconMaterialDishwasherW100Filled';

export default IconMaterialDishwasherW100Filled;
