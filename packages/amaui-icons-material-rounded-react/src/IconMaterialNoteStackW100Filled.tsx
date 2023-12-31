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
      <path d="M332-192v-376q0-25 17.5-42.5T392-628h376q25 0 42.5 17.5T828-568v266L658-132H392q-25 0-42.5-17.5T332-192ZM133-692q-5-25 9.5-45t39.5-25l370-65q25-5 45 9.5t25 39.5l8 50H392q-66 0-113 47t-47 113v290q-13-6-22-17.5T198-322l-65-370Zm667 372H670q-13 0-21.5 8.5T640-290v130l160-160Z"/>
    </Icon>
  );
});

IconMaterialNoteStackW100Filled.displayName = 'AmauiIconMaterialNoteStackW100Filled';

export default IconMaterialNoteStackW100Filled;
