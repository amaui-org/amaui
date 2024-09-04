import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowAboveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowAboveFilled'

      short_name='AddRowAbove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-320h720v320H120Zm0-400v-320h164q-2 10-3 19.5t-1 20.5q0 83 58 141.5T480-560q84 0 142-58.5T680-760q0-11-1-20.5t-3-19.5h164v320H120Zm320-160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialAddRowAboveFilled.displayName = 'AmauiIconMaterialAddRowAboveFilled';

export default IconMaterialAddRowAboveFilled;
