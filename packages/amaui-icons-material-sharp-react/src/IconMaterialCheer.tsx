import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cheer'

      short_name='Cheer'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m312 305-40-120 56-18 40 119-56 19Zm138-49V136h60v120h-60Zm198 49-56-19 40-119 56 19-40 119Zm226 711 12-79-236-36-41-131 19-42 32 100 76-24-99-310 7-3 171 325h105v-80h-56L676 381l-135 75 51 160-69 148 66 209 285 43ZM660 828l-68-212 68 212Zm76-24ZM86 1016l-12-79 235-36 42-131-20-42-31 100-76-24 98-310-6-3-172 325H40v-80h56l188-355 135 75-51 160 69 148-67 209-284 43Zm214-188 68-212-68 212Zm-76-24Z"/>
    </Icon>
  );
});

IconMaterialCheer.displayName = 'AmauiIconMaterialCheer';

export default IconMaterialCheer;
