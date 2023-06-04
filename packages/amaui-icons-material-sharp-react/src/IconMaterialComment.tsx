import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Comment'

      short_name='Comment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14h12v-2H6Zm0-3h12V9H6Zm0-3h12V6H6Zm16 14-4-4H2V2h20ZM20 4H4v12h14.825L20 17.175ZM4 16V4Z"/>
    </Icon>
  );
});

IconMaterialComment.displayName = 'AmauiIconMaterialComment';

export default IconMaterialComment;
