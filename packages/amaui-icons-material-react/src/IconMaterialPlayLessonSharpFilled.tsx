import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayLessonSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonSharpFilled'
      short_name='PlayLesson'

      {...props}
    >
      <path d="M3 22V2H19V11.1Q18.55 11.05 18 11.05Q17.45 11.05 17 11.1Q14.275 11.5 12.637 13.5Q11 15.5 11 18Q11 19.1 11.338 20.087Q11.675 21.075 12.25 22ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM16.75 20.5 20.75 18 16.75 15.5ZM7 11 9.5 9.5 12 11V4H7Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonSharpFilled.displayName = 'AmauiIconMaterialPlayLessonSharpFilled';

export default IconMaterialPlayLessonSharpFilled;
