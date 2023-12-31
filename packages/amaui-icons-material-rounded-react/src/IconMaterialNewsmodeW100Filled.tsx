import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewsmodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsmodeW100Filled'

      short_name='Newsmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h576q26 0 43 17t17 43v496q0 26-17 43t-43 17H192Zm102-148h372q5.95 0 9.975-4.035 4.025-4.035 4.025-10T675.975-344q-4.025-4-9.975-4H294q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm0-146h100q5.95 0 9.975-4.025Q408-474.05 408-480v-146q0-5.95-4.025-9.975Q399.95-640 394-640H294q-5.95 0-9.975 4.025Q280-631.95 280-626v146q0 5.95 4.025 9.975Q288.05-466 294-466Zm228 0h144q5.95 0 9.975-4.035 4.025-4.035 4.025-10T675.975-490q-4.025-4-9.975-4H522q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm0-146h144q5.95 0 9.975-4.035 4.025-4.035 4.025-10T675.975-636q-4.025-4-9.975-4H522q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Z"/>
    </Icon>
  );
});

IconMaterialNewsmodeW100Filled.displayName = 'AmauiIconMaterialNewsmodeW100Filled';

export default IconMaterialNewsmodeW100Filled;
