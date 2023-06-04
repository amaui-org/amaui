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
      <path d="M8 16h.7l5.9-5.85-.75-.75L8 15.25Zm7.1-6.35.75-.75q.15-.15.15-.35 0-.2-.15-.35l-.05-.05Q15.65 8 15.45 8q-.2 0-.35.15l-.75.75ZM4.3 19.7V4.3h6.35q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h6.35v15.4ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialNoteAltW100Filled.displayName = 'AmauiIconMaterialNoteAltW100Filled';

export default IconMaterialNoteAltW100Filled;
