import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicOffW100'

      short_name='MusicOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.2 21.45 3.3 5.55l.5-.5 15.9 15.9Zm-5.85-9.675-.7-.7V4.55h4.55v2.1h-3.85Zm-2.7 7.675q-1.125 0-1.912-.787-.788-.788-.788-1.913t.788-1.913q.787-.787 1.912-.787.575 0 1.1.225.525.225.9.675V13.9l.7.7v2.15q0 1.125-.788 1.913-.787.787-1.912.787Z"/>
    </Icon>
  );
});

IconMaterialMusicOffW100.displayName = 'AmauiIconMaterialMusicOffW100';

export default IconMaterialMusicOffW100;
