import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubheaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubheaderW100Filled'

      short_name='Subheader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-602h308v-68H272v68ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialSubheaderW100Filled.displayName = 'AmauiIconMaterialSubheaderW100Filled';

export default IconMaterialSubheaderW100Filled;
