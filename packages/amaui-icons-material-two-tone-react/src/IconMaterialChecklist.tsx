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
      <rect fill="none" height="24" width="24"/><path d="M22,7h-9v2h9V7z M22,15h-9v2h9V15z M5.54,11L2,7.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,11z M5.54,19L2,15.46 l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,19z"/>
    </Icon>
  );
});

IconMaterialChecklist.displayName = 'AmauiIconMaterialChecklist';

export default IconMaterialChecklist;
