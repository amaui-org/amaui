import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpload2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Upload2W100'

      short_name='Upload2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-160h508q5.95 0 9.975 4.035 4.025 4.035 4.025 10T743.975-136q-4.025 4-9.975 4H226q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4Zm197-120q-12.75 0-21.375-8.625T393-310v-239h-62q-18.617 0-26.809-16.5Q296-582 307-597l149-199q4.5-6 10.875-9T480-808q6.75 0 13.125 3T504-796l148 199q11 15 2.808 31.5Q646.617-549 628-549h-62v239q0 12.75-8.625 21.375T536-280H423Zm-2-28h117v-270h92L480-782 329-578h92v270Zm59-270Z"/>
    </Icon>
  );
});

IconMaterialUpload2W100.displayName = 'AmauiIconMaterialUpload2W100';

export default IconMaterialUpload2W100;
