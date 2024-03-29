import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmokingRoomsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmokingRoomsFilled'

      short_name='SmokingRooms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 19v-3h1.5v3ZM2 19v-3h15v3Zm16-4v-1.3q0-.975-.575-1.488-.575-.512-1.375-.512H14.5q-1.4 0-2.375-.975-.975-.975-.975-2.375t.975-2.375Q13.1 5 14.5 5v1.5q-.75 0-1.3.525t-.55 1.325q0 .8.55 1.325.55.525 1.3.525h1.55q1.4 0 2.425.9t1.025 2.25V15Zm2.5 4v-3H22v3Zm0-4v-2.25q0-1.65-1.15-2.85-1.15-1.2-2.85-1.2V7.2q.75 0 1.3-.55t.55-1.3q0-.75-.55-1.3t-1.3-.55V2q1.4 0 2.375.975.975.975.975 2.375 0 .725-.275 1.312-.275.588-.725 1.088 1.4.65 2.275 2t.875 3V15Z"/>
    </Icon>
  );
});

IconMaterialSmokingRoomsFilled.displayName = 'AmauiIconMaterialSmokingRoomsFilled';

export default IconMaterialSmokingRoomsFilled;
