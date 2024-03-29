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
      <path d="M7 14q-.425 0-.713-.288Q6 13.425 6 13t.287-.713Q6.575 12 7 12t.713.287Q8 12.575 8 13t-.287.712Q7.425 14 7 14Zm13.7 3.85L18.85 16H20V4H6.85l-2-2H22v15.85ZM13.85 11l-2-2H18v2Zm6.65 12.3L15.15 18H6l-4 4V4.8L.7 3.5l1.4-1.4 19.8 19.8ZM4 6.8v10.375L5.175 16H13.2Zm8.85 3.2ZM8.6 11.4ZM7 11q-.425 0-.713-.288Q6 10.425 6 10t.287-.713Q6.575 9 7 9t.713.287Q8 9.575 8 10t-.287.712Q7.425 11 7 11Zm3.85-3L10 7.15V6h8v2Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOff.displayName = 'AmauiIconMaterialSpeakerNotesOff';

export default IconMaterialSpeakerNotesOff;
