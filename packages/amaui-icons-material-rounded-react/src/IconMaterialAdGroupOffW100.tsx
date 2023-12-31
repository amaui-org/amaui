import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdGroupOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupOffW100'

      short_name='AdGroupOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m773-300-22-22q11-3 17-11t6-19v-368H353l-79-79q8-14 22-21.5t30-7.5h416q24.75 0 42.375 17.625T802-768v416q0 16-7.5 30T773-300Zm-447 8q-24.75 0-42.375-17.625T266-352v-302L114-806q-4-4-4.5-9.5T114-826q5-5 10-5t10 5l692 692q4 4 4.5 9.5T826-114q-5 5-10 5t-10-5L628-292H326Zm0-28h274L294-626v274q0 14 9 23t23 9ZM218-184q-24.75 0-42.375-17.625T158-244v-430q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v430q0 14 9 23t23 9h430q5.95 0 9.975 4.035 4.025 4.035 4.025 10T657.975-188q-4.025 4-9.975 4H218Zm231-287Zm92-61Z"/>
    </Icon>
  );
});

IconMaterialAdGroupOffW100.displayName = 'AmauiIconMaterialAdGroupOffW100';

export default IconMaterialAdGroupOffW100;
