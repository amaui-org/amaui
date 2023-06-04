import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGiteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GiteW100Filled'

      short_name='Gite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17.675q-.275 0-.487-.213-.213-.212-.213-.487V11.2q0-.125.05-.262.05-.138.15-.238l3.2-3.2q.1-.1.238-.15.137-.05.262-.05h1.1V6.25q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V7.3h7.8q.125 0 .262.05.138.05.238.15l3.2 3.2q.1.1.15.238.05.137.05.262v5.775q0 .275-.212.487-.213.213-.488.213Zm10.7-.7H20V11.2l-2.625-2.625L14.7 11.25Zm-10.7 0h10V12H4Z"/>
    </Icon>
  );
});

IconMaterialGiteW100Filled.displayName = 'AmauiIconMaterialGiteW100Filled';

export default IconMaterialGiteW100Filled;
