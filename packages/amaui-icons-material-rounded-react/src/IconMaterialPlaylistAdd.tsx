import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAdd'

      short_name='PlaylistAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 20q-.425 0-.712-.288Q16 19.425 16 19v-3h-3q-.425 0-.712-.288Q12 15.425 12 15t.288-.713Q12.575 14 13 14h3v-3q0-.425.288-.713Q16.575 10 17 10t.712.287Q18 10.575 18 11v3h3q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 16 21 16h-3v3q0 .425-.288.712Q17.425 20 17 20ZM4 16q-.425 0-.712-.288Q3 15.425 3 15t.288-.713Q3.575 14 4 14h5q.425 0 .713.287.287.288.287.713t-.287.712Q9.425 16 9 16Zm0-4q-.425 0-.712-.288Q3 11.425 3 11t.288-.713Q3.575 10 4 10h9q.425 0 .713.287.287.288.287.713t-.287.712Q13.425 12 13 12Zm0-4q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h9q.425 0 .713.287Q14 6.575 14 7t-.287.713Q13.425 8 13 8Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAdd.displayName = 'AmauiIconMaterialPlaylistAdd';

export default IconMaterialPlaylistAdd;
