import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAltSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAltSharpW100'
      short_name='NoteAlt'

      {...props}
    >
      <path d="M8 16H8.7L14.6 10.15L13.85 9.4L8 15.25ZM15.1 9.65 15.85 8.9Q16 8.75 16 8.55Q16 8.35 15.85 8.2L15.8 8.15Q15.65 8 15.45 8Q15.25 8 15.1 8.15L14.35 8.9ZM4.3 19.7V4.3H10.65Q10.375 3.575 10.8 2.937Q11.225 2.3 12.025 2.3Q12.8 2.3 13.225 2.937Q13.65 3.575 13.35 4.3H19.7V19.7ZM12 4.5Q12.325 4.5 12.538 4.287Q12.75 4.075 12.75 3.75Q12.75 3.425 12.538 3.212Q12.325 3 12 3Q11.675 3 11.463 3.212Q11.25 3.425 11.25 3.75Q11.25 4.075 11.463 4.287Q11.675 4.5 12 4.5ZM19 19V5H5V19ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterialNoteAltSharpW100.displayName = 'AmauiIconMaterialNoteAltSharpW100';

export default IconMaterialNoteAltSharpW100;
