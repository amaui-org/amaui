import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopScreenShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShare'

      short_name='StopScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.425 11.575 11.85 9H13V7l3 3ZM20.85 18l-2-2H20V5H7.85l-2-2H22v15Zm-.35 5.3L18.2 21H1v-2h15.175l-1-1H2V4.85L.7 3.5l1.4-1.4 19.8 19.8ZM10 12.85V14H8v-3.175l-4-4V16h9.15Zm2-2.35Zm-3.425.9Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShare.displayName = 'AmauiIconMaterialStopScreenShare';

export default IconMaterialStopScreenShare;
