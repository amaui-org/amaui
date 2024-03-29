import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistPlay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlay'

      short_name='PlaylistPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 8q-.425 0-.712-.287Q2.5 7.425 2.5 7t.288-.713Q3.075 6 3.5 6h10q.425 0 .713.287.287.288.287.713t-.287.713Q13.925 8 13.5 8Zm0 4q-.425 0-.712-.288Q2.5 11.425 2.5 11t.288-.713Q3.075 10 3.5 10h10q.425 0 .713.287.287.288.287.713t-.287.712Q13.925 12 13.5 12Zm0 4q-.425 0-.712-.288Q2.5 15.425 2.5 15t.288-.713Q3.075 14 3.5 14h6q.425 0 .713.287.287.288.287.713t-.287.712Q9.925 16 9.5 16Zm13.55 3.975q-.5.35-1.025.05-.525-.3-.525-.9v-4.25q0-.6.525-.9.525-.3 1.025.05l3.2 2.15q.45.3.45.825 0 .525-.45.825Z"/>
    </Icon>
  );
});

IconMaterialPlaylistPlay.displayName = 'AmauiIconMaterialPlaylistPlay';

export default IconMaterialPlaylistPlay;
