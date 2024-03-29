import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRobotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RobotFilled'

      short_name='Robot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 12q.825 0 1.413-.588Q11 10.825 11 10t-.587-1.413Q9.825 8 9 8q-.825 0-1.412.587Q7 9.175 7 10q0 .825.588 1.412Q8.175 12 9 12Zm6 0q.825 0 1.413-.588Q17 10.825 17 10t-.587-1.413Q15.825 8 15 8q-.825 0-1.412.587Q13 9.175 13 10q0 .825.588 1.412Q14.175 12 15 12Zm-6 9v-4h2v4Zm4 0v-4h2v4Zm-8 0q-.825 0-1.413-.587Q3 19.825 3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413Q19.825 21 19 21h-2v-4q0-.825-.587-1.412Q15.825 15 15 15H9q-.825 0-1.412.588Q7 16.175 7 17v4Z"/>
    </Icon>
  );
});

IconMaterialRobotFilled.displayName = 'AmauiIconMaterialRobotFilled';

export default IconMaterialRobotFilled;
