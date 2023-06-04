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
      <path d="M5.8 20.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V4.8q0-.65.425-1.075Q5.15 3.3 5.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v6.775q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V4.8q0-.3-.25-.55Q16.5 4 16.2 4h-4.85v5.25q0 .225-.2.35-.2.125-.4 0L9.5 8.85l-1.25.75q-.2.125-.4 0t-.2-.35V4H5.8q-.3 0-.55.25Q5 4.5 5 4.8v14.4q0 .3.25.55.25.25.55.25h6.225q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm11.55.6q-1.55 0-2.625-1.075T13.65 17.6q0-1.55 1.075-2.625T17.35 13.9q1.55 0 2.625 1.075T21.05 17.6q0 1.55-1.075 2.625T17.35 21.3Zm-.1-2.475 1.275-.95q.15-.125.15-.325t-.15-.325l-1.275-.95q-.2-.15-.425-.037-.225.112-.225.362v1.9q0 .25.225.363.225.112.425-.038ZM12.025 4H5h12-4.975ZM7.65 4h3.7Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonW100.displayName = 'AmauiIconMaterialPlayLessonW100';

export default IconMaterialPlayLessonW100;
