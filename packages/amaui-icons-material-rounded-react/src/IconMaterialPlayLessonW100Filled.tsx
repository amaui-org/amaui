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
      <path d="M5.8 20.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V4.8q0-.65.425-1.075Q5.15 3.3 5.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v7.1h-.35q-2.275 0-3.987 1.712-1.713 1.713-1.713 3.988 0 .725.237 1.6.238.875.688 1.5Zm11.55.6q-1.55 0-2.625-1.075T13.65 17.6q0-1.55 1.075-2.625T17.35 13.9q1.55 0 2.625 1.075T21.05 17.6q0 1.55-1.075 2.625T17.35 21.3Zm-.1-2.475 1.275-.95q.15-.125.15-.325t-.15-.325l-1.275-.95q-.2-.15-.425-.037-.225.112-.225.362v1.9q0 .25.225.363.225.112.425-.038Zm-9-9.225 1.25-.75 1.25.75q.2.125.4 0t.2-.35V4h-3.7v5.25q0 .225.2.35.2.125.4 0Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonW100Filled.displayName = 'AmauiIconMaterialPlayLessonW100Filled';

export default IconMaterialPlayLessonW100Filled;
