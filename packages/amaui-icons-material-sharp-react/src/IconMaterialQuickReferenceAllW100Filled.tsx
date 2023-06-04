import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReferenceAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceAllW100Filled'

      short_name='QuickReferenceAll'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M660 872q48 0 82-33.5t34-82.5q0-48-34-82t-82-34q-49 0-82.5 34T544 756q0 49 33.5 82.5T660 872Zm204 108L751 867q-19 16-42 24.5t-49 8.5q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 26-9 49.5T770 848l113 112-19 20Zm-692-56V228h374l162 162v127q-12-2-24-3.5t-24-1.5q-58 0-107 24.5T470 603l-164-1v28h145q-18 30-27 63.5t-8 68.5H306v28h112q5 38 22 72t43 62H172Zm360-520h148L532 256l148 148-148-148v148Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceAllW100Filled.displayName = 'AmauiIconMaterialQuickReferenceAllW100Filled';

export default IconMaterialQuickReferenceAllW100Filled;
