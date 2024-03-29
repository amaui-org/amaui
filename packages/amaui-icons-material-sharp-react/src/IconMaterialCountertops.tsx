import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCountertops = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Countertops'

      short_name='Countertops'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20v-8H2v-2h4q-.825 0-1.412-.588Q4 8.825 4 8V4h6v4q0 .825-.587 1.412Q8.825 10 8 10h8V7q0-.425-.287-.713Q15.425 6 15 6t-.712.287Q14 6.575 14 7h-2q0-1.25.875-2.125T15 4q1.25 0 2.125.875T18 7v3h4v2h-2v8ZM6 8h2V6H6Zm0 10h5v-6H6Zm7 0h5v-6h-5ZM6 8h2Zm6 7Z"/>
    </Icon>
  );
});

IconMaterialCountertops.displayName = 'AmauiIconMaterialCountertops';

export default IconMaterialCountertops;
