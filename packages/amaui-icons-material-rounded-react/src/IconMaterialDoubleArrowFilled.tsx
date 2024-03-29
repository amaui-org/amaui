import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoubleArrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowFilled'

      short_name='DoubleArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.925 19q-.625 0-.887-.538-.263-.537.087-1.037L17 12l-3.875-5.425q-.35-.5-.087-1.038Q13.3 5 13.925 5q.275 0 .5.137.225.138.375.338l4.225 5.95q.1.125.15.275.05.15.05.3t-.05.287q-.05.138-.15.288l-4.225 5.95q-.15.2-.375.338-.225.137-.5.137Zm-5.95 0q-.625 0-.887-.538-.263-.537.087-1.037L11.05 12 7.175 6.575q-.35-.5-.087-1.038Q7.35 5 7.975 5q.275 0 .5.137.225.138.375.338l4.225 5.95q.1.125.15.275.05.15.05.3t-.05.3q-.05.15-.15.275l-4.225 5.95q-.15.2-.375.338-.225.137-.5.137Z"/>
    </Icon>
  );
});

IconMaterialDoubleArrowFilled.displayName = 'AmauiIconMaterialDoubleArrowFilled';

export default IconMaterialDoubleArrowFilled;
