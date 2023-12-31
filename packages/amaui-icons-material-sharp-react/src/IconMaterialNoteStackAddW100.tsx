import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteStackAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackAddW100'

      short_name='NoteStackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-132v-496h496v326L658-132H332Zm28-28h280l160-160v-280H360v440ZM209-263l-86-488 488-86 19 109h-28l-14-77-433 77 77 433v28l-23 4Zm357 17h28v-120h120v-28H594v-120h-28v120H446v28h120v120Zm14-134Z"/>
    </Icon>
  );
});

IconMaterialNoteStackAddW100.displayName = 'AmauiIconMaterialNoteStackAddW100';

export default IconMaterialNoteStackAddW100;
