import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteStackAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackAddW100Filled'

      short_name='NoteStackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-132v-496h496v326L658-132H332ZM209-263l-86-488 488-86 19 109H232.114v460.87L209-263Zm357 17h28v-120h120v-28H594v-120h-28v120H446v28h120v120Z"/>
    </Icon>
  );
});

IconMaterialNoteStackAddW100Filled.displayName = 'AmauiIconMaterialNoteStackAddW100Filled';

export default IconMaterialNoteStackAddW100Filled;
