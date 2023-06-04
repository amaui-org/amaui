import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeceasedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeceasedW100Filled'

      short_name='Deceased'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M472 914q-78 0-133-55t-55-133v-22q61 13 110 50.5t72 89.5V594q-69-5-116.5-56T302 416v-74q0-20 18-27.5t32 5.5l44 38 60-81q9-12 24-12t24 12l60 81 44-38q14-13 32-5.5t18 27.5v74q0 71-47.5 122T494 594v249q23-51 71.5-88.5T674 704v22q0 78-54.5 133T487 914h-15Z"/>
    </Icon>
  );
});

IconMaterialDeceasedW100Filled.displayName = 'AmauiIconMaterialDeceasedW100Filled';

export default IconMaterialDeceasedW100Filled;
