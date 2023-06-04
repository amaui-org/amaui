import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMaximizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeFilled'

      short_name='Maximize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.975 5q-.425 0-.7-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16.025q.425 0 .7.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Z"/>
    </Icon>
  );
});

IconMaterialMaximizeFilled.displayName = 'AmauiIconMaterialMaximizeFilled';

export default IconMaterialMaximizeFilled;
