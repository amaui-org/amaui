import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomRightClickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomRightClickW100'

      short_name='BottomRightClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M171-172v-28h589v-587h28v615H171Zm429-134q-23 0-38.5-15.5T546-360q0-23 15.5-38.5T600-414q23 0 38.5 15.5T654-360q0 23-15.5 38.5T600-306ZM252-480v-28h180L183-758l19-19 250 249v-180h28v228H252Z"/>
    </Icon>
  );
});

IconMaterialBottomRightClickW100.displayName = 'AmauiIconMaterialBottomRightClickW100';

export default IconMaterialBottomRightClickW100;
