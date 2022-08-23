import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAltSharp'
      short_name='NoteAlt'

      {...props}
    >
      <path d="M7 17H9.1L15.1 11.05L12.95 8.9L7 14.85ZM15.8 10.35 16.85 9.25Q17 9.1 17 8.9Q17 8.7 16.85 8.55L15.45 7.15Q15.3 7 15.1 7Q14.9 7 14.75 7.15L13.65 8.2ZM3 21V3H9.2Q9.525 2.1 10.288 1.55Q11.05 1 12 1Q12.95 1 13.713 1.55Q14.475 2.1 14.8 3H21V21ZM12 4.25Q12.325 4.25 12.538 4.037Q12.75 3.825 12.75 3.5Q12.75 3.175 12.538 2.962Q12.325 2.75 12 2.75Q11.675 2.75 11.463 2.962Q11.25 3.175 11.25 3.5Q11.25 3.825 11.463 4.037Q11.675 4.25 12 4.25ZM19 19V5H5V19ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterialNoteAltSharp.displayName = 'AmauiIconMaterialNoteAltSharp';

export default IconMaterialNoteAltSharp;
