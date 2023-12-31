import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteStackAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackAddFilled'

      short_name='NoteStackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-80 1-601 599 1v400L680-80H280ZM172-197 67-788l591-105 24 133H200v558l-28 5Zm368-23h80v-120h120v-80H620v-120h-80v120H420v80h120v120Z"/>
    </Icon>
  );
});

IconMaterialNoteStackAddFilled.displayName = 'AmauiIconMaterialNoteStackAddFilled';

export default IconMaterialNoteStackAddFilled;
