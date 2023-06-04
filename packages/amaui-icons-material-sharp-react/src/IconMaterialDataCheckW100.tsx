import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataCheckW100'

      short_name='DataCheck'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m612 497 133-133-20-20-113 113-57-56-20 20 77 76ZM172 870v-28h428v28H172Zm468.148-280Q568 590 517 539.148q-51-50.851-51-123Q466 344 516.852 293q50.851-51 123-51Q712 242 763 292.852q51 50.851 51 123Q814 488 763.148 539q-50.851 51-123 51ZM172 550v-28h204q3 8 6.5 14.5T390 550H172Zm0 160v-28h369q14 5 29 9t30 6v13H172Z"/>
    </Icon>
  );
});

IconMaterialDataCheckW100.displayName = 'AmauiIconMaterialDataCheckW100';

export default IconMaterialDataCheckW100;
