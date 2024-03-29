import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipPrevious = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPrevious'

      short_name='SkipPrevious'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18q-.425 0-.713-.288Q5.5 17.425 5.5 17V7q0-.425.287-.713Q6.075 6 6.5 6t.713.287Q7.5 6.575 7.5 7v10q0 .425-.287.712Q6.925 18 6.5 18Zm10.45-1.025-6.2-4.15q-.45-.3-.45-.825 0-.525.45-.825l6.2-4.15q.5-.35 1.025-.05.525.3.525.9v8.25q0 .6-.525.9-.525.3-1.025-.05ZM16.5 12Zm0 2.25v-4.5L13.1 12Z"/>
    </Icon>
  );
});

IconMaterialSkipPrevious.displayName = 'AmauiIconMaterialSkipPrevious';

export default IconMaterialSkipPrevious;
