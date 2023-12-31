import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThingsToDo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThingsToDo'

      short_name='ThingsToDo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h160v-160h-80v-80h84q12-75 66.5-129.5T440-636v-204h280v160H520v44q75 12 129.5 66.5T716-440h84v80h-80v160h160v80H80Zm240-80h120v-160H320v160Zm200 0h120v-160H520v160ZM326-440h308q-14-53-57-86.5T480-560q-54 0-97 33.5T326-440Zm154 0Z"/>
    </Icon>
  );
});

IconMaterialThingsToDo.displayName = 'AmauiIconMaterialThingsToDo';

export default IconMaterialThingsToDo;
