import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Route'

      short_name='Route'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-1.65 0-2.825-1.175Q5 18.65 5 17V8.825Q4.125 8.5 3.562 7.737 3 6.975 3 6q0-1.25.875-2.125T6 3q1.25 0 2.125.875T9 6q0 .975-.562 1.737Q7.875 8.5 7 8.825V17q0 .825.588 1.413Q8.175 19 9 19t1.413-.587Q11 17.825 11 17V7q0-1.65 1.175-2.825Q13.35 3 15 3q1.65 0 2.825 1.175Q19 5.35 19 7v8.175q.875.325 1.438 1.087Q21 17.025 21 18q0 1.25-.875 2.125T18 21q-1.25 0-2.125-.875T15 18q0-.975.562-1.75.563-.775 1.438-1.075V7q0-.825-.587-1.412Q15.825 5 15 5q-.825 0-1.412.588Q13 6.175 13 7v10q0 1.65-1.175 2.825Q10.65 21 9 21ZM6 7q.425 0 .713-.287Q7 6.425 7 6t-.287-.713Q6.425 5 6 5t-.713.287Q5 5.575 5 6t.287.713Q5.575 7 6 7Zm12 12q.425 0 .712-.288Q19 18.425 19 18t-.288-.712Q18.425 17 18 17t-.712.288Q17 17.575 17 18t.288.712Q17.575 19 18 19ZM6 6Zm12 12Z"/>
    </Icon>
  );
});

IconMaterialRoute.displayName = 'AmauiIconMaterialRoute';

export default IconMaterialRoute;
