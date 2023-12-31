import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLockedW100Filled'

      short_name='ShieldLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M613-132v-176h40v-40q0-29 19.5-48.5T721-416q29 0 48.5 19.5T789-348v40h39v176H613Zm68-176h80v-40q0-17-11.5-28.5T721-388q-17 0-28.5 11.5T681-348v40ZM480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v218q-7-1-13.552-1.5-6.551-.5-13.448-.5-84 1-142 59t-58 141v158q-9.737 5.333-19.987 9.333-10.25 4-21.013 6.667Z"/>
    </Icon>
  );
});

IconMaterialShieldLockedW100Filled.displayName = 'AmauiIconMaterialShieldLockedW100Filled';

export default IconMaterialShieldLockedW100Filled;
