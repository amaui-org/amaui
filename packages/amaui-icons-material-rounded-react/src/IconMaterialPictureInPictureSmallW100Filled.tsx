import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSmallW100Filled'

      short_name='PictureInPictureSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-212q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h622q12 0 22-10t10-22v-462q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v462q0 26-17 43t-43 17H146Zm280-128q-12.75 0-21.375-8.625T396-370v-164q0-12.75 8.625-21.375T426-564h244q12.75 0 21.375 8.625T700-534v164q0 12.75-8.625 21.375T670-340H426Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureSmallW100Filled.displayName = 'AmauiIconMaterialPictureInPictureSmallW100Filled';

export default IconMaterialPictureInPictureSmallW100Filled;
