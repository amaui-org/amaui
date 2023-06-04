import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesW100'

      short_name='Notes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 17.05v-.7h10.7v.7Zm0-4.7v-.7h16.7v.7Zm0-4.7v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialNotesW100.displayName = 'AmauiIconMaterialNotesW100';

export default IconMaterialNotesW100;
