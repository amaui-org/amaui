import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerNotesOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesOffFilled'

      short_name='SpeakerNotesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 18-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575V4.5h2.5L11 11H8.2L1.4 4.2q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.288.688.012.412-.288.712-.275.275-.687.275-.413 0-.713-.275L15.15 18Zm14.7-.15L13.85 11H17q.425 0 .712-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9h-5.15l-1-1H17q.425 0 .712-.287Q18 7.425 18 7t-.288-.713Q17.425 6 17 6h-6q-.425 0-.712.287Q10 6.575 10 7v.15L4.85 2H20q.825 0 1.413.587Q22 3.175 22 4v12q0 .65-.362 1.137-.363.488-.938.713ZM7 14q.425 0 .713-.288Q8 13.425 8 13t-.287-.713Q7.425 12 7 12t-.713.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm0-3q.425 0 .713-.288Q8 10.425 8 10t-.287-.713Q7.425 9 7 9t-.713.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOffFilled.displayName = 'AmauiIconMaterialSpeakerNotesOffFilled';

export default IconMaterialSpeakerNotesOffFilled;
