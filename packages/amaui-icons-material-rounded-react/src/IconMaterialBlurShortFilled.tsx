import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlurShortFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurShortFilled'

      short_name='BlurShort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 15q1.25 0 2.125-.875T18 12q0-1.25-.875-2.125T15 9q-1.25 0-2.125.875T12 12q0 1.25.875 2.125T15 15Zm0 2q-1.825 0-3.188-1.137Q10.45 14.725 10.1 13H7q-.425 0-.713-.288Q6 12.425 6 12t.287-.713Q6.575 11 7 11h3.1q.125-.575.338-1.075.212-.5.562-.925H5q-.425 0-.713-.288Q4 8.425 4 8t.287-.713Q4.575 7 5 7h10q2.075 0 3.538 1.462Q20 9.925 20 12q0 2.075-1.462 3.537Q17.075 17 15 17Z"/>
    </Icon>
  );
});

IconMaterialBlurShortFilled.displayName = 'AmauiIconMaterialBlurShortFilled';

export default IconMaterialBlurShortFilled;
