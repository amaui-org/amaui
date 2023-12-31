import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNoteW100Filled'

      short_name='StickyNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M618-172H172v-616h616v446L618-172Zm-18-28 160-160H600v160ZM466-346h28v-240h120v-28H346v28h120v240Z"/>
    </Icon>
  );
});

IconMaterialStickyNoteW100Filled.displayName = 'AmauiIconMaterialStickyNoteW100Filled';

export default IconMaterialStickyNoteW100Filled;
