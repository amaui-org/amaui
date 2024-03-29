import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStadium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stadium'

      short_name='Stadium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 7V3l4 2Zm15 0V3l4 2Zm-7-1V2l4 2Zm0 16q-1.9-.05-3.537-.312-1.638-.263-2.85-.663-1.213-.4-1.913-.925T2 19v-9q0-.625.788-1.163.787-.537 2.137-.95 1.35-.412 3.175-.65Q9.925 7 12 7t3.9.237q1.825.238 3.175.65 1.35.413 2.137.95Q22 9.375 22 10v9q0 .575-.7 1.1-.7.525-1.912.925-1.213.4-2.85.663Q14.9 21.95 13 22v-4h-2Zm1-11q2.425 0 4.188-.288 1.762-.287 2.812-.662 0-.125-1.9-.588Q15.2 9 12 9q-3.2 0-5.1.462-1.9.463-1.9.588 1.05.375 2.813.662Q9.575 11 12 11Zm-3 8.85V16h6v3.85q2-.2 3.275-.588 1.275-.387 1.725-.687V11.8q-1.375.55-3.45.875Q14.475 13 12 13q-2.475 0-4.55-.325Q5.375 12.35 4 11.8v6.775q.45.3 1.725.687Q7 19.65 9 19.85Zm3-4.025Z"/>
    </Icon>
  );
});

IconMaterialStadium.displayName = 'AmauiIconMaterialStadium';

export default IconMaterialStadium;
