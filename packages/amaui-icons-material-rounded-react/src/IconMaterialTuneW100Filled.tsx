import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTuneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TuneW100Filled'

      short_name='Tune'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-12q-.15 0-.25-.1T3.65 6q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm8 14q-.15 0-.25-.1t-.1-.25v-4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-7.65V20q0 .15-.1.25t-.25.1Zm-4-6q-.15 0-.25-.1t-.1-.25v-1.65H4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.65V10q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4q0 .15-.1.25t-.25.1Zm4-2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm4-4q-.15 0-.25-.1t-.1-.25V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-3.65V8q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTuneW100Filled.displayName = 'AmauiIconMaterialTuneW100Filled';

export default IconMaterialTuneW100Filled;
