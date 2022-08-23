import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlakySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlakySharp'
      short_name='Flaky'

      {...props}
    >
      <path d="M14.05 15.475 16.55 13 17.6 14.05 14.05 17.6 11.65 15.2 12.7 14.125ZM7.35 11.225 8.75 9.8 10.15 11.225 11.225 10.15 9.8 8.75 11.225 7.35 10.15 6.275 8.75 7.7 7.35 6.275 6.275 7.35 7.7 8.75 6.275 10.15ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 10.35 19.375 8.9Q18.75 7.45 17.65 6.35L6.35 17.65Q7.45 18.75 8.9 19.375Q10.35 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialFlakySharp.displayName = 'AmauiIconMaterialFlakySharp';

export default IconMaterialFlakySharp;
