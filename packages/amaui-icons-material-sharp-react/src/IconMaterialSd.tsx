import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sd'

      short_name='Sd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 15h5v-3.5H7.5v-1h2v.5H11V9H6v3.5h3.5v1h-2V13H6Zm7 0h4q.425 0 .712-.288Q18 14.425 18 14v-4q0-.425-.288-.713Q17.425 9 17 9h-4Zm1.5-1.5v-3h2v3ZM2 20V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialSd.displayName = 'AmauiIconMaterialSd';

export default IconMaterialSd;
