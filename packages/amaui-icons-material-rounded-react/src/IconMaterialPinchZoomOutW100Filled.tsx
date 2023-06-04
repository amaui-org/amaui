import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinchZoomOutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchZoomOutW100Filled'

      short_name='PinchZoomOut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.4 13.6V9.4h.7v3.025L5.475 9.05l.475.475L2.575 12.9H5.6v.7Zm6.125-5.65-.475-.475L10.425 4.1H7.4v-.7h4.2v4.2h-.7V4.575ZM14.55 20.7q-.15 0-.288-.063-.137-.062-.262-.187l-4.25-4.2.55-.55q.1-.1.212-.138.113-.037.238-.012l3.55.7V6.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.05q.1 0 .188.025.087.025.162.075l3.05 1.5q.725.35 1.038 1.137.312.788.162 1.613l-.7 4q-.05.25-.237.4-.188.15-.463.15Zm0-.7h6.4l.7-4q.1-.525-.063-1.1-.162-.575-.737-.85l-3.1-1.55H16v-6q0-.225-.137-.363Q15.725 6 15.5 6q-.225 0-.363.137Q15 6.275 15 6.5v10.6l-4.25-.85Z"/>
    </Icon>
  );
});

IconMaterialPinchZoomOutW100Filled.displayName = 'AmauiIconMaterialPinchZoomOutW100Filled';

export default IconMaterialPinchZoomOutW100Filled;
