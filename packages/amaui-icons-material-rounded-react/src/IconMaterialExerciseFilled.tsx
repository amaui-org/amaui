import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExerciseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExerciseFilled'

      short_name='Exercise'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M839 457 597 215l17-17q23-23 57-22.5t57 23.5l129 129q23 23 23 56.5T857 441l-18 16ZM346 952q-23 23-56.5 23T233 952L104 823q-23-23-23-56.5t23-56.5l16-16 242 242-16 16Zm145-28q-12 12-28 12t-28-12L132 621q-12-12-12-28t12-28l57-58q12-12 28.5-12t28.5 12l63 63 166-166-63-63q-12-12-12-28t12-28l57-58q12-12 28.5-12t28.5 12l303 303q12 12 12 28.5T829 587l-58 57q-12 12-28 12t-28-12l-63-63-166 166 63 63q12 12 12 28.5T549 867l-58 57Z"/>
    </Icon>
  );
});

IconMaterialExerciseFilled.displayName = 'AmauiIconMaterialExerciseFilled';

export default IconMaterialExerciseFilled;
