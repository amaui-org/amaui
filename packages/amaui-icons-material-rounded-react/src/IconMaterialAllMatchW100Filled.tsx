import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllMatchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatchW100Filled'

      short_name='AllMatch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m696 845-29-29q-4-4-9.5-4t-9.5 4q-4 4-4 9.5t4 9.5l33 33q7 7 15.5 7t15.5-7l80-79q4-4 4.5-9t-4.5-10q-4-4-10-4t-10 4l-76 75Zm24 125q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM346 576 230 394q-10-15-1.5-30.5T255 348h297q22 0 41.5 10t32.5 28l134 190q-10-1-20.5-1.5T720 574q-98 0-169 66t-78 164H255q-18 0-26.5-15.5T230 758l116-182Z"/>
    </Icon>
  );
});

IconMaterialAllMatchW100Filled.displayName = 'AmauiIconMaterialAllMatchW100Filled';

export default IconMaterialAllMatchW100Filled;
