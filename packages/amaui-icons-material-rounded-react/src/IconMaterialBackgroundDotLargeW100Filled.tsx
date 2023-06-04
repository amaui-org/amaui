import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackgroundDotLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundDotLargeW100Filled'

      short_name='BackgroundDotLarge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M370 716q12.5 0 21.25-8.75T400 686q0-12.5-8.75-21.25T370 656q-12.5 0-21.25 8.75T340 686q0 12.5 8.75 21.25T370 716Zm0-220q12.5 0 21.25-8.75T400 466q0-12.5-8.75-21.25T370 436q-12.5 0-21.25 8.75T340 466q0 12.5 8.75 21.25T370 496Zm220 220q12.5 0 21.25-8.75T620 686q0-12.5-8.75-21.25T590 656q-12.5 0-21.25 8.75T560 686q0 12.5 8.75 21.25T590 716Zm0-220q12.5 0 21.25-8.75T620 466q0-12.5-8.75-21.25T590 436q-12.5 0-21.25 8.75T560 466q0 12.5 8.75 21.25T590 496ZM232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialBackgroundDotLargeW100Filled.displayName = 'AmauiIconMaterialBackgroundDotLargeW100Filled';

export default IconMaterialBackgroundDotLargeW100Filled;
