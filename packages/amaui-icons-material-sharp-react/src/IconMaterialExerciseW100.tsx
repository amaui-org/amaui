import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExerciseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExerciseW100'

      short_name='Exercise'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m761 471-19-19 38-40-136-136-40 38-20-20 58-60 179 179-60 58ZM141 738l58-58 20 20-38 38 137 137 38-38 20 20-58 58-177-177Zm580-92 87-87-311-311-87 87 311 311ZM463 904l88-88-311-311-88 88 311 311Zm-12-227 130-130-72-72-130 130 72 72Zm140 140L463 943 113 593l126-128 120 120 130-130-119-120 128-128 351 351-128 128-120-119-130 130 120 120Z"/>
    </Icon>
  );
});

IconMaterialExerciseW100.displayName = 'AmauiIconMaterialExerciseW100';

export default IconMaterialExerciseW100;
