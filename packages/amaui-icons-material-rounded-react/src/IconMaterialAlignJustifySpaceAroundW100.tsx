import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifySpaceAroundW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceAroundW100'

      short_name='AlignJustifySpaceAround'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M656 750q-12.75 0-21.375-8.625T626 720V432q0-12.75 8.625-21.375T656 402h8q12.75 0 21.375 8.625T694 432v288q0 12.75-8.625 21.375T664 750h-8Zm-360 0q-12.75 0-21.375-8.625T266 720V432q0-12.75 8.625-21.375T296 402h8q12.75 0 21.375 8.625T334 432v288q0 12.75-8.625 21.375T304 750h-8Zm517.965 174Q808 924 804 919.975T800 910V242q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v668q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm-668 0Q140 924 136 919.975T132 910V242q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v668q0 5.95-4.035 9.975-4.035 4.025-10 4.025Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceAroundW100.displayName = 'AmauiIconMaterialAlignJustifySpaceAroundW100';

export default IconMaterialAlignJustifySpaceAroundW100;
