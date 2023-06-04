import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSupervisorAccountW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisorAccountW100Filled'

      short_name='SupervisorAccount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.85 13.2q-.75 0-1.3-.55t-.55-1.3q0-.75.55-1.3t1.3-.55q.75 0 1.3.55t.55 1.3q0 .75-.55 1.3t-1.3.55Zm-4.35 5v-.75q0-.425.213-.762.212-.338.587-.488.825-.35 1.712-.525.888-.175 1.838-.175.9 0 1.788.175.887.175 1.762.525.375.15.588.488.212.337.212.762v.75Zm-3-7q-1.125 0-1.912-.788Q6.8 9.625 6.8 8.5t.788-1.912Q8.375 5.8 9.5 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.6.338-1.088.337-.487.912-.712 1.275-.65 2.65-.975 1.375-.325 2.8-.325.425 0 .738.012.312.013.662.063v.425q-.1.075-.162.138l-.113.112q-.65.725-.887 1.537Q9.5 16.9 9.5 17.5v.7Z"/>
    </Icon>
  );
});

IconMaterialSupervisorAccountW100Filled.displayName = 'AmauiIconMaterialSupervisorAccountW100Filled';

export default IconMaterialSupervisorAccountW100Filled;
