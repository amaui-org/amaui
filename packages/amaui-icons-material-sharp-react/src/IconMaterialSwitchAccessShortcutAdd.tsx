import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccessShortcutAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessShortcutAdd'

      short_name='SwitchAccessShortcutAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5 15-.625-1.375L3 13l1.375-.625L5 11l.625 1.375L7 13l-1.375.625Zm3 6-.95-2.05L5 18l2.05-.95L8 15l.95 2.05L11 18l-2.05.95Zm0-10-.95-2.05L5 8l2.05-.95L8 5l.95 2.05L11 8l-2.05.95Zm11 11q-3.1-1.2-5.05-3.962Q12 15.275 12 12q0-2.35.938-4.4.937-2.05 2.512-3.6H12V2h7v7h-2V5.275Q15.65 6.6 14.825 8.35 14 10.1 14 12q0 2.5 1.4 4.6 1.4 2.1 3.6 3.225Zm1-4v-2h-2v-2h2v-2h2v2h2v2h-2v2Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessShortcutAdd.displayName = 'AmauiIconMaterialSwitchAccessShortcutAdd';

export default IconMaterialSwitchAccessShortcutAdd;
