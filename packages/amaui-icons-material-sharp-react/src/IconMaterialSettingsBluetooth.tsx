import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBluetooth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBluetooth'

      short_name='SettingsBluetooth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 24q-.425 0-.713-.288Q7 23.425 7 23t.287-.712Q7.575 22 8 22t.713.288Q9 22.575 9 23t-.287.712Q8.425 24 8 24Zm4 0q-.425 0-.712-.288Q11 23.425 11 23t.288-.712Q11.575 22 12 22t.713.288Q13 22.575 13 23t-.287.712Q12.425 24 12 24Zm4 0q-.425 0-.712-.288Q15 23.425 15 23t.288-.712Q15.575 22 16 22t.712.288Q17 22.575 17 23t-.288.712Q16.425 24 16 24Zm-5-4v-7.6L6.4 17 5 15.6l5.6-5.6L5 4.4 6.4 3 11 7.6V0h1l5.7 5.7-4.3 4.3 4.3 4.3L12 20Zm2-12.4 1.9-1.9L13 3.85Zm0 8.55 1.9-1.85-1.9-1.9Z"/>
    </Icon>
  );
});

IconMaterialSettingsBluetooth.displayName = 'AmauiIconMaterialSettingsBluetooth';

export default IconMaterialSettingsBluetooth;
