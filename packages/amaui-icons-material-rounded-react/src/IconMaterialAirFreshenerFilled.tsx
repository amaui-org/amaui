import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirFreshenerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirFreshenerFilled'

      short_name='AirFreshener'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5q-.425 0-.712-.288Q11 4.425 11 4t.288-.713Q11.575 3 12 3t.713.287Q13 3.575 13 4t-.287.712Q12.425 5 12 5Zm0-3q-.425 0-.712-.288Q11 1.425 11 1t.288-.713Q11.575 0 12 0t.713.287Q13 .575 13 1t-.287.712Q12.425 2 12 2ZM8.4 22q-1.575-.925-2.488-2.562Q5 17.8 5 16q0-1.975 1.037-3.7Q7.075 10.575 9 9.675V7q0-.425.288-.713Q9.575 6 10 6h4q.425 0 .713.287Q15 6.575 15 7v2.675q1.85.875 2.925 2.587Q19 13.975 19 16q0 1.8-.875 3.413Q17.25 21.025 15.6 22ZM7 3q-.425 0-.713-.288Q6 2.425 6 2t.287-.713Q6.575 1 7 1t.713.287Q8 1.575 8 2t-.287.712Q7.425 3 7 3Zm10 0q-.425 0-.712-.288Q16 2.425 16 2t.288-.713Q16.575 1 17 1t.712.287Q18 1.575 18 2t-.288.712Q17.425 3 17 3ZM9 5q-.425 0-.712-.288Q8 4.425 8 4t.288-.713Q8.575 3 9 3t.713.287Q10 3.575 10 4t-.287.712Q9.425 5 9 5Zm6 0q-.425 0-.712-.288Q14 4.425 14 4t.288-.713Q14.575 3 15 3t.713.287Q16 3.575 16 4t-.287.712Q15.425 5 15 5Z"/>
    </Icon>
  );
});

IconMaterialAirFreshenerFilled.displayName = 'AmauiIconMaterialAirFreshenerFilled';

export default IconMaterialAirFreshenerFilled;
