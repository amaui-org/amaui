import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteStackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackW100Filled'

      short_name='NoteStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-132v-496h496v326L658-132H332Zm468-188H640v160l160-160Zm-591 57-86-488 488-86 19 109H232v461l-23 4Z"/>
    </Icon>
  );
});

IconMaterialNoteStackW100Filled.displayName = 'AmauiIconMaterialNoteStackW100Filled';

export default IconMaterialNoteStackW100Filled;
