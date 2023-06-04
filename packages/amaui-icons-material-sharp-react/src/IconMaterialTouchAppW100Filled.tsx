import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchAppW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchAppW100Filled'

      short_name='TouchApp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.95 9.325Q9 8.825 8.4 8.037q-.6-.787-.6-1.887 0-1.575 1.063-2.713Q9.925 2.3 11.5 2.3t2.638 1.137Q15.2 4.575 15.2 6.15q0 1.1-.612 1.925-.613.825-1.538 1.25V6.15q0-.675-.437-1.113Q12.175 4.6 11.5 4.6t-1.112.437q-.438.438-.438 1.113Zm.675 11.375L5.75 16.25l.475-.525 4.425.875V6.15q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v6h1.55l4.425 2.125L17.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialTouchAppW100Filled.displayName = 'AmauiIconMaterialTouchAppW100Filled';

export default IconMaterialTouchAppW100Filled;
