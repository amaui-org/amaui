import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistPlayRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlayRounded'
      short_name='PlaylistPlay'

      {...props}
    >
      <path d="M3.5 8Q3.075 8 2.788 7.713Q2.5 7.425 2.5 7Q2.5 6.575 2.788 6.287Q3.075 6 3.5 6H13.5Q13.925 6 14.213 6.287Q14.5 6.575 14.5 7Q14.5 7.425 14.213 7.713Q13.925 8 13.5 8ZM3.5 12Q3.075 12 2.788 11.712Q2.5 11.425 2.5 11Q2.5 10.575 2.788 10.287Q3.075 10 3.5 10H13.5Q13.925 10 14.213 10.287Q14.5 10.575 14.5 11Q14.5 11.425 14.213 11.712Q13.925 12 13.5 12ZM3.5 16Q3.075 16 2.788 15.712Q2.5 15.425 2.5 15Q2.5 14.575 2.788 14.287Q3.075 14 3.5 14H9.5Q9.925 14 10.213 14.287Q10.5 14.575 10.5 15Q10.5 15.425 10.213 15.712Q9.925 16 9.5 16ZM17.05 19.975Q16.55 20.325 16.025 20.025Q15.5 19.725 15.5 19.125V14.875Q15.5 14.275 16.025 13.975Q16.55 13.675 17.05 14.025L20.25 16.175Q20.7 16.475 20.7 17Q20.7 17.525 20.25 17.825Z"/>
    </Icon>
  );
});

IconMaterialPlaylistPlayRounded.displayName = 'AmauiIconMaterialPlaylistPlayRounded';

export default IconMaterialPlaylistPlayRounded;
