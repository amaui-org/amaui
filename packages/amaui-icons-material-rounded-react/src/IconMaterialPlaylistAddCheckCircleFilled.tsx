import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCheckCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheckCircleFilled'

      short_name='PlaylistAddCheckCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 12h5.025q.425 0 .7-.288Q14 11.425 14 11t-.287-.713Q13.425 10 13 10H7.975q-.425 0-.7.287Q7 10.575 7 11t.287.712Q7.575 12 8 12Zm0-3h5.025q.425 0 .7-.288Q14 8.425 14 8t-.287-.713Q13.425 7 13 7H7.975q-.425 0-.7.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm0 6h1.025q.425 0 .7-.288Q10 14.425 10 14t-.287-.713Q9.425 13 9 13H7.975q-.425 0-.7.287Q7 13.575 7 14t.287.712Q7.575 15 8 15Zm4 7q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm2.05-6.45-.7-.7q-.3-.3-.712-.313-.413-.012-.713.288t-.3.712q0 .413.3.713l1.425 1.425q.3.3.7.3.4 0 .7-.3l3.575-3.575q.3-.3.288-.7-.013-.4-.313-.7-.3-.275-.7-.288-.4-.012-.7.288Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheckCircleFilled.displayName = 'AmauiIconMaterialPlaylistAddCheckCircleFilled';

export default IconMaterialPlaylistAddCheckCircleFilled;
