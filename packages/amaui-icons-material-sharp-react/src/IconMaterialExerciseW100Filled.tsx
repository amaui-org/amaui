import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExerciseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExerciseW100Filled'

      short_name='Exercise'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M761 471 584 294l39-39 176 178-38 38ZM334 899 156 723l43-43 177 177-42 42Zm129 5L152 593l102-102 99 100 142-142-100-99 102-104 313 313-104 102-99-100-142 142 100 99-102 102Z"/>
    </Icon>
  );
});

IconMaterialExerciseW100Filled.displayName = 'AmauiIconMaterialExerciseW100Filled';

export default IconMaterialExerciseW100Filled;
