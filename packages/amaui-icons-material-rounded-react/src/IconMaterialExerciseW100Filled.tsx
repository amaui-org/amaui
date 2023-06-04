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
      <path d="M761 471 584 294l17-17q9-9 21.5-9t21.5 9l134 135q9 9 9 21t-9 21l-17 17ZM355 878q-8 8-20 9t-20-7L178 744q-9-9-9-21.5t9-21.5l21-21 177 177-21 21Zm129 5q-9 9-21 9t-21-9L173 614q-9-9-9-21t9-21l60-60q9-9 21-9t21 9l78 79 142-142-79-78q-9-9-9-21t9-21l60-61q9-9 21.5-9t21.5 9l269 269q9 9 9 21.5t-9 21.5l-61 60q-9 9-21 9t-21-9l-78-79-142 142 79 78q9 9 9 21t-9 21l-60 60Z"/>
    </Icon>
  );
});

IconMaterialExerciseW100Filled.displayName = 'AmauiIconMaterialExerciseW100Filled';

export default IconMaterialExerciseW100Filled;
