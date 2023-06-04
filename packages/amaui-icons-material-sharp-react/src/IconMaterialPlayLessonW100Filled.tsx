import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayLessonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonW100Filled'

      short_name='PlayLesson'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.7V3.3h13.4v8.625q-.15-.025-.35-.025-.2 0-.35.025-2.275.125-3.812 1.763-1.538 1.637-1.538 3.912 0 .8.237 1.612.238.813.663 1.488Zm13.05.6q-1.55 0-2.625-1.075T13.65 17.6q0-1.55 1.075-2.625T17.35 13.9q1.55 0 2.625 1.075T21.05 17.6q0 1.55-1.075 2.625T17.35 21.3Zm-.75-2 2.35-1.75-2.35-1.75ZM7.65 9.95l1.85-1.1 1.85 1.1V4h-3.7Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonW100Filled.displayName = 'AmauiIconMaterialPlayLessonW100Filled';

export default IconMaterialPlayLessonW100Filled;
