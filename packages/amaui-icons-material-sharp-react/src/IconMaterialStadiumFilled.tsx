import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStadiumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StadiumFilled'

      short_name='Stadium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 7V3l4 2Zm15 0V3l4 2Zm-7-1V2l4 2ZM9 21.875q-1.3-.125-2.55-.375-1.25-.25-2.237-.613-.988-.362-1.601-.837Q2 19.575 2 19v-9q0-.625.788-1.163.787-.537 2.137-.95 1.35-.412 3.175-.65Q9.925 7 12 7t3.9.237q1.825.238 3.175.65 1.35.413 2.137.95Q22 9.375 22 10v9q0 .575-.612 1.05-.613.475-1.6.837-.988.363-2.238.613t-2.55.375V17H9ZM12 11q2.425 0 4.188-.288 1.762-.287 2.812-.662 0-.125-1.9-.588Q15.2 9 12 9q-3.2 0-5.1.462-1.9.463-1.9.588 1.05.375 2.813.662Q9.575 11 12 11Z"/>
    </Icon>
  );
});

IconMaterialStadiumFilled.displayName = 'AmauiIconMaterialStadiumFilled';

export default IconMaterialStadiumFilled;
