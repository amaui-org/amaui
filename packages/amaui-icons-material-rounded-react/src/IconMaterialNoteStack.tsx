import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteStack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStack'

      short_name='NoteStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-441q0-33 24-56t57-23h439q33 0 56.5 23.5T880-600v320L680-80H360q-33 0-56.5-23.5T280-160ZM81-710q-6-33 13-59.5t52-32.5l434-77q33-6 59.5 13t32.5 52l10 54h-82l-7-40-433 77 40 226v279q-16-9-27.5-24T158-276L81-710Zm279 110v440h280v-120q0-17 11.5-28.5T680-320h120v-280H360Zm220 220Z"/>
    </Icon>
  );
});

IconMaterialNoteStack.displayName = 'AmauiIconMaterialNoteStack';

export default IconMaterialNoteStack;
