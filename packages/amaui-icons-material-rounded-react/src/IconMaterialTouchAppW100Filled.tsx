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
      <path d="M9.95 9.325Q9 8.825 8.4 8.037q-.6-.787-.6-1.887 0-1.575 1.063-2.713Q9.925 2.3 11.5 2.3t2.638 1.137Q15.2 4.575 15.2 6.15q0 1.1-.612 1.925-.613.825-1.538 1.25V6.15q0-.675-.437-1.113Q12.175 4.6 11.5 4.6t-1.112.437q-.438.438-.438 1.113Zm1.4 11.375q-.3 0-.625-.1t-.55-.3L6.15 16.625q-.175-.175-.187-.35-.013-.175.062-.3.1-.125.225-.175.125-.05.3 0l4.1.8V6.15q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v6h1.05q.225 0 .487.05.263.05.488.175L17.2 13.75q.725.35.838.962.112.613-.038 1.438l-.65 3.7q-.075.425-.387.637-.313.213-.738.213Z"/>
    </Icon>
  );
});

IconMaterialTouchAppW100Filled.displayName = 'AmauiIconMaterialTouchAppW100Filled';

export default IconMaterialTouchAppW100Filled;
