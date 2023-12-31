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
      <path d="M332-192v-376q0-25 17.5-42.5T392-628h376q25 0 42.5 17.5T828-568v266L658-132H392q-25 0-42.5-17.5T332-192ZM133-692q-5-25 9.5-45t39.5-25l370-65q25-5 45 9.5t25 39.5l8 50h-28l-9-50q-2-11-12-17.5t-22-4.5l-372 66q-14 2-21 13t-5 25l71 401v17q-13-6-22-17.5T198-322l-65-370Zm227 124v376q0 14 9 23t23 9h248v-130q0-13 8.5-21.5T670-320h130v-248q0-14-9-23t-23-9H392q-14 0-23 9t-9 23Zm220 188Z"/>
    </Icon>
  );
});

IconMaterialNoteStackW100.displayName = 'AmauiIconMaterialNoteStackW100';

export default IconMaterialNoteStackW100;
