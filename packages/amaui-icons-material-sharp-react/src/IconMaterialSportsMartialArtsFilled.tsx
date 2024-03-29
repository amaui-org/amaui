import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsMartialArtsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMartialArtsFilled'

      short_name='SportsMartialArts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 22-.5-9-3.175-1.825-.35 1.3L8 16l-1.725 1L3.8 12.75 5 8.45l5.75-3.3L8 2.4 9.4 1 14 5.575 10.4 7.65l1.2 1.05L19.8 2 21 3.4 12.5 12 12 22ZM5 7q-.825 0-1.413-.588Q3 5.825 3 5t.587-1.413Q4.175 3 5 3q.825 0 1.412.587Q7 4.175 7 5q0 .825-.588 1.412Q5.825 7 5 7Z"/>
    </Icon>
  );
});

IconMaterialSportsMartialArtsFilled.displayName = 'AmauiIconMaterialSportsMartialArtsFilled';

export default IconMaterialSportsMartialArtsFilled;
