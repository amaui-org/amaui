import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInactiveOrderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InactiveOrderFilled'

      short_name='InactiveOrder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.25 20h1v-4h-1Zm2.5 0h1v-4h-1ZM6 9h12V7H6Zm12 14q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23ZM3 22V3h18v8.675q-.7-.35-1.462-.513Q18.775 11 18 11H6v2h7.1q-.425.425-.788.925-.362.5-.637 1.075H6v2h5.075q-.05.25-.063.488Q11 17.725 11 18q0 1.05.288 2.013.287.962.862 1.837L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5Z"/>
    </Icon>
  );
});

IconMaterialInactiveOrderFilled.displayName = 'AmauiIconMaterialInactiveOrderFilled';

export default IconMaterialInactiveOrderFilled;
