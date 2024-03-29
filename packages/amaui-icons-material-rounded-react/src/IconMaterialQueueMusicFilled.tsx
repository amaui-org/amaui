import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueueMusicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueueMusicFilled'

      short_name='QueueMusic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 20q-1.25 0-2.125-.875T13 17q0-1.25.875-2.125T16 14q.275 0 .525.037.25.038.475.163V7q0-.425.288-.713Q17.575 6 18 6h3q.425 0 .712.287Q22 6.575 22 7t-.288.713Q21.425 8 21 8h-2v9q0 1.25-.875 2.125T16 20ZM4 8q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h10q.425 0 .713.287Q15 6.575 15 7t-.287.713Q14.425 8 14 8Zm0 4q-.425 0-.712-.288Q3 11.425 3 11t.288-.713Q3.575 10 4 10h10q.425 0 .713.287.287.288.287.713t-.287.712Q14.425 12 14 12Zm0 4q-.425 0-.712-.288Q3 15.425 3 15t.288-.713Q3.575 14 4 14h6q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 16 10 16Z"/>
    </Icon>
  );
});

IconMaterialQueueMusicFilled.displayName = 'AmauiIconMaterialQueueMusicFilled';

export default IconMaterialQueueMusicFilled;
