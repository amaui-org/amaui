import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactPhoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneW100Filled'

      short_name='ContactPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.3 19.2V4.8h21.4v14.4ZM9 14.3q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q9.975 9.6 9 9.6q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm9.1 2.95 1.5-1.5-1.15-1.55H16.7q-.2-.6-.275-1.113-.075-.512-.075-1.087t.075-1.062q.075-.488.275-1.138h1.75l1.15-1.55-1.5-1.5q-1.175.975-1.812 2.337Q15.65 10.45 15.65 12q0 1.55.638 2.912.637 1.363 1.812 2.338ZM3.55 18.5h10.9Q13.4 17.3 12 16.55q-1.4-.75-3-.75t-3 .75q-1.4.75-2.45 1.95Z"/>
    </Icon>
  );
});

IconMaterialContactPhoneW100Filled.displayName = 'AmauiIconMaterialContactPhoneW100Filled';

export default IconMaterialContactPhoneW100Filled;
