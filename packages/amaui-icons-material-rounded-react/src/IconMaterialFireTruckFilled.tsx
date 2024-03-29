import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFireTruckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireTruckFilled'

      short_name='FireTruck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21q-1.25 0-2.125-.875T4 18H3q-.825 0-1.412-.587Q1 16.825 1 16v-3q0-.825.588-1.413Q2.175 11 3 11h9V7q0-.825.588-1.412Q13.175 5 14 5h2V4q0-.425.288-.713Q16.575 3 17 3h1q.425 0 .712.287Q19 3.575 19 4v1h.55q.65 0 1.175.375t.725 1l1.45 4.3q.05.15.075.312.025.163.025.338V16q0 .825-.587 1.413Q21.825 18 21 18h-1q0 1.25-.875 2.125T17 21q-1.25 0-2.125-.875T14 18h-4q0 1.25-.875 2.125T7 21Zm0-2q.425 0 .713-.288Q8 18.425 8 18t-.287-.712Q7.425 17 7 17t-.713.288Q6 17.575 6 18t.287.712Q6.575 19 7 19Zm10 0q.425 0 .712-.288Q18 18.425 18 18t-.288-.712Q17.425 17 17 17t-.712.288Q16 17.575 16 18t.288.712Q16.575 19 17 19Zm-3-8h6.9l-1.35-4H14ZM3.5 8.5h1.75v-2H3.5Zm3.25 0H8.5v-2H6.75Zm-5 1.5q-.325 0-.538-.213Q1 9.575 1 9.25q0-.325.212-.538.213-.212.538-.212H2v-2h-.25q-.325 0-.538-.213Q1 6.075 1 5.75q0-.325.212-.537Q1.425 5 1.75 5h8.5q.325 0 .538.213.212.212.212.537 0 .325-.212.537-.213.213-.538.213H10v2h.25q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialFireTruckFilled.displayName = 'AmauiIconMaterialFireTruckFilled';

export default IconMaterialFireTruckFilled;
