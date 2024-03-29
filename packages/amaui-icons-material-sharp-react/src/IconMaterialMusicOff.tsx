import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicOff'

      short_name='MusicOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.8 22.6 1.4 4.2l1.4-1.4 18.4 18.4ZM14 11.15l-2-2V3h6v4h-4ZM10 21q-1.65 0-2.825-1.175Q6 18.65 6 17q0-1.65 1.175-2.825Q8.35 13 10 13q.575 0 1.062.137.488.138.938.413V12l2 2v3q0 1.65-1.175 2.825Q11.65 21 10 21Z"/>
    </Icon>
  );
});

IconMaterialMusicOff.displayName = 'AmauiIconMaterialMusicOff';

export default IconMaterialMusicOff;
