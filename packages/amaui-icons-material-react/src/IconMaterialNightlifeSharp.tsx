import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlifeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeSharp'
      short_name='Nightlife'

      {...props}
    >
      <path d="M5 20V18H7V14L1 5H15L9 14V18H11V20ZM5.9 9H10.1L11.5 7H4.5ZM16 20Q14.75 20 13.875 19.125Q13 18.25 13 17Q13 15.75 13.875 14.875Q14.75 14 16 14Q16.275 14 16.525 14.037Q16.775 14.075 17 14.2V5H22V8H19V17Q19 18.25 18.125 19.125Q17.25 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialNightlifeSharp.displayName = 'AmauiIconMaterialNightlifeSharp';

export default IconMaterialNightlifeSharp;
