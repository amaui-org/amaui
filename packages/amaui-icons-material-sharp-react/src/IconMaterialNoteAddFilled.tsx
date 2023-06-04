import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddFilled'

      short_name='NoteAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 18h2v-3h3v-2h-3v-3h-2v3H8v2h3Zm-7 4V2h10l6 6v14Zm9-13h5l-5-5Z"/>
    </Icon>
  );
});

IconMaterialNoteAddFilled.displayName = 'AmauiIconMaterialNoteAddFilled';

export default IconMaterialNoteAddFilled;
