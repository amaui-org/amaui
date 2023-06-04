import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistRemoveW100Filled'

      short_name='PlaylistRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4q-.15 0-.25-.1T3.65 7q0-.15.1-.25t.25-.1h10.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm10.15 13.5q-.125-.125-.125-.25t.125-.25L16.5 18l-2.35-2.35q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L17 17.5l2.35-2.35q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25L17.5 18l2.35 2.35q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125L17 18.5l-2.35 2.35q-.1.1-.237.112-.138.013-.263-.112Z"/>
    </Icon>
  );
});

IconMaterialPlaylistRemoveW100Filled.displayName = 'AmauiIconMaterialPlaylistRemoveW100Filled';

export default IconMaterialPlaylistRemoveW100Filled;
