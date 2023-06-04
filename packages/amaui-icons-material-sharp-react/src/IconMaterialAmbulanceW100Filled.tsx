import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmbulanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmbulanceW100Filled'

      short_name='Ambulance'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M466 300V192h28v108h-28Zm-133 46-83-83 20-20 83 83-20 20Zm-63 440h130v-52H270v52Zm290 0h130v-52H560v52Zm96-253 122-122-20-20-102 102-46-46-20 20 66 66Zm28 70q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM172 964V664l83-236h153v-56h42q-7 20-10.5 40.5T436 455v1H276l-66 180h304q35 32 78.5 49.5T684 703q27 0 53.5-6t50.5-17v284h-28v-80H200v80h-28Z"/>
    </Icon>
  );
});

IconMaterialAmbulanceW100Filled.displayName = 'AmauiIconMaterialAmbulanceW100Filled';

export default IconMaterialAmbulanceW100Filled;
