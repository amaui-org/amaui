import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteW100Filled'

      short_name='Note'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13H18L14.3 4Z"/>
    </Icon>
  );
});

IconMaterialNoteW100Filled.displayName = 'AmauiIconMaterialNoteW100Filled';

export default IconMaterialNoteW100Filled;
