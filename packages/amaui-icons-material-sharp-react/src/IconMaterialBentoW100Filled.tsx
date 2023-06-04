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
      <path d="M13.8 11.65v-5.5h7.05v5.5Zm-10.65 6.2V6.15h9.95v11.7Zm4.975-4.95q.375 0 .637-.263.263-.262.263-.637t-.263-.637Q8.5 11.1 8.125 11.1t-.637.263q-.263.262-.263.637t.263.637q.262.263.637.263Zm5.675 4.95v-5.5h7.05v5.5Z"/>
    </Icon>
  );
});

IconMaterialBentoW100Filled.displayName = 'AmauiIconMaterialBentoW100Filled';

export default IconMaterialBentoW100Filled;
