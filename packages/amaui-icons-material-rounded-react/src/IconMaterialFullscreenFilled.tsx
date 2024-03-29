import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenFilled'

      short_name='Fullscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19q-.425 0-.713-.288Q5 18.425 5 18v-3q0-.425.287-.713Q5.575 14 6 14t.713.287Q7 14.575 7 15v2h2q.425 0 .713.288.287.287.287.712t-.287.712Q9.425 19 9 19Zm0-9q-.425 0-.713-.288Q5 9.425 5 9V6q0-.425.287-.713Q5.575 5 6 5h3q.425 0 .713.287Q10 5.575 10 6t-.287.713Q9.425 7 9 7H7v2q0 .425-.287.712Q6.425 10 6 10Zm9 9q-.425 0-.712-.288Q14 18.425 14 18t.288-.712Q14.575 17 15 17h2v-2q0-.425.288-.713Q17.575 14 18 14t.712.287Q19 14.575 19 15v3q0 .425-.288.712Q18.425 19 18 19Zm3-9q-.425 0-.712-.288Q17 9.425 17 9V7h-2q-.425 0-.712-.287Q14 6.425 14 6t.288-.713Q14.575 5 15 5h3q.425 0 .712.287Q19 5.575 19 6v3q0 .425-.288.712Q18.425 10 18 10Z"/>
    </Icon>
  );
});

IconMaterialFullscreenFilled.displayName = 'AmauiIconMaterialFullscreenFilled';

export default IconMaterialFullscreenFilled;
