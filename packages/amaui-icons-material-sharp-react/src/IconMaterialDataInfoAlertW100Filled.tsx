import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataInfoAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataInfoAlertW100Filled'

      short_name='DataInfoAlert'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 870v-28h428v28H172Zm468.148-280Q568 590 517 539.148q-51-50.851-51-123Q466 344 516.852 293q50.851-51 123-51Q712 242 763 292.852q51 50.851 51 123Q814 488 763.148 539q-50.851 51-123 51ZM172 550v-28h204q3 8 6.5 14.5T390 550H172Zm0 160v-28h369q14 5 29 9t30 6v13H172Zm454-180h28V392h-28v138Zm14-184q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialDataInfoAlertW100Filled.displayName = 'AmauiIconMaterialDataInfoAlertW100Filled';

export default IconMaterialDataInfoAlertW100Filled;
