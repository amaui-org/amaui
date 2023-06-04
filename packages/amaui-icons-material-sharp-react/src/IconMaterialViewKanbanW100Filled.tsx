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
      <path d="M7.65 16.35h.7v-8.7h-.7Zm4-5h.7v-3.7h-.7Zm4 3h.7v-6.7h-.7ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialViewKanbanW100Filled.displayName = 'AmauiIconMaterialViewKanbanW100Filled';

export default IconMaterialViewKanbanW100Filled;
