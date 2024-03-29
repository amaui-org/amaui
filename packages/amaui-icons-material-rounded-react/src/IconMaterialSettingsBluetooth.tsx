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
      <path d="M8 24q-.425 0-.713-.288Q7 23.425 7 23t.287-.712Q7.575 22 8 22t.713.288Q9 22.575 9 23t-.287.712Q8.425 24 8 24Zm4 0q-.425 0-.712-.288Q11 23.425 11 23t.288-.712Q11.575 22 12 22t.713.288Q13 22.575 13 23t-.287.712Q12.425 24 12 24Zm4 0q-.425 0-.712-.288Q15 23.425 15 23t.288-.712Q15.575 22 16 22t.712.288Q17 22.575 17 23t-.288.712Q16.425 24 16 24Zm-5-11.6-3.9 3.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275L11 7.6V1.425q0-.425.262-.7.263-.275.663-.275.25 0 .5.112.25.113.45.313L17 5q.15.15.213.325.062.175.062.375t-.062.375Q17.15 6.25 17 6.4L13.4 10l3.6 3.6q.15.15.213.325.062.175.062.375t-.062.375Q17.15 14.85 17 15l-4.125 4.125q-.2.2-.45.313-.25.112-.5.112-.4 0-.663-.275Q11 19 11 18.575Zm2-4.8 1.9-1.9L13 3.85Zm0 8.55 1.9-1.85-1.9-1.9Z"/>
    </Icon>
  );
});

IconMaterialSettingsBluetooth.displayName = 'AmauiIconMaterialSettingsBluetooth';

export default IconMaterialSettingsBluetooth;
