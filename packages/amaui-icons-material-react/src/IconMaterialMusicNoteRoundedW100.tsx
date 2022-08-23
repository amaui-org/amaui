import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicNoteRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicNoteRoundedW100'
      short_name='MusicNote'

      {...props}
    >
      <path d="M10.075 19.45Q8.95 19.45 8.163 18.663Q7.375 17.875 7.375 16.75Q7.375 15.625 8.163 14.837Q8.95 14.05 10.075 14.05Q10.65 14.05 11.175 14.275Q11.7 14.5 12.075 14.95V6.05Q12.075 5.425 12.513 4.987Q12.95 4.55 13.575 4.55H15.575Q16 4.55 16.312 4.862Q16.625 5.175 16.625 5.6Q16.625 6.025 16.312 6.337Q16 6.65 15.575 6.65H12.775V16.75Q12.775 17.875 11.988 18.663Q11.2 19.45 10.075 19.45Z"/>
    </Icon>
  );
});

IconMaterialMusicNoteRoundedW100.displayName = 'AmauiIconMaterialMusicNoteRoundedW100';

export default IconMaterialMusicNoteRoundedW100;
