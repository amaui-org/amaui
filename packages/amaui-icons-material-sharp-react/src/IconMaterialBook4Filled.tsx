import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book4Filled'

      short_name='Book4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-51 0-85.5-34.5T120-200v-560q0-50 34.5-85t85.5-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm40-240h80v-480h-80v480Z"/>
    </Icon>
  );
});

IconMaterialBook4Filled.displayName = 'AmauiIconMaterialBook4Filled';

export default IconMaterialBook4Filled;
