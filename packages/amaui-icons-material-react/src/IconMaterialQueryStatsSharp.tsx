import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQueryStatsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueryStatsSharp'
      short_name='QueryStats'

      {...props}
    >
      <path d="M21.575 23 18.45 19.875Q17.95 20.225 17.337 20.4Q16.725 20.575 16.075 20.575Q14.2 20.575 12.888 19.262Q11.575 17.95 11.575 16.075Q11.575 14.2 12.888 12.887Q14.2 11.575 16.075 11.575Q17.95 11.575 19.263 12.887Q20.575 14.2 20.575 16.075Q20.575 16.725 20.4 17.337Q20.225 17.95 19.875 18.475L23 21.575ZM16.075 18.575Q17.125 18.575 17.85 17.85Q18.575 17.125 18.575 16.075Q18.575 15.025 17.85 14.3Q17.125 13.575 16.075 13.575Q15.025 13.575 14.3 14.3Q13.575 15.025 13.575 16.075Q13.575 17.125 14.3 17.85Q15.025 18.575 16.075 18.575ZM2.625 18.175 1 17 6 9 9 12.5 13 6 15.725 10.075Q15.15 10.1 14.637 10.212Q14.125 10.325 13.625 10.525L13.075 9.7L9.275 15.875L6.25 12.35ZM18.3 10.575Q17.825 10.375 17.312 10.25Q16.8 10.125 16.25 10.1L21.375 2L23 3.175Z"/>
    </Icon>
  );
});

IconMaterialQueryStatsSharp.displayName = 'AmauiIconMaterialQueryStatsSharp';

export default IconMaterialQueryStatsSharp;
