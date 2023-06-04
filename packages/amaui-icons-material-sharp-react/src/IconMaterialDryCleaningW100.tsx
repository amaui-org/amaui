import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDryCleaningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaningW100'

      short_name='DryCleaning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.35v-6h-4v-2.925l8-3.575V7.3q-.875-.125-1.437-.763Q9.65 5.9 9.65 5q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663h-.75q0-.675-.462-1.163Q12.675 3.35 12 3.35q-.675 0-1.162.487-.488.488-.488 1.163t.488 1.162q.487.488 1.162.488h.35v2.2l8 3.575v2.925h-4v6Zm.7-7h7.3Zm-4 .3h3.3v-1h8.7v1h3.3v-1.775L12 9.5l-7.65 3.4Zm4 6h7.3v-6.3h-7.3Z"/>
    </Icon>
  );
});

IconMaterialDryCleaningW100.displayName = 'AmauiIconMaterialDryCleaningW100';

export default IconMaterialDryCleaningW100;
