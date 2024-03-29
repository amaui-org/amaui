import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerNotes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotes'

      short_name='SpeakerNotes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 8h6q.425 0 .712-.287Q18 7.425 18 7t-.288-.713Q17.425 6 17 6h-6q-.425 0-.712.287Q10 6.575 10 7t.288.713Q10.575 8 11 8Zm0 3h6q.425 0 .712-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9h-6q-.425 0-.712.287Q10 9.575 10 10t.288.712Q10.575 11 11 11Zm0 3h3q.425 0 .713-.288Q15 13.425 15 13t-.287-.713Q14.425 12 14 12h-3q-.425 0-.712.287Q10 12.575 10 13t.288.712Q10.575 14 11 14ZM7 8q.425 0 .713-.287Q8 7.425 8 7t-.287-.713Q7.425 6 7 6t-.713.287Q6 6.575 6 7t.287.713Q6.575 8 7 8Zm0 3q.425 0 .713-.288Q8 10.425 8 10t-.287-.713Q7.425 9 7 9t-.713.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0 3q.425 0 .713-.288Q8 13.425 8 13t-.287-.713Q7.425 12 7 12t-.713.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm-5 5.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Zm2-2.4L5.175 16H20V4H4ZM4 4v13.175Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotes.displayName = 'AmauiIconMaterialSpeakerNotes';

export default IconMaterialSpeakerNotes;
