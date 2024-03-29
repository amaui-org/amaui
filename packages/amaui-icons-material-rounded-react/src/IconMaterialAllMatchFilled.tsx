import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllMatchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatchFilled'

      short_name='AllMatch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m691 821-17-17q-9-9-21.5-9t-21.5 9q-9 9-9 21t9 21l39 39q9 9 21 9t21-9l97-95q9-9 9-21.5t-9-21.5q-9-9-21.5-9t-21.5 9l-75 74Zm29 195q-83 0-141.5-58.5T520 816q0-83 58.5-141.5T720 616q83 0 141.5 58.5T920 816q0 83-58.5 141.5T720 1016ZM300 576 160 358q-13-20-2-41t35-21h407q20 0 37.5 9t28.5 25l161 227q-24-10-55.5-16t-57.5-5q-118 2-196 85.5T440 817q0 10 .5 19.5T443 856H193q-24 0-35-21t2-41l140-218Z"/>
    </Icon>
  );
});

IconMaterialAllMatchFilled.displayName = 'AmauiIconMaterialAllMatchFilled';

export default IconMaterialAllMatchFilled;
