import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddTaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTaskW100Filled'

      short_name='AddTask'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3q1.5 0 2.85.475T17.3 5.1l-.5.525q-1-.775-2.225-1.2Q13.35 4 12 4 8.675 4 6.338 6.337 4 8.675 4 12t2.338 5.663Q8.675 20 12 20q.9 0 1.75-.2t1.625-.55l.525.525q-.875.45-1.862.687-.988.238-2.038.238Zm7.65-1.35v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm-9.1-3.65L7.2 12.35l.5-.5 2.85 2.85 9.65-9.65.5.5Z"/>
    </Icon>
  );
});

IconMaterialAddTaskW100Filled.displayName = 'AmauiIconMaterialAddTaskW100Filled';

export default IconMaterialAddTaskW100Filled;
