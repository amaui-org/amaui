import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBalconyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalconyFilled'

      short_name='Balcony'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 12q-.425 0-.712-.288Q8 11.425 8 11t.288-.713Q8.575 10 9 10t.713.287Q10 10.575 10 11t-.287.712Q9.425 12 9 12Zm6 0q-.425 0-.712-.288Q14 11.425 14 11t.288-.713Q14.575 10 15 10t.713.287Q16 10.575 16 11t-.287.712Q15.425 12 15 12ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20v-4q0-.5.237-.963.238-.462.763-.762V10q0-1.65.625-3.112.625-1.463 1.713-2.55 1.087-1.088 2.55-1.713Q10.35 2 12 2q1.65 0 3.113.625 1.462.625 2.55 1.713 1.087 1.087 1.712 2.55Q20 8.35 20 10v4.275q.525.3.763.762Q21 15.5 21 16v4q0 .825-.587 1.413Q19.825 22 19 22Zm0-6v4h2v-4Zm4 4h2v-4H9Zm-3-6h5V4.075q-2.15.35-3.575 2.012Q6 7.75 6 10Zm7 0h5v-4q0-2.25-1.425-3.913Q15.15 4.425 13 4.075Zm0 6h2v-4h-2Zm4 0h2v-4h-2Z"/>
    </Icon>
  );
});

IconMaterialBalconyFilled.displayName = 'AmauiIconMaterialBalconyFilled';

export default IconMaterialBalconyFilled;
