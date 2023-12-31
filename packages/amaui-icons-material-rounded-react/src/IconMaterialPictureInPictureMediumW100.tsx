import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureMediumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureMediumW100'

      short_name='PictureInPictureMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-340q-12.75 0-21.375-8.625T316-370v-244q0-12.75 8.625-21.375T346-644h324q12.75 0 21.375 8.625T700-614v244q0 12.75-8.625 21.375T670-340H346ZM146-212q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h622q12 0 22-10t10-22v-462q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v462q0 26-17 43t-43 17H146Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureMediumW100.displayName = 'AmauiIconMaterialPictureInPictureMediumW100';

export default IconMaterialPictureInPictureMediumW100;
