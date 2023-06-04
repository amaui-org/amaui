import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmbulanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmbulanceW100'

      short_name='Ambulance'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M466 300V192h28v108h-28Zm-133 46-83-83 20-20 83 83-20 20ZM172 964V664l83-236h153v-56h42q-7 20-10.5 40.25T436 455v1H276l-66 180h304q8 8 17 15t19 13H200v192h560V691q8-2 14.5-5t13.5-6v284h-28v-80H200v80h-28Zm98-178h130v-52H270v52Zm290 0h130v-52H560v52Zm-360 70V664v192Zm456-323 122-122-20-20-102 102-46-46-20 20 66 66Zm28 70q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialAmbulanceW100.displayName = 'AmauiIconMaterialAmbulanceW100';

export default IconMaterialAmbulanceW100;
