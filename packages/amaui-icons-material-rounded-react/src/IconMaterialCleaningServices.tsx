import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleaningServices = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningServices'

      short_name='CleaningServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-5q0-2.075 1.463-3.538Q5.925 11 8 11h1V4q0-1.25.875-2.125T12 1q1.25 0 2.125.875T15 4v7h1q2.075 0 3.538 1.462Q21 13.925 21 16v5q0 .825-.587 1.413Q19.825 23 19 23H5q-.825 0-1.413-.587Q3 21.825 3 21Zm2 0h2v-3q0-.425.287-.712Q7.575 17 8 17t.713.288Q9 17.575 9 18v3h2v-3q0-.425.288-.712Q11.575 17 12 17t.713.288Q13 17.575 13 18v3h2v-3q0-.425.288-.712Q15.575 17 16 17t.712.288Q17 17.575 17 18v3h2v-5q0-1.25-.875-2.125T16 13H8q-1.25 0-2.125.875T5 16v5Z"/>
    </Icon>
  );
});

IconMaterialCleaningServices.displayName = 'AmauiIconMaterialCleaningServices';

export default IconMaterialCleaningServices;
