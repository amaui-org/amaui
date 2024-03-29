import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpdateDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateDisabledFilled'

      short_name='UpdateDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 13.875 3 12q0-1.325.362-2.525.363-1.2 1.013-2.25l-2.3-2.3q-.3-.3-.287-.713Q1.8 3.8 2.1 3.5t.712-.3q.413 0 .713.3l16.975 17q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3l-2.3-2.275q-1.05.65-2.25 1.012Q13.325 21 12 21Zm0-2q.9 0 1.738-.212.837-.213 1.587-.613l-9.5-9.5q-.4.75-.612 1.587Q5 11.1 5 12q0 2.925 2.038 4.962Q9.075 19 12 19Zm0-14q-.9 0-1.737.213-.838.212-1.588.612l-1.45-1.45q1.05-.65 2.25-1.013Q10.675 3 12 3q2.05 0 3.888.875Q17.725 4.75 19 6.35V5q0-.425.288-.713Q19.575 4 20 4t.712.287Q21 4.575 21 5v4q0 .425-.288.712Q20.425 10 20 10h-4q-.425 0-.712-.288Q15 9.425 15 9t.288-.713Q15.575 8 16 8h1.75q-1.025-1.4-2.525-2.2Q13.725 5 12 5Zm1 5.15-2-2V8q0-.425.288-.713Q11.575 7 12 7t.713.287Q13 7.575 13 8Zm6.625 6.625-1.45-1.45q.15-.325.275-.637.125-.313.25-.613.125-.425.463-.713.337-.287.762-.187.45.1.662.5.213.4.088.85-.15.5-.412 1.075-.263.575-.638 1.175Z"/>
    </Icon>
  );
});

IconMaterialUpdateDisabledFilled.displayName = 'AmauiIconMaterialUpdateDisabledFilled';

export default IconMaterialUpdateDisabledFilled;
