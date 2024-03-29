import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDecimalDecrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalDecrease'

      short_name='DecimalDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.525 19 .875.875q.275.3.288.712.012.413-.288.713t-.712.3q-.413 0-.713-.3L12.4 18.7q-.3-.3-.3-.7 0-.4.3-.7l2.575-2.6q.3-.3.713-.3.412 0 .712.3t.288.712q-.013.413-.288.713l-.875.875h5.15q.425 0 .713.288.287.287.287.712t-.287.712Q21.1 19 20.675 19ZM4 13H3q-.425 0-.712-.288Q2 12.425 2 12v-1q0-.425.288-.713Q2.575 10 3 10h1q.2 0 .388.075.187.075.325.212.137.138.212.325Q5 10.8 5 11v1q0 .2-.075.387-.075.188-.212.325-.138.138-.325.213Q4.2 13 4 13Zm5.5 0q-1.45 0-2.475-1.025Q6 10.95 6 9.5v-4q0-1.45 1.025-2.475Q8.05 2 9.5 2q1.45 0 2.475 1.025Q13 4.05 13 5.5v4q0 1.45-1.025 2.475Q10.95 13 9.5 13Zm0-2q.625 0 1.062-.438Q11 10.125 11 9.5v-4q0-.625-.438-1.062Q10.125 4 9.5 4t-1.062.438Q8 4.875 8 5.5v4q0 .625.438 1.062Q8.875 11 9.5 11Z"/>
    </Icon>
  );
});

IconMaterialDecimalDecrease.displayName = 'AmauiIconMaterialDecimalDecrease';

export default IconMaterialDecimalDecrease;
