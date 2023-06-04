import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumFilled'

      short_name='Forum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 15.8V3q0-.425.288-.713Q2.575 2 3 2h13q.425 0 .712.287Q17 2.575 17 3v9q0 .425-.288.712Q16.425 13 16 13H6l-3.15 3.15q-.225.225-.538.112Q2 16.15 2 15.8ZM7 18q-.425 0-.713-.288Q6 17.425 6 17v-2h13V6h2q.425 0 .712.287Q22 6.575 22 7v13.8q0 .35-.312.462-.313.113-.538-.112L18 18Z"/>
    </Icon>
  );
});

IconMaterialForumFilled.displayName = 'AmauiIconMaterialForumFilled';

export default IconMaterialForumFilled;
