import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChecklistW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistW100Filled'

      short_name='Checklist'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.925 17.575 3.3 14.95l.475-.475L5.9 16.6l4.25-4.25.475.5Zm0-7L3.3 7.95l.475-.475L5.9 9.6l4.25-4.25.475.5Zm7.1 5.275v-.7h7.7v.7Zm0-7v-.7h7.7v.7Z"/>
    </Icon>
  );
});

IconMaterialChecklistW100Filled.displayName = 'AmauiIconMaterialChecklistW100Filled';

export default IconMaterialChecklistW100Filled;
