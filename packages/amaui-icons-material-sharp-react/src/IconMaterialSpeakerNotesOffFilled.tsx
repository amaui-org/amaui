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
      <path d="M20.7 17.85 13.85 11H18V9h-6.15l-1-1H18V6h-8v1.15L4.85 2H22v15.85ZM7 14q.425 0 .713-.288Q8 13.425 8 13t-.287-.713Q7.425 12 7 12t-.713.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm0-3q.425 0 .713-.288Q8 10.425 8 10t-.287-.713Q7.425 9 7 9t-.713.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm13.5 12.3L15.15 18H6l-4 4V4.5h2.5L11 11H8.2L.7 3.5l1.4-1.4 19.8 19.8Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOffFilled.displayName = 'AmauiIconMaterialSpeakerNotesOffFilled';

export default IconMaterialSpeakerNotesOffFilled;
