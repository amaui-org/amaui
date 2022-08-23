import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteRoundedW100'
      short_name='Note'

      {...props}
    >
      <path d="M6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H14.025Q14.325 3.3 14.6 3.412Q14.875 3.525 15.1 3.75L18.25 6.9Q18.475 7.125 18.587 7.4Q18.7 7.675 18.7 7.975V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM6.8 20H17.2Q17.5 20 17.75 19.75Q18 19.5 18 19.2V7.7H15.05Q14.725 7.7 14.513 7.487Q14.3 7.275 14.3 6.95V4H6.8Q6.5 4 6.25 4.25Q6 4.5 6 4.8V19.2Q6 19.5 6.25 19.75Q6.5 20 6.8 20ZM6 20Q6 20 6 19.75Q6 19.5 6 19.2V7.7V4Q6 4 6 4.25Q6 4.5 6 4.8V19.2Q6 19.5 6 19.75Q6 20 6 20Z"/>
    </Icon>
  );
});

IconMaterialNoteRoundedW100.displayName = 'AmauiIconMaterialNoteRoundedW100';

export default IconMaterialNoteRoundedW100;
