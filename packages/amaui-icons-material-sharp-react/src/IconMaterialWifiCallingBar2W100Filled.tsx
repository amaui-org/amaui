import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiCallingBar2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingBar2W100Filled'

      short_name='WifiCallingBar2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-496q-11 0-19.5-8.5T632-524q0-11 8.5-19.5T660-552q11 0 19.5 8.5T688-524q0 11-8.5 19.5T660-496ZM560-604l-18-20q26-20 56-32t62-12q32 0 62 12t56 32l-18 20q-22-17-47.5-26.5T660-640q-27 0-52.5 9.5T560-604Zm199 432q-103 0-207.5-48.5T358-358q-88-89-137-194.5T172-759v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingBar2W100Filled.displayName = 'AmauiIconMaterialWifiCallingBar2W100Filled';

export default IconMaterialWifiCallingBar2W100Filled;
