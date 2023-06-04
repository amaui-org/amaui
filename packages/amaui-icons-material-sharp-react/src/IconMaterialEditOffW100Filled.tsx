import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffW100Filled'

      short_name='EditOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.3 21.2-7.125-7.125L6.55 19.7H4.575v-1.975L10.2 12.1 2.8 4.7l.5-.5 16.5 16.5Zm-5.225-9.025L12.1 10.2l3.45-3.45 1.975 1.975Zm3.95-3.95L16.05 6.25l1.675-1.675L19.7 6.55Z"/>
    </Icon>
  );
});

IconMaterialEditOffW100Filled.displayName = 'AmauiIconMaterialEditOffW100Filled';

export default IconMaterialEditOffW100Filled;
