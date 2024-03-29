import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDestruction = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Destruction'

      short_name='Destruction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-160q0-33 23.5-56.5T200-400h560q33 0 56.5 23.5T840-320v160q0 33-23.5 56.5T760-80H200Zm0-80h560v-160H200v160Zm61-300-128-72q-9-5-12.5-14t-1.5-18q2-9 7.5-15.5T143-588l157-26-42-154q-3-11 0-19.5t11-13.5q8-5 17-5t18 6l130 92 78-138q5-9 14-13t18-2q9 2 15.5 7.5T568-837l26 157 154-42q11-3 19.5 0t13.5 11q5 8 5 17t-6 18l-92 130 152 86H678l-106-60 62-88-104 29-18-106-52 93-88-62 29 104-106 18 120 72H261Zm226 0Zm-7 220Z"/>
    </Icon>
  );
});

IconMaterialDestruction.displayName = 'AmauiIconMaterialDestruction';

export default IconMaterialDestruction;
