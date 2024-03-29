import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinchZoomIn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchZoomIn'

      short_name='PinchZoomIn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m1.525 14.525-1.05-1.05L3.45 10.5H1V9h5v5H4.5v-2.45ZM7 8V3h1.5v2.45l2.975-2.975 1.05 1.05L9.55 6.5H12V8Zm7.55 14q-.425 0-.8-.163-.375-.162-.65-.437l-5.15-5.15 1.4-1.45q.35-.35.788-.538.437-.187.912-.062l1.95.45V6.5q0-1.05.725-1.775Q14.45 4 15.5 4q1.05 0 1.775.725Q18 5.45 18 6.5v4.3h.65q.125 0 .225.05t.225.1l3.7 1.8q.6.275.888.887.287.613.162 1.263l-.9 5.45q-.125.725-.7 1.188-.575.462-1.3.462Zm0-2h6.4l.95-5.45-4.15-2.05H16v-6q0-.225-.137-.363Q15.725 6 15.5 6q-.225 0-.363.137Q15 6.275 15 6.5v10.6l-4.25-.9Z"/>
    </Icon>
  );
});

IconMaterialPinchZoomIn.displayName = 'AmauiIconMaterialPinchZoomIn';

export default IconMaterialPinchZoomIn;
