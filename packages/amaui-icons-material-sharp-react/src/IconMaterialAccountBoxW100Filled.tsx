import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxW100Filled'

      short_name='AccountBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.1q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T12 7.4q-1.2 0-2.025.825T9.15 10.25q0 1.2.825 2.025T12 13.1Zm-7.7 6.6V4.3h15.4v15.4ZM5 19h14v-.65q-1.35-1.325-3.137-2.088Q14.075 15.5 12 15.5t-3.862.762Q6.35 17.025 5 18.35Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxW100Filled.displayName = 'AmauiIconMaterialAccountBoxW100Filled';

export default IconMaterialAccountBoxW100Filled;
