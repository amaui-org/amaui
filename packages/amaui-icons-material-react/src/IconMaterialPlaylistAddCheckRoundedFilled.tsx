import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCheckRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheckRoundedFilled'
      short_name='PlaylistAddCheck'

      {...props}
    >
      <path d="M4 8Q3.575 8 3.288 7.713Q3 7.425 3 7Q3 6.575 3.288 6.287Q3.575 6 4 6H14Q14.425 6 14.713 6.287Q15 6.575 15 7Q15 7.425 14.713 7.713Q14.425 8 14 8ZM4 12Q3.575 12 3.288 11.712Q3 11.425 3 11Q3 10.575 3.288 10.287Q3.575 10 4 10H14Q14.425 10 14.713 10.287Q15 10.575 15 11Q15 11.425 14.713 11.712Q14.425 12 14 12ZM4 16Q3.575 16 3.288 15.712Q3 15.425 3 15Q3 14.575 3.288 14.287Q3.575 14 4 14H10Q10.425 14 10.713 14.287Q11 14.575 11 15Q11 15.425 10.713 15.712Q10.425 16 10 16ZM15.65 18.3 13.5 16.15Q13.225 15.875 13.225 15.45Q13.225 15.025 13.5 14.75Q13.775 14.475 14.188 14.475Q14.6 14.475 14.9 14.75L16.35 16.15L19.9 12.6Q20.175 12.325 20.587 12.325Q21 12.325 21.3 12.625Q21.6 12.925 21.588 13.35Q21.575 13.775 21.275 14.075L17.05 18.3Q16.775 18.575 16.35 18.575Q15.925 18.575 15.65 18.3Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheckRoundedFilled.displayName = 'AmauiIconMaterialPlaylistAddCheckRoundedFilled';

export default IconMaterialPlaylistAddCheckRoundedFilled;
