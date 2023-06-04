import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventNoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNoteW100'

      short_name='EventNote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 13.35v-.7h8.7v.7Zm0 4v-.7h5.7v.7ZM4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4ZM5 20h14v-9.2H5Zm0-9.9h14V6H5Zm0 0V6v4.1Z"/>
    </Icon>
  );
});

IconMaterialEventNoteW100.displayName = 'AmauiIconMaterialEventNoteW100';

export default IconMaterialEventNoteW100;
