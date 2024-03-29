import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddFilled'

      short_name='NoteAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm7-14q0 .425.288.712Q13.575 9 14 9h4l-5-5Zm-2 7v2q0 .425.288.712.287.288.712.288t.713-.288Q13 17.425 13 17v-2h2q.425 0 .713-.288Q16 14.425 16 14t-.287-.713Q15.425 13 15 13h-2v-2q0-.425-.287-.713Q12.425 10 12 10t-.712.287Q11 10.575 11 11v2H9q-.425 0-.712.287Q8 13.575 8 14t.288.712Q8.575 15 9 15Z"/>
    </Icon>
  );
});

IconMaterialNoteAddFilled.displayName = 'AmauiIconMaterialNoteAddFilled';

export default IconMaterialNoteAddFilled;
