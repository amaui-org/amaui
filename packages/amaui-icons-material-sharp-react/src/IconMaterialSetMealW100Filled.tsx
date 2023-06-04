import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSetMealW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SetMealW100Filled'

      short_name='SetMeal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.95 13.85q-.3 0-.55-.25-.25-.25-.25-.55v-9.9h19.7v10.7Zm.5 3.725-.025-.7 17.175-.9.025.7Zm-.05 2.5v-.7h17.2v.7Zm7.425-9.175q1.65 0 3.05-.5t2.45-1.55q.15.675.775 1.088.625.412 1.425.487v-3.85q-.8.075-1.438.512-.637.438-.762 1.113-1.15-1.075-2.513-1.588Q12.45 6.1 10.825 6.1q-1.8 0-3.337.637Q5.95 7.375 5.075 8.5q.875 1.125 2.413 1.762 1.537.638 3.337.638Z"/>
    </Icon>
  );
});

IconMaterialSetMealW100Filled.displayName = 'AmauiIconMaterialSetMealW100Filled';

export default IconMaterialSetMealW100Filled;
