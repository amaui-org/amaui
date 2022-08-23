import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicNoteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicNoteRoundedFilled'
      short_name='MusicNote'

      {...props}
    >
      <path d="M10 21Q8.35 21 7.175 19.825Q6 18.65 6 17Q6 15.35 7.175 14.175Q8.35 13 10 13Q10.575 13 11.062 13.137Q11.55 13.275 12 13.55V5Q12 4.175 12.588 3.587Q13.175 3 14 3H16Q16.825 3 17.413 3.587Q18 4.175 18 5Q18 5.825 17.413 6.412Q16.825 7 16 7H14V17Q14 18.65 12.825 19.825Q11.65 21 10 21Z"/>
    </Icon>
  );
});

IconMaterialMusicNoteRoundedFilled.displayName = 'AmauiIconMaterialMusicNoteRoundedFilled';

export default IconMaterialMusicNoteRoundedFilled;
