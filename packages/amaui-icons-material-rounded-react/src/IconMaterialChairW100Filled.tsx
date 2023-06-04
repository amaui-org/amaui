import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairW100Filled'

      short_name='Chair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.7 13.45V10.8q0-.6-.4-1.325T4 8.75V7.6q0-.725.488-1.213Q4.975 5.9 5.7 5.9h12.6q.725 0 1.213.487Q20 6.875 20 7.6v1.15q-.9.025-1.3.737-.4.713-.4 1.313v2.65Zm-.65 5.4q-.15 0-.25-.1t-.1-.25v-1H4q-.725 0-1.212-.488Q2.3 16.525 2.3 15.8v-5q0-.6.375-.975t.975-.375q.6 0 .975.375T5 10.8v3.35h14V10.8q0-.6.375-.975t.975-.375q.6 0 .975.375t.375.975v5q0 .725-.487 1.212-.488.488-1.213.488h-.7v1q0 .15-.075.25t-.225.1q-.15 0-.25-.1t-.1-.25v-1H5.4v1q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialChairW100Filled.displayName = 'AmauiIconMaterialChairW100Filled';

export default IconMaterialChairW100Filled;
