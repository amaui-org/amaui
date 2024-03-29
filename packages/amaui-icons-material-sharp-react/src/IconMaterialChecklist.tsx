import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChecklist = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Checklist'

      short_name='Checklist'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.55 19 2 15.45l1.4-1.4 2.125 2.125 4.25-4.25 1.4 1.425Zm0-8L2 7.45l1.4-1.4 2.125 2.125 4.25-4.25 1.4 1.425ZM13 17v-2h9v2Zm0-8V7h9v2Z"/>
    </Icon>
  );
});

IconMaterialChecklist.displayName = 'AmauiIconMaterialChecklist';

export default IconMaterialChecklist;
