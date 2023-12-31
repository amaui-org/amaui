import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubheader = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subheader'

      short_name='Subheader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-560h360v-120H240v120ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialSubheader.displayName = 'AmauiIconMaterialSubheader';

export default IconMaterialSubheader;
