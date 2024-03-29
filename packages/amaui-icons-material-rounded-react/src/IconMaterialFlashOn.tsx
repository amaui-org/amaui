import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOn'

      short_name='FlashOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.925 21.4q-.2.35-.562.237Q10 21.525 10 21.15V14H8q-.425 0-.713-.288Q7 13.425 7 13V3q0-.425.287-.713Q7.575 2 8 2h7.45q.55 0 .85.45.3.45.075.95L13 11h2.25q.575 0 .875.5.3.5 0 1Z"/>
    </Icon>
  );
});

IconMaterialFlashOn.displayName = 'AmauiIconMaterialFlashOn';

export default IconMaterialFlashOn;
