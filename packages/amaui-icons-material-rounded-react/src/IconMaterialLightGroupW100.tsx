import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightGroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupW100'

      short_name='LightGroup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T4 20h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm13-.95q-.575 0-.987-.425-.413-.425-.413-1h-2.5q-.3 0-.525-.175-.225-.175-.225-.45.05-1.55 1.338-2.575 1.287-1.025 2.962-1.15v-9.05q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.05q1.7.125 2.987 1.15 1.288 1.025 1.338 2.575 0 .275-.225.45t-.525.175h-2.5q0 .575-.412 1-.413.425-1.013.425Zm-10-1.4q-.15 0-.25-.1t-.1-.25v-7H3.375q-.375 0-.6-.3-.225-.3-.125-.65l1.3-4.9q.05-.25.25-.4.2-.15.475-.15H9.35q.275 0 .475.15.2.15.25.4l1.3 4.9q.1.35-.125.65-.225.3-.6.3h-3.3v7q0 .15-.1.25t-.25.1Zm6.1-.7h7.8q-.125-1.4-1.275-2.2-1.15-.8-2.625-.8-1.45 0-2.612.8-1.163.8-1.288 2.2ZM3.3 10.3h7.4l-1.325-5H4.65ZM7 7.8Zm10 8.35Z"/>
    </Icon>
  );
});

IconMaterialLightGroupW100.displayName = 'AmauiIconMaterialLightGroupW100';

export default IconMaterialLightGroupW100;
