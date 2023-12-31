import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNoteW100'

      short_name='StickyNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M618-172H172v-616h616v446L618-172Zm-18-28v-160h160v-400H200v560h400ZM466-346h28v-240h120v-28H346v28h120v240Zm134 146Zm-400 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialStickyNoteW100.displayName = 'AmauiIconMaterialStickyNoteW100';

export default IconMaterialStickyNoteW100;
