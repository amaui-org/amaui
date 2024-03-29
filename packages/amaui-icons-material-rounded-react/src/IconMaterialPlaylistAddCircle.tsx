import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCircle'

      short_name='PlaylistAddCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 15v1.025q0 .425.288.7.287.275.712.275t.712-.288Q17 16.425 17 16v-1h1.025q.425 0 .7-.288Q19 14.425 19 14t-.288-.713Q18.425 13 18 13h-1v-1.025q0-.425-.288-.7Q16.425 11 16 11t-.712.287Q15 11.575 15 12v1h-1.025q-.425 0-.7.287Q13 13.575 13 14t.288.712Q13.575 15 14 15Zm-7-3h5.025q.425 0 .7-.288Q14 11.425 14 11t-.287-.713Q13.425 10 13 10H7.975q-.425 0-.7.287Q7 10.575 7 11t.287.712Q7.575 12 8 12Zm0-3h5.025q.425 0 .7-.288Q14 8.425 14 8t-.287-.713Q13.425 7 13 7H7.975q-.425 0-.7.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm0 6h1.025q.425 0 .7-.288Q10 14.425 10 14t-.287-.713Q9.425 13 9 13H7.975q-.425 0-.7.287Q7 13.575 7 14t.287.712Q7.575 15 8 15Zm4 7q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCircle.displayName = 'AmauiIconMaterialPlaylistAddCircle';

export default IconMaterialPlaylistAddCircle;
