import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComedyMaskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComedyMaskW100'

      short_name='ComedyMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-317q45 0 79.5-28.5T602-419H357q8 45 43 73.5t80 28.5ZM310-586h120q0-25-18-43t-43-18q-25 0-42 18t-17 43Zm220-1h120q0-25-17.5-42.5T590-647q-25 0-42.5 17.5T530-587Zm-50 455q-64 0-120-24.5T262-223q-42-42-66-99t-24-121v-385h616v385q0 64-24 121t-66 99q-42 42-98 66.5T480-132Zm0-28q116 0 198-82.5T760-443v-357H200v357q0 118 81.5 200.5T480-160Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialComedyMaskW100.displayName = 'AmauiIconMaterialComedyMaskW100';

export default IconMaterialComedyMaskW100;
