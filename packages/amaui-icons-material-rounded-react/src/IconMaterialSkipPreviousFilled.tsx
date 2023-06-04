import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipPreviousFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousFilled'

      short_name='SkipPrevious'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18q-.425 0-.713-.288Q5.5 17.425 5.5 17V7q0-.425.287-.713Q6.075 6 6.5 6t.713.287Q7.5 6.575 7.5 7v10q0 .425-.287.712Q6.925 18 6.5 18Zm10.45-1.025-6.2-4.15q-.45-.3-.45-.825 0-.525.45-.825l6.2-4.15q.5-.325 1.025-.038.525.288.525.888v8.25q0 .6-.525.9-.525.3-1.025-.05Z"/>
    </Icon>
  );
});

IconMaterialSkipPreviousFilled.displayName = 'AmauiIconMaterialSkipPreviousFilled';

export default IconMaterialSkipPreviousFilled;
