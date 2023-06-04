import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesFilled'

      short_name='Notes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18v-2h12v2Zm0-5v-2h18v2Zm0-5V6h18v2Z"/>
    </Icon>
  );
});

IconMaterialNotesFilled.displayName = 'AmauiIconMaterialNotesFilled';

export default IconMaterialNotesFilled;
