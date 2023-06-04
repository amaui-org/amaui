import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPropaneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneW100Filled'

      short_name='Propane'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.35 7.3h5.3V6.05h-5.3ZM7 18.4v-1.7q-1.95 0-3.325-1.375Q2.3 13.95 2.3 12q0-1.95 1.375-3.325Q5.05 7.3 7 7.3h1.65V5.35h6.7V7.3H17q1.95 0 3.325 1.375Q21.7 10.05 21.7 12q0 1.95-1.375 3.325Q18.95 16.7 17 16.7v1.7h-.7v-1.7H7.7v1.7Z"/>
    </Icon>
  );
});

IconMaterialPropaneW100Filled.displayName = 'AmauiIconMaterialPropaneW100Filled';

export default IconMaterialPropaneW100Filled;
