import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotesTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesTwoTone'
      short_name='Notes'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"/>
    </Icon>
  );
});

IconMaterialNotesTwoTone.displayName = 'AmauiIconMaterialNotesTwoTone';

export default IconMaterialNotesTwoTone;
