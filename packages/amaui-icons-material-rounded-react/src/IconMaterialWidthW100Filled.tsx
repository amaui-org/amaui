import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthW100Filled'

      short_name='Width'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m246 590 80 80q4 4 4 9t-4 9q-4 4-9.5 4t-9.5-4l-93-92q-9-9-9-21t9-21l92-92q4-4 9.5-4.5T326 462q5 5 5 10t-5 10l-79 79 465 1-79-81q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l92 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 3.5T633 689q-4-4-4-9t4-9l79-81H246Z"/>
    </Icon>
  );
});

IconMaterialWidthW100Filled.displayName = 'AmauiIconMaterialWidthW100Filled';

export default IconMaterialWidthW100Filled;
