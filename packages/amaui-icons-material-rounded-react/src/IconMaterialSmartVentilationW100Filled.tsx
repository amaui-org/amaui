import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartVentilationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartVentilationW100Filled'

      short_name='SmartVentilation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M355-92q-32 0-49.5-19.5T288-155q0-17 7.5-32.5T318-214q21-14 34.5-39t20.5-55q-10-3-19.5-8T336-329l-84 31q-12 5-24 7.5t-24 2.5q-45 0-78.5-40.5T92-445q0-32 19-49.5t43-17.5q17 0 33 7.5t27 22.5q14 21 39 34.5t55 20.5q3-10 8-19.5t13-17.5l-31-84q-5-12-7.5-24t-2.5-23q0-54 47-83.5T445-708q32 0 49.5 19t17.5 43q0 16-7.5 33T482-586q-21 14-34.5 39T427-492q11 4 20 8.5t17 12.5l84-32q12-5 23.5-7t23.5-2q57 0 85 48.5T708-355q0 32-20.5 49.5T642-288q-16 0-30.5-7.5T586-318q-14-21-39-34.5T492-373q-3 9-8 18.5T471-336l31 84q5 12 7.5 22.5T512-208q-1 45-40.5 80.5T355-92Zm45-240q29 0 48.5-19.5T468-400q0-29-19.5-48.5T400-468q-29 0-48.5 19.5T332-400q0 29 19.5 48.5T400-332Zm313-226q0-65-45-110t-110-45q65 0 110-45t45-110q0 65 45 110t110 45q-65 0-110 45t-45 110Z"/>
    </Icon>
  );
});

IconMaterialSmartVentilationW100Filled.displayName = 'AmauiIconMaterialSmartVentilationW100Filled';

export default IconMaterialSmartVentilationW100Filled;
