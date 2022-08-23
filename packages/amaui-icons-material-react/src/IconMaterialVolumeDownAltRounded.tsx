import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeDownAltRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownAltRounded'
      short_name='VolumeDownAlt'

      {...props}
    >
      <path d="M6 15Q5.575 15 5.287 14.712Q5 14.425 5 14V10Q5 9.575 5.287 9.287Q5.575 9 6 9H9L12.3 5.7Q12.775 5.225 13.387 5.487Q14 5.75 14 6.425V17.575Q14 18.25 13.387 18.512Q12.775 18.775 12.3 18.3L9 15ZM16 16V7.95Q17.125 8.475 17.812 9.575Q18.5 10.675 18.5 12Q18.5 13.325 17.812 14.4Q17.125 15.475 16 16ZM12 8.85 9.85 11H7V13H9.85L12 15.15ZM9.5 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownAltRounded.displayName = 'AmauiIconMaterialVolumeDownAltRounded';

export default IconMaterialVolumeDownAltRounded;
