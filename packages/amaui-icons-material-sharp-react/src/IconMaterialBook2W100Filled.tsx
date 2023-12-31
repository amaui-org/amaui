import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book2W100Filled'

      short_name='Book2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-132q-39 0-66.5-27.5T212-226v-488q0-48 33-81t81-33h422v536q-27 0-46.5 19.5T682-226q0 27 19.5 46.5T748-160v28H306Zm34-188h28v-480h-28v480Zm-34 160h375q-13-13-20-29.5t-7-36.5q0-19 7-36t20-30H306q-28 0-47 19.5T240-226q0 28 19 47t47 19Z"/>
    </Icon>
  );
});

IconMaterialBook2W100Filled.displayName = 'AmauiIconMaterialBook2W100Filled';

export default IconMaterialBook2W100Filled;
