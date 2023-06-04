import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hd'

      short_name='Hd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 15h1.5v-2h2v2H11V9H9.5v2.5h-2V9H6Zm7 0h4q.425 0 .712-.288Q18 14.425 18 14v-4q0-.425-.288-.713Q17.425 9 17 9h-4Zm1.5-1.5v-3h2v3ZM2 20V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialHd.displayName = 'AmauiIconMaterialHd';

export default IconMaterialHd;
