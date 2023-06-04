import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetImageW100Filled'

      short_name='ResetImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.35 10h-3.3q-.325 0-.537-.213Q4.3 9.575 4.3 9.25v-3.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V8.8q.925-2 2.788-3.25Q9.65 4.3 12 4.3q2.575 0 4.575 1.487 2 1.488 2.75 3.813.05.15-.025.275-.075.125-.225.125-.175 0-.3-.1t-.175-.25q-.725-2.05-2.513-3.35Q14.3 5 12 5 9.8 5 8.075 6.2 6.35 7.4 5.55 9.3h2.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm.35 7.35h6.8q.225 0 .325-.2t-.025-.4L14 14.325q-.125-.15-.3-.15t-.3.15l-2.2 2.725-1.3-1.5q-.125-.125-.287-.125-.163 0-.288.15l-.9 1.175q-.15.2-.05.4.1.2.325.2ZM5.8 20.7q-.625 0-1.062-.438Q4.3 19.825 4.3 19.2v-6.05q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v6.05q0 .35.225.575Q5.45 20 5.8 20h12.4q.35 0 .575-.225Q19 19.55 19 19.2v-6.05q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v6.05q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialResetImageW100Filled.displayName = 'AmauiIconMaterialResetImageW100Filled';

export default IconMaterialResetImageW100Filled;
