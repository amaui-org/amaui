import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayLessonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonW100'

      short_name='PlayLesson'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.7V3.3h13.4v8.625q-.15-.025-.35-.025-.2 0-.35.025V4h-5.65v5.95L9.5 8.85l-1.85 1.1V4H5v16h7.2q.05.2.138.375.087.175.212.325Zm13.05.6q-1.55 0-2.625-1.075T13.65 17.6q0-1.55 1.075-2.625T17.35 13.9q1.55 0 2.625 1.075T21.05 17.6q0 1.55-1.075 2.625T17.35 21.3Zm-.75-2 2.35-1.75-2.35-1.75ZM7.65 4h3.7-3.7ZM5 4h12-5.35.55Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonW100.displayName = 'AmauiIconMaterialPlayLessonW100';

export default IconMaterialPlayLessonW100;
