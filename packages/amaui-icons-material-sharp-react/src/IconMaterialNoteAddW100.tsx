import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddW100'

      short_name='NoteAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 17.35h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3ZM5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13V4H6v16h12V7.7ZM6 4v3.7V4v16Z"/>
    </Icon>
  );
});

IconMaterialNoteAddW100.displayName = 'AmauiIconMaterialNoteAddW100';

export default IconMaterialNoteAddW100;
