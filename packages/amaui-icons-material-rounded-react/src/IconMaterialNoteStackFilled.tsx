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
      <path d="M280-160v-441q0-33 24-56t57-23h439q33 0 56.5 23.5T880-600v320L680-80H360q-33 0-56.5-23.5T280-160ZM81-710q-6-33 13-59.5t52-32.5l434-77q33-6 59.5 13t32.5 52l10 54H360q-66 0-113 47t-47 113v382q-16-9-27.5-24T158-276L81-710Zm719 390H680q-17 0-28.5 11.5T640-280v120l160-160Z"/>
    </Icon>
  );
});

IconMaterialNoteStackFilled.displayName = 'AmauiIconMaterialNoteStackFilled';

export default IconMaterialNoteStackFilled;
