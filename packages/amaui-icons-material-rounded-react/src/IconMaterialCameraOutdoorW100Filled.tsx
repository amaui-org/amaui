import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraOutdoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorW100Filled'

      short_name='CameraOutdoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 19.7q-.625 0-1.062-.438Q5.3 18.825 5.3 18.2v-7.8q0-.35.163-.675.162-.325.437-.525l5.2-3.925q.4-.3.9-.3t.9.3L18.1 9.2q.275.2.438.525.162.325.162.675v.6h-6.3q-.825 0-1.412.587-.588.588-.588 1.413v4q0 .825.588 1.413.587.587 1.412.587h6.3v.7Zm5.6-2.2q-.2 0-.35-.15-.15-.15-.15-.35v-4q0-.225.15-.363.15-.137.35-.137h4q.225 0 .363.137.137.138.137.363v1.6l1.225-.65q.2-.125.387.012.188.138.188.363v1.35q0 .225-.188.363-.187.137-.387.012L16.9 15.4V17q0 .2-.137.35-.138.15-.363.15Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoorW100Filled.displayName = 'AmauiIconMaterialCameraOutdoorW100Filled';

export default IconMaterialCameraOutdoorW100Filled;
