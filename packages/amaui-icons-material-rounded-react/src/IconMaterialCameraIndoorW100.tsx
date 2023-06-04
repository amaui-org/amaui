import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraIndoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorW100'

      short_name='CameraIndoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.2 16.5h4q.225 0 .362-.15.138-.15.138-.35v-1.6l1.225.65q.2.125.387-.013.188-.137.188-.362v-1.35q0-.225-.188-.363-.187-.137-.387-.012l-1.225.65V12q0-.225-.138-.363-.137-.137-.362-.137h-4q-.2 0-.35.137-.15.138-.15.363v4q0 .2.15.35.15.15.35.15Zm-3.9 1.7v-7.8q0-.35.163-.675.162-.325.437-.525l5.2-3.925q.4-.3.9-.3t.9.3L18.1 9.2q.275.2.438.525.162.325.162.675v7.8q0 .625-.438 1.062-.437.438-1.062.438H6.8q-.625 0-1.062-.438Q5.3 18.825 5.3 18.2Zm1.5.8h10.4q.35 0 .575-.225Q18 18.55 18 18.2v-7.8q0-.2-.087-.363-.088-.162-.238-.287l-5.2-3.9q-.2-.175-.475-.175-.275 0-.475.175l-5.2 3.9q-.15.125-.237.287Q6 10.2 6 10.4v7.8q0 .35.225.575Q6.45 19 6.8 19Zm5.2-6.675Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorW100.displayName = 'AmauiIconMaterialCameraIndoorW100';

export default IconMaterialCameraIndoorW100;
