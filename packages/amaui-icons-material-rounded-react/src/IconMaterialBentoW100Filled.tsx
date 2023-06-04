import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBentoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoW100Filled'

      short_name='Bento'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.8 11.65v-5.5h5.55q.65 0 1.075.425.425.425.425 1.075v4Zm-9.15 6.2q-.65 0-1.075-.425Q3.15 17 3.15 16.35v-8.7q0-.65.425-1.075Q4 6.15 4.65 6.15h8.45v11.7Zm3.475-4.95q.375 0 .637-.263.263-.262.263-.637t-.263-.637Q8.5 11.1 8.125 11.1t-.637.263q-.263.262-.263.637t.263.637q.262.263.637.263Zm5.675 4.95v-5.5h7.05v4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialBentoW100Filled.displayName = 'AmauiIconMaterialBentoW100Filled';

export default IconMaterialBentoW100Filled;
