import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCheckRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheckRoundedW100Filled'
      short_name='PlaylistAddCheck'

      {...props}
    >
      <path d="M4 7.35Q3.85 7.35 3.75 7.25Q3.65 7.15 3.65 7Q3.65 6.85 3.75 6.75Q3.85 6.65 4 6.65H14Q14.15 6.65 14.25 6.75Q14.35 6.85 14.35 7Q14.35 7.15 14.25 7.25Q14.15 7.35 14 7.35ZM4 11.35Q3.85 11.35 3.75 11.25Q3.65 11.15 3.65 11Q3.65 10.85 3.75 10.75Q3.85 10.65 4 10.65H14Q14.15 10.65 14.25 10.75Q14.35 10.85 14.35 11Q14.35 11.15 14.25 11.25Q14.15 11.35 14 11.35ZM4 15.35Q3.85 15.35 3.75 15.25Q3.65 15.15 3.65 15Q3.65 14.85 3.75 14.75Q3.85 14.65 4 14.65H10Q10.15 14.65 10.25 14.75Q10.35 14.85 10.35 15Q10.35 15.15 10.25 15.25Q10.15 15.35 10 15.35ZM16.1 17.85 13.95 15.7Q13.825 15.575 13.825 15.45Q13.825 15.325 13.95 15.2Q14.075 15.075 14.2 15.075Q14.325 15.075 14.45 15.2L16.35 17.1L20.35 13.1Q20.475 12.975 20.6 12.975Q20.725 12.975 20.85 13.1Q20.975 13.225 20.975 13.35Q20.975 13.475 20.85 13.6L16.6 17.85Q16.475 17.975 16.35 17.975Q16.225 17.975 16.1 17.85Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheckRoundedW100Filled.displayName = 'AmauiIconMaterialPlaylistAddCheckRoundedW100Filled';

export default IconMaterialPlaylistAddCheckRoundedW100Filled;
