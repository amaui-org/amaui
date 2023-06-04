import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewKanbanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewKanbanFilled'

      short_name='ViewKanban'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h2V7H7Zm4-5h2V7h-2Zm4 3h2V7h-2ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialViewKanbanFilled.displayName = 'AmauiIconMaterialViewKanbanFilled';

export default IconMaterialViewKanbanFilled;
