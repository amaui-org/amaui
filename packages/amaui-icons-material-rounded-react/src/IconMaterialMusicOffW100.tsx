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
      <path d="M18.95 21.2 3.55 5.8q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l15.4 15.4q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125Zm-5.6-9.425-.7-.7V6.05q0-.625.438-1.063.437-.437 1.062-.437h2q.425 0 .737.312.313.313.313.738t-.313.737q-.312.313-.737.313h-2.8Zm-2.7 7.675q-1.125 0-1.912-.787-.788-.788-.788-1.913t.788-1.913q.787-.787 1.912-.787.575 0 1.1.225.525.225.9.675V13.9l.7.7v2.15q0 1.125-.788 1.913-.787.787-1.912.787Z"/>
    </Icon>
  );
});

IconMaterialMusicOffW100.displayName = 'AmauiIconMaterialMusicOffW100';

export default IconMaterialMusicOffW100;
