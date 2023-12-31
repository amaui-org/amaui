import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubheaderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubheaderW100'

      short_name='Subheader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-602h308v-68H272v68ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialSubheaderW100.displayName = 'AmauiIconMaterialSubheaderW100';

export default IconMaterialSubheaderW100;
