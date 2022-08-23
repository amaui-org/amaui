import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesSharp'
      short_name='Notes'

      {...props}
    >
      <path d="M3 13V11H21V13ZM3 18V16H15V18ZM3 8V6H21V8Z"/>
    </Icon>
  );
});

IconMaterialNotesSharp.displayName = 'AmauiIconMaterialNotesSharp';

export default IconMaterialNotesSharp;
