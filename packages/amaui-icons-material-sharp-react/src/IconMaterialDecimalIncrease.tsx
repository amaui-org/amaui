import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDecimalIncrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalIncrease'

      short_name='DecimalIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18 22-1.4-1.4 1.575-1.6H12v-2h6.175L16.6 15.4 18 14l4 4ZM2 13v-3h3v3Zm7.5 0q-1.45 0-2.475-1.025Q6 10.95 6 9.5v-4q0-1.45 1.025-2.475Q8.05 2 9.5 2q1.45 0 2.475 1.025Q13 4.05 13 5.5v4q0 1.45-1.025 2.475Q10.95 13 9.5 13Zm9 0q-1.45 0-2.475-1.025Q15 10.95 15 9.5v-4q0-1.45 1.025-2.475Q17.05 2 18.5 2q1.45 0 2.475 1.025Q22 4.05 22 5.5v4q0 1.45-1.025 2.475Q19.95 13 18.5 13Zm-9-2q.625 0 1.062-.438Q11 10.125 11 9.5v-4q0-.625-.438-1.062Q10.125 4 9.5 4t-1.062.438Q8 4.875 8 5.5v4q0 .625.438 1.062Q8.875 11 9.5 11Zm9 0q.625 0 1.062-.438Q20 10.125 20 9.5v-4q0-.625-.438-1.062Q19.125 4 18.5 4t-1.062.438Q17 4.875 17 5.5v4q0 .625.438 1.062.437.438 1.062.438Z"/>
    </Icon>
  );
});

IconMaterialDecimalIncrease.displayName = 'AmauiIconMaterialDecimalIncrease';

export default IconMaterialDecimalIncrease;
