import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMetabolismFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MetabolismFilled'

      short_name='Metabolism'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M390 816V676h-60V532q0-23 31.5-39.5T440 476q47 0 78.5 16.5T550 532v144h-60v140H390Zm50-360q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17Zm0 480q-150 0-255-105T80 576q0-75 28.5-140.5t77-114q48.5-48.5 114-77T440 216q75 0 140.5 28.5t114 77q48.5 48.5 77 114T800 576v8l73-74 57 56-170 170-170-170 57-56 73 73v-7q0-116-82-198t-198-82q-116 0-198 82t-82 198q1 116 82.5 198T440 856q57 0 107-21.5t88-58.5l57 57q-49 48-113.5 75.5T440 936Z"/>
    </Icon>
  );
});

IconMaterialMetabolismFilled.displayName = 'AmauiIconMaterialMetabolismFilled';

export default IconMaterialMetabolismFilled;
