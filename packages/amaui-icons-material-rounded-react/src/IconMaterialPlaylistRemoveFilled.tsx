import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistRemoveFilled'

      short_name='PlaylistRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 16q-.425 0-.712-.288Q3 15.425 3 15t.288-.713Q3.575 14 4 14h5q.425 0 .713.287.287.288.287.713t-.287.712Q9.425 16 9 16Zm0-4q-.425 0-.712-.288Q3 11.425 3 11t.288-.713Q3.575 10 4 10h9q.425 0 .713.287.287.288.287.713t-.287.712Q13.425 12 13 12Zm0-4q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h9q.425 0 .713.287Q14 6.575 14 7t-.287.713Q13.425 8 13 8Zm9.7 13.3q-.275-.275-.275-.7 0-.425.275-.7l1.9-1.9-1.9-1.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.9 1.9 1.9-1.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L18.4 18l1.9 1.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L17 19.4l-1.9 1.9q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialPlaylistRemoveFilled.displayName = 'AmauiIconMaterialPlaylistRemoveFilled';

export default IconMaterialPlaylistRemoveFilled;
