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
      <path d="M839 457 597 215l74-74 246 247-78 69Zm-549 551L48 766l72-72 242 242-72 72Zm173-56L104 593l113-115 92 92 166-166-91-91 113-115 361 361-115 113-91-91-166 166 92 92-115 113Z"/>
    </Icon>
  );
});

IconMaterialExerciseFilled.displayName = 'AmauiIconMaterialExerciseFilled';

export default IconMaterialExerciseFilled;
