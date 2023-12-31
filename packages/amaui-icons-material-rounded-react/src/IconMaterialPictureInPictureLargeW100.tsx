import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureLargeW100'

      short_name='PictureInPictureLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-340q-12.75 0-21.375-8.625T236-370v-324q0-12.75 8.625-21.375T266-724h404q12.75 0 21.375 8.625T700-694v324q0 12.75-8.625 21.375T670-340H266ZM146-212q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h622q12 0 22-10t10-22v-462q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v462q0 26-17 43t-43 17H146Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureLargeW100.displayName = 'AmauiIconMaterialPictureInPictureLargeW100';

export default IconMaterialPictureInPictureLargeW100;
