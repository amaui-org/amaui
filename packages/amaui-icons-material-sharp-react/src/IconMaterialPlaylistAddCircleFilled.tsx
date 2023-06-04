import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCircleFilled'

      short_name='PlaylistAddCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 17h2v-2h2v-2h-2v-2h-2v2h-2v2h2Zm-8-2h3v-2H7Zm0-3h7v-2H7Zm0-3h7V7H7Zm5 13q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCircleFilled.displayName = 'AmauiIconMaterialPlaylistAddCircleFilled';

export default IconMaterialPlaylistAddCircleFilled;
