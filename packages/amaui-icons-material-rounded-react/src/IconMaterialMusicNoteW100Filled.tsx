import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicNoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicNoteW100Filled'

      short_name='MusicNote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.075 19.45q-1.125 0-1.912-.787-.788-.788-.788-1.913t.788-1.913q.787-.787 1.912-.787.575 0 1.1.225.525.225.9.675v-8.9q0-.625.438-1.063.437-.437 1.062-.437h2q.425 0 .737.312.313.313.313.738t-.313.737q-.312.313-.737.313h-2.8v10.1q0 1.125-.787 1.913-.788.787-1.913.787Z"/>
    </Icon>
  );
});

IconMaterialMusicNoteW100Filled.displayName = 'AmauiIconMaterialMusicNoteW100Filled';

export default IconMaterialMusicNoteW100Filled;
