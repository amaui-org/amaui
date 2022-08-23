import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayLessonSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonSharp'
      short_name='PlayLesson'

      {...props}
    >
      <path d="M3 22V2H19V11.1Q18.55 11.05 18 11.05Q17.45 11.05 17 11.1V4H12V11L9.5 9.5L7 11V4H5V20H11.3Q11.45 20.5 11.713 21.038Q11.975 21.575 12.25 22ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM16.75 20.5 20.75 18 16.75 15.5ZM7 4H9.5H12H7ZM5 4H7H9.5H12H17Q14.275 4 12.637 4Q11 4 11 4Q11 4 11.088 4Q11.175 4 11.3 4Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonSharp.displayName = 'AmauiIconMaterialPlayLessonSharp';

export default IconMaterialPlayLessonSharp;
