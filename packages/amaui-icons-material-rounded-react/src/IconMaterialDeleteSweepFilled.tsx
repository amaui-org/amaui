import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteSweepFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweepFilled'

      short_name='DeleteSweep'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 18q-.425 0-.712-.288Q15 17.425 15 17t.288-.712Q15.575 16 16 16h2q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 18 18 18Zm0-8q-.425 0-.712-.288Q15 9.425 15 9t.288-.713Q15.575 8 16 8h5q.425 0 .712.287Q22 8.575 22 9t-.288.712Q21.425 10 21 10Zm0 4q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12h4q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 14 20 14ZM5 19q-.825 0-1.413-.587Q3 17.825 3 17V8q-.425 0-.712-.287Q2 7.425 2 7t.288-.713Q2.575 6 3 6h3v-.5q0-.425.287-.713Q6.575 4.5 7 4.5h2q.425 0 .713.287.287.288.287.713V6h3q.425 0 .713.287Q14 6.575 14 7t-.287.713Q13.425 8 13 8v9q0 .825-.587 1.413Q11.825 19 11 19Z"/>
    </Icon>
  );
});

IconMaterialDeleteSweepFilled.displayName = 'AmauiIconMaterialDeleteSweepFilled';

export default IconMaterialDeleteSweepFilled;
