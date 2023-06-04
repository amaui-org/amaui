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
      <path d="m21.05 22.05-3.7-3.7V21q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3.35L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Zm-3.7-7.5-.7-.7v-.5h-.5l-1.8-1.8V7q0-1.55.788-2.788.787-1.237 2.212-1.512Zm-6.3-6.3-.7-.7V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25Zm-2.7-2.7-.7-.7V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25Zm-2.7-2.7-.2-.2q.075 0 .138.062.062.063.062.138Zm2 18.15v-8.65q-1.125-.125-1.912-.963Q4.95 10.55 4.95 9.3V4.95l.7.7V9.3h2V7.65l.7.7v.95h.95l1.425 1.425q-.35.675-.975 1.112-.625.438-1.4.513V21q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Z"/>
    </Icon>
  );
});

IconMaterialNoMealsW100Filled.displayName = 'AmauiIconMaterialNoMealsW100Filled';

export default IconMaterialNoMealsW100Filled;
