import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraOutdoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorW100'

      short_name='CameraOutdoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.4 17.5q-.2 0-.35-.15-.15-.15-.15-.35v-4q0-.225.15-.363.15-.137.35-.137h4q.225 0 .363.137.137.138.137.363v1.6l1.225-.65q.2-.125.387.012.188.138.188.363v1.35q0 .225-.188.363-.187.137-.387.012L16.9 15.4V17q0 .2-.137.35-.138.15-.363.15Zm-7.1.7v-7.8q0-.35.163-.675.162-.325.437-.525l5.2-3.925q.4-.3.9-.3t.9.3L18.1 9.2q.275.2.438.525.162.325.162.675v.6H18v-.6q0-.2-.087-.363-.088-.162-.238-.287l-5.2-3.9q-.2-.175-.475-.175-.275 0-.475.175l-5.2 3.9q-.15.125-.237.287Q6 10.2 6 10.4v7.8q0 .35.225.575Q6.45 19 6.8 19h11.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H6.8q-.625 0-1.062-.438Q5.3 18.825 5.3 18.2Zm6.7-5.95Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoorW100.displayName = 'AmauiIconMaterialCameraOutdoorW100';

export default IconMaterialCameraOutdoorW100;
