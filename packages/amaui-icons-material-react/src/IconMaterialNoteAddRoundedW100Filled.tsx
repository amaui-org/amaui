import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddRoundedW100Filled'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M12 17.35Q12.15 17.35 12.25 17.25Q12.35 17.15 12.35 17V14.35H15Q15.15 14.35 15.25 14.25Q15.35 14.15 15.35 14Q15.35 13.85 15.25 13.75Q15.15 13.65 15 13.65H12.35V11Q12.35 10.85 12.25 10.75Q12.15 10.65 12 10.65Q11.85 10.65 11.75 10.75Q11.65 10.85 11.65 11V13.65H9Q8.85 13.65 8.75 13.75Q8.65 13.85 8.65 14Q8.65 14.15 8.75 14.25Q8.85 14.35 9 14.35H11.65V17Q11.65 17.15 11.75 17.25Q11.85 17.35 12 17.35ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H14.025Q14.325 3.3 14.6 3.412Q14.875 3.525 15.1 3.75L18.25 6.9Q18.475 7.125 18.587 7.4Q18.7 7.675 18.7 7.975V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM15.05 7.7H18L14.3 4V6.95Q14.3 7.275 14.513 7.487Q14.725 7.7 15.05 7.7Z"/>
    </Icon>
  );
});

IconMaterialNoteAddRoundedW100Filled.displayName = 'AmauiIconMaterialNoteAddRoundedW100Filled';

export default IconMaterialNoteAddRoundedW100Filled;
