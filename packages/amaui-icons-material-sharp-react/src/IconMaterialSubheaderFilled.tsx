import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubheaderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubheaderFilled'

      short_name='Subheader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-560h360v-120H240v120ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialSubheaderFilled.displayName = 'AmauiIconMaterialSubheaderFilled';

export default IconMaterialSubheaderFilled;
