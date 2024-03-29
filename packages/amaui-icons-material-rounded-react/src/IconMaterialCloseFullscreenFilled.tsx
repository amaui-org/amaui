import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloseFullscreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenFilled'

      short_name='CloseFullscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 12q-.425 0-.712-.288Q12 11.425 12 11V5q0-.425.288-.713Q12.575 4 13 4t.713.287Q14 4.575 14 5v3.6l5.9-5.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L15.4 10H19q.425 0 .712.287.288.288.288.713t-.288.712Q19.425 12 19 12ZM2.7 21.3q-.275-.275-.275-.7 0-.425.275-.7L8.6 14H5q-.425 0-.713-.288Q4 13.425 4 13t.287-.713Q4.575 12 5 12h6q.425 0 .713.287.287.288.287.713v6q0 .425-.287.712Q11.425 20 11 20t-.712-.288Q10 19.425 10 19v-3.6l-5.9 5.9q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreenFilled.displayName = 'AmauiIconMaterialCloseFullscreenFilled';

export default IconMaterialCloseFullscreenFilled;
