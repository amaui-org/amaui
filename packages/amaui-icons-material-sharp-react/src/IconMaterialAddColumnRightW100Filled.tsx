import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnRightW100Filled'

      short_name='AddColumnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-616h297v616H132Zm325 0v-616h291v114h-14q-80.51 0-137.26 56.26Q540-561.48 540-480q0 81.48 56.74 137.74Q653.49-286 734-286q3.67 0 6.83-.5 3.17-.5 7.17-.5v115H457Zm263-214v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialAddColumnRightW100Filled.displayName = 'AmauiIconMaterialAddColumnRightW100Filled';

export default IconMaterialAddColumnRightW100Filled;
