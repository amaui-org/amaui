import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownload2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Download2W100Filled'

      short_name='Download2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-160h508q5.95 0 9.975 4.035 4.025 4.035 4.025 10T743.975-136q-4.025 4-9.975 4H226q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4Zm253-140q-6.75 0-13.125-3T455-312L307-511q-11-15-2.809-31.5Q312.383-559 331-559h62v-239q0-12.75 8.625-21.375T423-828h113q12.75 0 21.375 8.625T566-798v239h62q18.617 0 26.808 16.5Q663-526 652-511L503-312q-4.5 6-10.875 9T479-300Z"/>
    </Icon>
  );
});

IconMaterialDownload2W100Filled.displayName = 'AmauiIconMaterialDownload2W100Filled';

export default IconMaterialDownload2W100Filled;
