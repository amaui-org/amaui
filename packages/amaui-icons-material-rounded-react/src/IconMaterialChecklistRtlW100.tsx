import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChecklistRtlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRtlW100'

      short_name='ChecklistRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 8.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm11.85-5.8-1.875-1.875q-.1-.1-.087-.237.012-.138.112-.238.1-.1.237-.1.138 0 .238.1L16 9.6l4-4q.1-.1.25-.113.15-.012.25.113.1.1.1.25t-.1.25l-3.95 3.95q-.225.225-.525.225-.3 0-.525-.225Zm0 7-1.875-1.875q-.1-.1-.087-.237.012-.138.112-.238.1-.1.237-.1.138 0 .238.1L16 16.6l4-4q.1-.1.25-.112.15-.013.25.112.1.1.1.25t-.1.25l-3.95 3.95q-.225.225-.525.225-.3 0-.525-.225Z"/>
    </Icon>
  );
});

IconMaterialChecklistRtlW100.displayName = 'AmauiIconMaterialChecklistRtlW100';

export default IconMaterialChecklistRtlW100;
