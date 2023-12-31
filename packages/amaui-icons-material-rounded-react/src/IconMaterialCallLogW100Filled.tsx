import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallLogW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallLogW100Filled'

      short_name='CallLog'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-800q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h320q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975-804q-4.025 4-9.975 4H494Zm0 128q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h320q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975-676q-4.025 4-9.975 4H494Zm0 128q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h320q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975-548q-4.025 4-9.975 4H494Zm208 412q-97 0-198.5-52t-184-134.5Q237-401 184.5-502T132-700q0-18 12-30t30-12h80q18 0 30.5 10.5T301-704l18 82q3 16-.5 29T304-571l-84 77q56 94 125 162t163 120l82-86q11-11 22.5-14.5t25.5-.5l68 14q17 4 27.5 16.5T744-252v78q0 18-12 30t-30 12Z"/>
    </Icon>
  );
});

IconMaterialCallLogW100Filled.displayName = 'AmauiIconMaterialCallLogW100Filled';

export default IconMaterialCallLogW100Filled;
