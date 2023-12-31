import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMimoDisconnectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoDisconnectW100'

      short_name='MimoDisconnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m192-788 28 28h-28q-12 0-22 10t-10 22v412q0 14 9 23t23 9h466L94-846q-5-4-5-9.5t5-10.5q5-5 10-5t10 5l714 714q4 4 4 10t-4 10q-5 5-10.5 5t-9.5-5L688-256h-58l19 19q5 5 7 10t2 11v14q0 13-8.5 21.5T628-172H332q-13 0-21.5-8.5T302-202v-14q0-6 2-11t7-10l19-19H192q-26 0-43-17t-17-43v-412q0-26 17-43t43-17Zm623 510-21-21q3-4 4.5-8t1.5-9v-412q0-14-9-23t-23-9H330l-28-28h466q26 0 43 17t17 43v412q0 9-3 19.5T815-278ZM553-540Zm-152 1Z"/>
    </Icon>
  );
});

IconMaterialMimoDisconnectW100.displayName = 'AmauiIconMaterialMimoDisconnectW100';

export default IconMaterialMimoDisconnectW100;
