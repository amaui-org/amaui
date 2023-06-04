import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForum = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forum'

      short_name='Forum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V2h15v11H6Zm4 1v-3h13V6h3v16l-4-4Zm9-14H4v8.175L5.175 11H15ZM4 4v8.175Z"/>
    </Icon>
  );
});

IconMaterialForum.displayName = 'AmauiIconMaterialForum';

export default IconMaterialForum;
