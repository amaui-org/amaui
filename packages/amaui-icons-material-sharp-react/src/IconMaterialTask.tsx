import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTask = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Task'

      short_name='Task'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 18 5.65-5.65-1.45-1.45-4.225 4.225-2.1-2.1L7.4 14.45ZM4 22V2h10l6 6v14Zm9-13V4H6v16h12V9ZM6 4v5-5 16Z"/>
    </Icon>
  );
});

IconMaterialTask.displayName = 'AmauiIconMaterialTask';

export default IconMaterialTask;
