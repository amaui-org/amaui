import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsEthernet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsEthernet'

      short_name='SettingsEthernet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 18-1.4-1.4 4.55-4.6-4.55-4.6L17 6l6 6ZM7 18l-6-6 6-6 1.4 1.4L3.85 12l4.55 4.6Zm1-5q-.425 0-.713-.288Q7 12.425 7 12t.287-.713Q7.575 11 8 11t.713.287Q9 11.575 9 12t-.287.712Q8.425 13 8 13Zm4 0q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12t-.287.712Q12.425 13 12 13Zm4 0q-.425 0-.712-.288Q15 12.425 15 12t.288-.713Q15.575 11 16 11t.712.287Q17 11.575 17 12t-.288.712Q16.425 13 16 13Z"/>
    </Icon>
  );
});

IconMaterialSettingsEthernet.displayName = 'AmauiIconMaterialSettingsEthernet';

export default IconMaterialSettingsEthernet;
