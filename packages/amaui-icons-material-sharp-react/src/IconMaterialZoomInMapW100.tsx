import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZoomInMapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomInMapW100'

      short_name='ZoomInMap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.55 19.95-.5-.5L7.8 15.7H4.3V15H9v4.7h-.7v-3.5Zm14.9 0L15.7 16.2v3.5H15V15h4.7v.7h-3.5l3.75 3.75ZM4.3 9v-.7h3.5L4.05 4.55l.5-.5L8.3 7.8V4.3H9V9ZM15 9V4.3h.7v3.5l3.75-3.75.5.5L16.2 8.3h3.5V9Z"/>
    </Icon>
  );
});

IconMaterialZoomInMapW100.displayName = 'AmauiIconMaterialZoomInMapW100';

export default IconMaterialZoomInMapW100;
