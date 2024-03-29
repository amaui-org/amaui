import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpdateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateFilled'

      short_name='Update'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13 11.6 2.5 2.5q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-2.8-2.8q-.15-.15-.225-.338-.075-.187-.075-.387V8q0-.425.288-.713Q11.575 7 12 7t.713.287Q13 7.575 13 8ZM12 21q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 13.875 3 12t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.925Q10.125 3 12 3q2.05 0 3.888.875Q17.725 4.75 19 6.35V5q0-.425.288-.713Q19.575 4 20 4t.712.287Q21 4.575 21 5v4q0 .425-.288.712Q20.425 10 20 10h-4q-.425 0-.712-.288Q15 9.425 15 9t.288-.713Q15.575 8 16 8h1.75q-1.025-1.4-2.525-2.2Q13.725 5 12 5 9.075 5 7.038 7.037 5 9.075 5 12q0 2.925 2.038 4.962Q9.075 19 12 19q2.3 0 4.163-1.35 1.862-1.35 2.512-3.55.125-.425.463-.713.337-.287.762-.187.45.1.662.5.213.4.088.85-.825 2.875-3.225 4.662Q15.025 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialUpdateFilled.displayName = 'AmauiIconMaterialUpdateFilled';

export default IconMaterialUpdateFilled;
