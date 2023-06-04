import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOff'

      short_name='FilterAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.075 21.9 14 16.825V18q0 .825-.587 1.413Q12.825 20 12 20q-.825 0-1.412-.587Q10 18.825 10 18v-5.15L2.075 4.925q-.275-.3-.275-.7 0-.4.3-.7.3-.3.712-.3.413 0 .713.3L20.5 20.5q.3.3.288.7-.013.4-.313.7-.3.275-.7.288-.4.012-.7-.288ZM14.8 11.975l-1.425-1.425L16.95 6H8.825l-2-2H19q.625 0 .9.55t-.1 1.05Zm-1.425-1.425Z"/>
    </Icon>
  );
});

IconMaterialFilterAltOff.displayName = 'AmauiIconMaterialFilterAltOff';

export default IconMaterialFilterAltOff;
