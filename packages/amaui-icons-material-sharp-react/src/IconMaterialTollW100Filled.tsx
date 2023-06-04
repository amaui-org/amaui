import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTollW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollW100Filled'

      short_name='Toll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 18.7q-2.8 0-4.75-1.95Q8.3 14.8 8.3 12t1.95-4.75Q12.2 5.3 15 5.3t4.75 1.95Q21.7 9.2 21.7 12t-1.95 4.75Q17.8 18.7 15 18.7Zm-8-.3q-2.15-.575-3.425-2.362Q2.3 14.25 2.3 12t1.275-4.037Q4.85 6.175 7 5.6v.75q-1.8.625-2.9 2.175Q3 10.075 3 12t1.1 3.475q1.1 1.55 2.9 2.175Z"/>
    </Icon>
  );
});

IconMaterialTollW100Filled.displayName = 'AmauiIconMaterialTollW100Filled';

export default IconMaterialTollW100Filled;
