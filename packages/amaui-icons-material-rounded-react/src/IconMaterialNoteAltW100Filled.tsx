import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAltW100Filled'

      short_name='NoteAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.6 10.15-.75-.75-5.675 5.675q-.1.1-.137.2-.038.1-.038.225v.1q0 .175.113.287.112.113.287.113h.075q.125 0 .213-.038.087-.037.187-.137Zm.5-.5.75-.75q.15-.15.15-.35 0-.2-.15-.35l-.05-.05Q15.65 8 15.45 8q-.2 0-.35.15l-.75.75ZM5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.85q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h4.85q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialNoteAltW100Filled.displayName = 'AmauiIconMaterialNoteAltW100Filled';

export default IconMaterialNoteAltW100Filled;
