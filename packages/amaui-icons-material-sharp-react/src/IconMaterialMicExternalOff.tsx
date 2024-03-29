import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicExternalOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOff'

      short_name='MicExternalOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 6.65 5.35 2.5q.35-.275.775-.388Q6.55 2 7 2q1.25 0 2.125.862Q10 3.725 10 5q0 .45-.137.862-.138.413-.363.788ZM20 17.15l-2-2V4h-4v7.15l-2-2V2h8Zm.5 6.15L14 16.8V22H6v-4H5L4 8h1.15L.7 3.5l1.4-1.4 19.8 19.8ZM6.8 16h.4l.55-5.45-.6-.55H6.2ZM8 20h4v-5.2l-2.45-2.45L9 18H8ZM6.2 10H7.75 6.8Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOff.displayName = 'AmauiIconMaterialMicExternalOff';

export default IconMaterialMicExternalOff;
