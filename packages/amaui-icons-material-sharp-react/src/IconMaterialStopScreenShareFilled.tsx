import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopScreenShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareFilled'

      short_name='StopScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.85 18-6.425-6.425L16 10l-3-3v2h-1.15l-6-6H22v15Zm-.35 5.3L18.2 21H1v-2h15.175l-1-1H2V4.85L.7 3.5l1.4-1.4 19.8 19.8ZM8 14h2v-1.15l-2-2.025Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareFilled.displayName = 'AmauiIconMaterialStopScreenShareFilled';

export default IconMaterialStopScreenShareFilled;
