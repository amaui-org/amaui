import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifySpaceBetweenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceBetweenW100'

      short_name='AlignJustifySpaceBetween'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M813.965 924Q808 924 804 919.975T800 910V750h-38q-12.75 0-21.375-8.625T732 720V432q0-12.75 8.625-21.375T762 402h38V242q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v668q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm-668 0Q140 924 136 919.975T132 910V242q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v160h38q12.75 0 21.375 8.625T228 432v288q0 12.75-8.625 21.375T198 750h-38v160q0 5.95-4.035 9.975-4.035 4.025-10 4.025Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceBetweenW100.displayName = 'AmauiIconMaterialAlignJustifySpaceBetweenW100';

export default IconMaterialAlignJustifySpaceBetweenW100;
