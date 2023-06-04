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
      <path d="M10.075 19.45q-1.125 0-1.912-.787-.788-.788-.788-1.913t.788-1.913q.787-.787 1.912-.787.575 0 1.1.225.525.225.9.675V4.55h4.55v2.1h-3.85v10.1q0 1.125-.787 1.913-.788.787-1.913.787Z"/>
    </Icon>
  );
});

IconMaterialMusicNoteW100Filled.displayName = 'AmauiIconMaterialMusicNoteW100Filled';

export default IconMaterialMusicNoteW100Filled;
