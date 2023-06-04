import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSupervisorAccountW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisorAccountW100'

      short_name='SupervisorAccount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.85 13.2q-.75 0-1.3-.55t-.55-1.3q0-.75.55-1.3t1.3-.55q.75 0 1.3.55t.55 1.3q0 .75-.55 1.3t-1.3.55Zm-4.35 5v-.75q0-.425.213-.762.212-.338.587-.488.825-.35 1.712-.525.888-.175 1.838-.175.9 0 1.788.175.887.175 1.762.525.375.15.588.488.212.337.212.762v.75Zm-3-7q-1.125 0-1.912-.788Q6.8 9.625 6.8 8.5t.788-1.912Q8.375 5.8 9.5 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.6.338-1.088.337-.487.912-.712 1.275-.65 2.65-.975 1.375-.325 2.8-.325.525 0 1 .025t.725.075v.45q-.1.075-.137.125-.038.05-.088.125-.375-.05-.75-.075-.375-.025-.75-.025-1.325 0-2.625.275T4.4 15.7q-.35.2-.625.488-.275.287-.275.712v.6h6v.7Zm6.7-.7Zm0-7q.825 0 1.413-.588.587-.587.587-1.412t-.587-1.412Q10.325 6.5 9.5 6.5q-.825 0-1.412.588Q7.5 7.675 7.5 8.5t.588 1.412q.587.588 1.412.588Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialSupervisorAccountW100.displayName = 'AmauiIconMaterialSupervisorAccountW100';

export default IconMaterialSupervisorAccountW100;
