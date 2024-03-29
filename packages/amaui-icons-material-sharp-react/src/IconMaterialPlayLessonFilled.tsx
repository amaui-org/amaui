import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayLessonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonFilled'

      short_name='PlayLesson'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V2h16v9.1q-.45-.05-1-.05t-1 .05q-2.725.4-4.363 2.4Q11 15.5 11 18q0 1.1.338 2.087.337.988.912 1.913Zm15 1q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm-1.25-2.5 4-2.5-4-2.5ZM7 11l2.5-1.5L12 11V4H7Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonFilled.displayName = 'AmauiIconMaterialPlayLessonFilled';

export default IconMaterialPlayLessonFilled;
