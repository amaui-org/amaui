import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChecklistW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistW100'

      short_name='Checklist'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.375 8.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM5.4 10.05 3.525 8.175q-.1-.1-.087-.237.012-.138.112-.238.1-.1.238-.1.137 0 .237.1L5.9 9.6l4-4q.1-.1.25-.113.15-.012.25.113.1.1.1.25t-.1.25l-3.95 3.95q-.225.225-.525.225-.3 0-.525-.225Zm0 7-1.875-1.875q-.1-.1-.087-.237.012-.138.112-.238.1-.1.238-.1.137 0 .237.1L5.9 16.6l4-4q.1-.1.25-.112.15-.013.25.112.1.1.1.25t-.1.25l-3.95 3.95q-.225.225-.525.225-.3 0-.525-.225Z"/>
    </Icon>
  );
});

IconMaterialChecklistW100.displayName = 'AmauiIconMaterialChecklistW100';

export default IconMaterialChecklistW100;
