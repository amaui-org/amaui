import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerNotesOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesOff'

      short_name='SpeakerNotesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 14q-.425 0-.713-.288Q6 13.425 6 13t.287-.713Q6.575 12 7 12t.713.287Q8 12.575 8 13t-.287.712Q7.425 14 7 14Zm13.7 3.85L18.85 16H20V4H6.85l-2-2H20q.825 0 1.413.587Q22 3.175 22 4v12q0 .65-.362 1.137-.363.488-.938.713ZM10.85 8 10 7.15V7q0-.425.288-.713Q10.575 6 11 6h6q.425 0 .712.287Q18 6.575 18 7t-.288.713Q17.425 8 17 8Zm3 3-2-2H17q.425 0 .712.287Q18 9.575 18 10t-.288.712Q17.425 11 17 11ZM6 18l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575V4.8l-.6-.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.288.688.012.412-.288.712-.275.275-.687.275-.413 0-.713-.275L15.15 18ZM4 6.8v10.375L5.175 16H13.2Zm8.85 3.2ZM8.6 11.4ZM7 11q-.425 0-.713-.288Q6 10.425 6 10t.287-.713Q6.575 9 7 9t.713.287Q8 9.575 8 10t-.287.712Q7.425 11 7 11Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOff.displayName = 'AmauiIconMaterialSpeakerNotesOff';

export default IconMaterialSpeakerNotesOff;
