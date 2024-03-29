import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalShippingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalShippingFilled'

      short_name='LocalShipping'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-1.25 0-2.125-.875T3 17H1V4h16v4h3l3 4v5h-2q0 1.25-.875 2.125T18 20q-1.25 0-2.125-.875T15 17H9q0 1.25-.875 2.125T6 20Zm0-2q.425 0 .713-.288Q7 17.425 7 17t-.287-.712Q6.425 16 6 16t-.713.288Q5 16.575 5 17t.287.712Q5.575 18 6 18Zm12 0q.425 0 .712-.288Q19 17.425 19 17t-.288-.712Q18.425 16 18 16t-.712.288Q17 16.575 17 17t.288.712Q17.575 18 18 18Zm-1-5h4.25L19 10h-2Z"/>
    </Icon>
  );
});

IconMaterialLocalShippingFilled.displayName = 'AmauiIconMaterialLocalShippingFilled';

export default IconMaterialLocalShippingFilled;
