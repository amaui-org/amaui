import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubjectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectW100Filled'

      short_name='Subject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-8q-.15 0-.25-.1T4.65 6q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialSubjectW100Filled.displayName = 'AmauiIconMaterialSubjectW100Filled';

export default IconMaterialSubjectW100Filled;
