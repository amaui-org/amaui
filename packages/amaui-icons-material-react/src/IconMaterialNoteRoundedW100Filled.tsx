import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteRoundedW100Filled'
      short_name='Note'

      {...props}
    >
      <path d="M6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H14.025Q14.325 3.3 14.6 3.412Q14.875 3.525 15.1 3.75L18.25 6.9Q18.475 7.125 18.587 7.4Q18.7 7.675 18.7 7.975V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM15.05 7.7H18L14.3 4V6.95Q14.3 7.275 14.513 7.487Q14.725 7.7 15.05 7.7Z"/>
    </Icon>
  );
});

IconMaterialNoteRoundedW100Filled.displayName = 'AmauiIconMaterialNoteRoundedW100Filled';

export default IconMaterialNoteRoundedW100Filled;
