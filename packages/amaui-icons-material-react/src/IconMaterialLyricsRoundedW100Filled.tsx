import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLyricsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LyricsRoundedW100Filled'
      short_name='Lyrics'

      {...props}
    >
      <path d="M4.05 18.85V4.8Q4.05 4.175 4.488 3.737Q4.925 3.3 5.55 3.3H14.95Q15.575 3.3 16.012 3.737Q16.45 4.175 16.45 4.8V5Q15.325 5.575 14.663 6.65Q14 7.725 14 9Q14 10.275 14.663 11.35Q15.325 12.425 16.45 13V15.2Q16.45 15.825 16.012 16.262Q15.575 16.7 14.95 16.7H6.2ZM7.4 13.35H10.1V12.65H7.4ZM18.5 11.35Q17.525 11.35 16.838 10.662Q16.15 9.975 16.15 9Q16.15 8.025 16.838 7.337Q17.525 6.65 18.5 6.65Q19.05 6.65 19.413 6.812Q19.775 6.975 20.15 7.375V1.65H22.85V2.35H20.85V9Q20.85 9.975 20.163 10.662Q19.475 11.35 18.5 11.35ZM7.4 10.35H13.1V9.65H7.4ZM7.4 7.35H13.1V6.65H7.4Z"/>
    </Icon>
  );
});

IconMaterialLyricsRoundedW100Filled.displayName = 'AmauiIconMaterialLyricsRoundedW100Filled';

export default IconMaterialLyricsRoundedW100Filled;
