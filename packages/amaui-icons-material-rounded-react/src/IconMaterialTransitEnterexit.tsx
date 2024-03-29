import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitEnterexit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexit'

      short_name='TransitEnterexit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 18q-.625 0-1.062-.438Q6 17.125 6 16.5v-7q0-.625.438-1.062Q6.875 8 7.5 8t1.062.438Q9 8.875 9 9.5v3.25l5.725-5.725q.45-.45 1.075-.45t1.1.475q.45.45.45 1.1 0 .65-.45 1.1L11.15 15h3.35q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q15.125 18 14.5 18Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexit.displayName = 'AmauiIconMaterialTransitEnterexit';

export default IconMaterialTransitEnterexit;
