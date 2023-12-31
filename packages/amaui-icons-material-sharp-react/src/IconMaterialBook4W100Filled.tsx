import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book4W100Filled'

      short_name='Book4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-132q-33 0-56.5-22.425T172-210v-538q0-33.333 23-56.667Q218-828 252-828h408v568H252q-22.1 0-37.05 15Q200-230 200-209.5t14.95 35Q229.9-160 252-160h508v-588h28v616H252Zm48-156h28v-512h-28v512Z"/>
    </Icon>
  );
});

IconMaterialBook4W100Filled.displayName = 'AmauiIconMaterialBook4W100Filled';

export default IconMaterialBook4W100Filled;
