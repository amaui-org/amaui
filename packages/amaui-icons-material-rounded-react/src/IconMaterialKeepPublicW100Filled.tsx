import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeepPublicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepPublicW100Filled'

      short_name='KeepPublic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-372H209q-6.375 0-10.688-4.5Q194-381 194-386.667v-7.666q0-2.667 1-5.167t3-4.5l54-54v-302h-26q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h215q-24 32-36.5 70T392-640q0 70 36 129t98 91v18q0 12.75-8.74 21.375T495.6-372H374v175.697Q374-190 372-185q-2 5-7 10-2.182 2-5.091 2-2.909 0-4.909-2-5-5-7-10.217-2-5.218-2-10.783v-176Zm294-120q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm0-148q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T541-573q17 25 43 39t56 14Z"/>
    </Icon>
  );
});

IconMaterialKeepPublicW100Filled.displayName = 'AmauiIconMaterialKeepPublicW100Filled';

export default IconMaterialKeepPublicW100Filled;
