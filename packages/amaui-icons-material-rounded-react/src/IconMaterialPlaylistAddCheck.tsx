import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheck'

      short_name='PlaylistAddCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 8q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h10q.425 0 .713.287Q15 6.575 15 7t-.287.713Q14.425 8 14 8Zm0 4q-.425 0-.712-.288Q3 11.425 3 11t.288-.713Q3.575 10 4 10h10q.425 0 .713.287.287.288.287.713t-.287.712Q14.425 12 14 12Zm0 4q-.425 0-.712-.288Q3 15.425 3 15t.288-.713Q3.575 14 4 14h6q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 16 10 16Zm11.65 2.3-2.15-2.15q-.275-.275-.275-.7 0-.425.275-.7.275-.275.688-.275.412 0 .712.275l1.45 1.4 3.55-3.55q.275-.275.687-.275.413 0 .713.3t.288.725q-.013.425-.313.725L17.05 18.3q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheck.displayName = 'AmauiIconMaterialPlaylistAddCheck';

export default IconMaterialPlaylistAddCheck;
