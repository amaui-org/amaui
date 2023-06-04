import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyW100Filled'

      short_name='Emergency'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20.7q-.275 0-.487-.213-.213-.212-.213-.487v-5.05l-4.375 2.525q-.25.125-.525.063-.275-.063-.425-.338l-1-1.725q-.15-.275-.087-.55.062-.275.337-.4L8.6 12 4.225 9.475q-.25-.15-.325-.425-.075-.275.075-.525l1-1.725q.15-.275.437-.35.288-.075.538.075L10.3 9.05V4q0-.275.213-.488.212-.212.487-.212h2q.275 0 .488.212.212.213.212.488v5.05l4.375-2.525q.25-.125.525-.063.275.063.425.338l1 1.725q.15.275.088.55-.063.275-.338.4L15.4 12l4.375 2.525q.275.125.338.4.062.275-.088.55l-1 1.725q-.15.275-.425.338-.275.062-.525-.063L13.7 14.95V20q0 .275-.212.487-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialEmergencyW100Filled.displayName = 'AmauiIconMaterialEmergencyW100Filled';

export default IconMaterialEmergencyW100Filled;
