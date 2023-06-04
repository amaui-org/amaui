import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesW100'

      short_name='Notes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 12.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-9.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialNotesW100.displayName = 'AmauiIconMaterialNotesW100';

export default IconMaterialNotesW100;
