import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDecimalDecreaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalDecreaseFilled'

      short_name='DecimalDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16 22-4-4 4-4 1.4 1.4-1.575 1.6H22v2h-6.175l1.575 1.6ZM2 13v-3h3v3Zm7.5 0q-1.45 0-2.475-1.025Q6 10.95 6 9.5v-4q0-1.45 1.025-2.475Q8.05 2 9.5 2q1.45 0 2.475 1.025Q13 4.05 13 5.5v4q0 1.45-1.025 2.475Q10.95 13 9.5 13Zm0-2q.625 0 1.062-.438Q11 10.125 11 9.5v-4q0-.625-.438-1.062Q10.125 4 9.5 4t-1.062.438Q8 4.875 8 5.5v4q0 .625.438 1.062Q8.875 11 9.5 11Z"/>
    </Icon>
  );
});

IconMaterialDecimalDecreaseFilled.displayName = 'AmauiIconMaterialDecimalDecreaseFilled';

export default IconMaterialDecimalDecreaseFilled;
