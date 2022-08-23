import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCellWifiSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellWifiSharp'
      short_name='CellWifi'

      {...props}
    >
      <path d="M6 22 22 5.95V22ZM18 20H20V10.8L18 12.8ZM7.85 9.8 6.55 8.5Q7.5 7.55 8.65 7.1Q9.8 6.65 11.05 6.65Q12.3 6.65 13.45 7.1Q14.6 7.55 15.55 8.5L14.25 9.8Q13.575 9.125 12.75 8.787Q11.925 8.45 11.05 8.45Q10.175 8.45 9.35 8.787Q8.525 9.125 7.85 9.8ZM5.3 7.2 4 5.95Q5.475 4.475 7.3 3.737Q9.125 3 11.05 3Q12.975 3 14.825 3.737Q16.675 4.475 18.15 5.95L16.85 7.2Q15.65 6 14.137 5.425Q12.625 4.85 11.05 4.85Q9.475 4.85 7.987 5.425Q6.5 6 5.3 7.2ZM11.05 13.1Q10.45 13.1 10 12.65Q9.55 12.2 9.55 11.6Q9.55 11 10 10.55Q10.45 10.1 11.05 10.1Q11.65 10.1 12.1 10.55Q12.55 11 12.55 11.6Q12.55 12.2 12.1 12.65Q11.65 13.1 11.05 13.1Z"/>
    </Icon>
  );
});

IconMaterialCellWifiSharp.displayName = 'AmauiIconMaterialCellWifiSharp';

export default IconMaterialCellWifiSharp;
