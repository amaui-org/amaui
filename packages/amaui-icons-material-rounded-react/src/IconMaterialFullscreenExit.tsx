import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenExit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExit'

      short_name='FullscreenExit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19q-.425 0-.712-.288Q8 18.425 8 18v-2H6q-.425 0-.713-.288Q5 15.425 5 15t.287-.713Q5.575 14 6 14h3q.425 0 .713.287.287.288.287.713v3q0 .425-.287.712Q9.425 19 9 19Zm-3-9q-.425 0-.713-.288Q5 9.425 5 9t.287-.713Q5.575 8 6 8h2V6q0-.425.288-.713Q8.575 5 9 5t.713.287Q10 5.575 10 6v3q0 .425-.287.712Q9.425 10 9 10Zm9 9q-.425 0-.712-.288Q14 18.425 14 18v-3q0-.425.288-.713Q14.575 14 15 14h3q.425 0 .712.287.288.288.288.713t-.288.712Q18.425 16 18 16h-2v2q0 .425-.287.712Q15.425 19 15 19Zm0-9q-.425 0-.712-.288Q14 9.425 14 9V6q0-.425.288-.713Q14.575 5 15 5t.713.287Q16 5.575 16 6v2h2q.425 0 .712.287Q19 8.575 19 9t-.288.712Q18.425 10 18 10Z"/>
    </Icon>
  );
});

IconMaterialFullscreenExit.displayName = 'AmauiIconMaterialFullscreenExit';

export default IconMaterialFullscreenExit;
