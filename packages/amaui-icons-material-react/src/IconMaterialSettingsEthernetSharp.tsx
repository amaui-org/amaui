import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsEthernetSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsEthernetSharp'
      short_name='SettingsEthernet'

      {...props}
    >
      <path d="M17 18 15.6 16.6 20.15 12 15.6 7.4 17 6 23 12ZM7 18 1 12 7 6 8.4 7.4 3.85 12 8.4 16.6ZM8 13Q7.575 13 7.287 12.712Q7 12.425 7 12Q7 11.575 7.287 11.287Q7.575 11 8 11Q8.425 11 8.713 11.287Q9 11.575 9 12Q9 12.425 8.713 12.712Q8.425 13 8 13ZM12 13Q11.575 13 11.288 12.712Q11 12.425 11 12Q11 11.575 11.288 11.287Q11.575 11 12 11Q12.425 11 12.713 11.287Q13 11.575 13 12Q13 12.425 12.713 12.712Q12.425 13 12 13ZM16 13Q15.575 13 15.288 12.712Q15 12.425 15 12Q15 11.575 15.288 11.287Q15.575 11 16 11Q16.425 11 16.712 11.287Q17 11.575 17 12Q17 12.425 16.712 12.712Q16.425 13 16 13Z"/>
    </Icon>
  );
});

IconMaterialSettingsEthernetSharp.displayName = 'AmauiIconMaterialSettingsEthernetSharp';

export default IconMaterialSettingsEthernetSharp;
