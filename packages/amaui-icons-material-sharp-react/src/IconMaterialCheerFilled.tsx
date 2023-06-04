import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheerFilled'

      short_name='Cheer'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m312 305-40-120 56-18 40 119-56 19Zm138-49V136h60v120h-60Zm198 49-56-19 40-119 56 19-40 119Zm226 711-284-43-67-209 52-100 56 175 37-11-119-372 127-75 188 355h56l-46 280Zm-788 0L40 736h56l188-355 127 75-119 372 37 11 56-175 52 100-67 209-284 43Z"/>
    </Icon>
  );
});

IconMaterialCheerFilled.displayName = 'AmauiIconMaterialCheerFilled';

export default IconMaterialCheerFilled;
