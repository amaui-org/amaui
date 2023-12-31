import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteStackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackFilled'

      short_name='NoteStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-80 1-601 599 1v400L680-80H280Zm520-240H640v160l160-160ZM172-197 67-788l591-105 24 133H200v558l-28 5Z"/>
    </Icon>
  );
});

IconMaterialNoteStackFilled.displayName = 'AmauiIconMaterialNoteStackFilled';

export default IconMaterialNoteStackFilled;
