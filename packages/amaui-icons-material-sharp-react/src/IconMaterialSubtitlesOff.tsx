import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubtitlesOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOff'

      short_name='SubtitlesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.55 23.35 17.15 20H2V4h2l2 2H4v12h11.15l-2-2H6v-2h5.15L.65 3.45l1.4-1.4 19.9 19.9Zm1.45-4.2-2-2V6H8.85l-2-2H22ZM14.85 12l-2-2H18v2ZM6 12v-2h2v2Zm8.425-.425Zm-4.85.85Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOff.displayName = 'AmauiIconMaterialSubtitlesOff';

export default IconMaterialSubtitlesOff;
