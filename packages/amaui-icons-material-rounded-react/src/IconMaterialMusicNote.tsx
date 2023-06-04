import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicNote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicNote'

      short_name='MusicNote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 21q-1.65 0-2.825-1.175Q6 18.65 6 17q0-1.65 1.175-2.825Q8.35 13 10 13q.575 0 1.062.137.488.138.938.413V5q0-.825.588-1.413Q13.175 3 14 3h2q.825 0 1.413.587Q18 4.175 18 5q0 .825-.587 1.412Q16.825 7 16 7h-2v10q0 1.65-1.175 2.825Q11.65 21 10 21Z"/>
    </Icon>
  );
});

IconMaterialMusicNote.displayName = 'AmauiIconMaterialMusicNote';

export default IconMaterialMusicNote;
