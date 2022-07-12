import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotesOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesOutlinedW100Filled'
      short_name='Notes'

      {...props}
    >
      <path d="M3.65 12.35V11.65H20.35V12.35ZM3.65 17.05V16.35H14.35V17.05ZM3.65 7.65V6.95H20.35V7.65Z"/>
    </Icon>
  )
});

export default IconMaterialNotesOutlinedW100Filled;
