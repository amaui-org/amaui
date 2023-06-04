import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddW100Filled'

      short_name='NoteAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm7.5-13.75q0 .325.213.537.212.213.537.213H18L14.3 4Zm-2.65 7.4V17q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-2.65H15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.65V11q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.65H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialNoteAddW100Filled.displayName = 'AmauiIconMaterialNoteAddW100Filled';

export default IconMaterialNoteAddW100Filled;
