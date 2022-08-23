import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotesSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesSharpW100'
      short_name='Notes'

      {...props}
    >
      <path d="M3.65 12.35V11.65H20.35V12.35ZM3.65 17.05V16.35H14.35V17.05ZM3.65 7.65V6.95H20.35V7.65Z"/>
    </Icon>
  );
});

IconMaterialNotesSharpW100.displayName = 'AmauiIconMaterialNotesSharpW100';

export default IconMaterialNotesSharpW100;
