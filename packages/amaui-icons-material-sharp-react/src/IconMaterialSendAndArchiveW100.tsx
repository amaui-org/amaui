import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendAndArchiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchiveW100'

      short_name='SendAndArchive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.55 18.1V5.8l11.675 5.025q-.325.05-.687.113-.363.062-.588.162L5.25 7v4l4.5 1-4.5 1v4l6.225-2.65q-.1.2-.175.475-.075.275-.1.4Zm12.2 2.1q-1.55 0-2.625-1.075T13.05 16.5q0-1.55 1.075-2.625T16.75 12.8q1.55 0 2.625 1.075T20.45 16.5q0 1.55-1.075 2.625T16.75 20.2Zm-11.5-5.85V7v10Zm11.5 4.875 2.65-2.65-.5-.5-1.8 1.8v-4.1h-.7v4.1l-1.8-1.8-.5.5Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchiveW100.displayName = 'AmauiIconMaterialSendAndArchiveW100';

export default IconMaterialSendAndArchiveW100;
