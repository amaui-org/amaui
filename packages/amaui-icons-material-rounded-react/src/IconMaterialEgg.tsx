import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEgg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Egg'

      short_name='Egg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-2.925 0-4.962-2.038Q5 16.925 5 14q0-1.925.638-3.875.637-1.95 1.65-3.538Q8.3 5 9.55 4 10.8 3 12 3q1.225 0 2.463 1 1.237 1 2.25 2.587 1.012 1.588 1.65 3.538Q19 12.075 19 14q0 2.925-2.038 4.962Q14.925 21 12 21Zm0-2q2.075 0 3.538-1.462Q17 16.075 17 14q0-1.425-.487-3-.488-1.575-1.225-2.913-.738-1.337-1.613-2.212Q12.8 5 12 5q-.775 0-1.662.875-.888.875-1.625 2.212Q7.975 9.425 7.488 11 7 12.575 7 14q0 2.075 1.463 3.538Q9.925 19 12 19Zm1-1q.425 0 .713-.288Q14 17.425 14 17t-.287-.712Q13.425 16 13 16q-1.25 0-2.125-.875T10 13q0-.425-.287-.713Q9.425 12 9 12t-.712.287Q8 12.575 8 13q0 2.075 1.463 3.538Q10.925 18 13 18Zm-1-6Z"/>
    </Icon>
  );
});

IconMaterialEgg.displayName = 'AmauiIconMaterialEgg';

export default IconMaterialEgg;
