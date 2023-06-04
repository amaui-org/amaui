import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewKanbanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewKanbanW100Filled'

      short_name='ViewKanban'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 16.35q.15 0 .25-.1t.1-.25V8q0-.15-.1-.25T8 7.65q-.15 0-.25.1t-.1.25v8q0 .15.1.25t.25.1Zm4-5q.15 0 .25-.1t.1-.25V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3q0 .15.1.25t.25.1Zm4 3q.15 0 .25-.1t.1-.25V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v6q0 .15.1.25t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialViewKanbanW100Filled.displayName = 'AmauiIconMaterialViewKanbanW100Filled';

export default IconMaterialViewKanbanW100Filled;
