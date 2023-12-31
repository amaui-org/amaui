import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteStackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackW100'

      short_name='NoteStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-132v-496h496v326L658-132H332Zm28-28h280v-160h160v-280H360v440ZM209-263l-86-488 488-86 19 109h-28l-14-77-433 77 77 433v28l-23 4Zm151 103h280l160-160v-280H360v440Z"/>
    </Icon>
  );
});

IconMaterialNoteStackW100.displayName = 'AmauiIconMaterialNoteStackW100';

export default IconMaterialNoteStackW100;
