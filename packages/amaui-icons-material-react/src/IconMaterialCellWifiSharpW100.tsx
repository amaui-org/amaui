import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCellWifiSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellWifiSharpW100'
      short_name='CellWifi'

      {...props}
    >
      <path d="M9.15 20.7 20.7 9.1V20.7ZM18 20H20V10.8L18 12.8ZM7.85 9.05 7.35 8.55Q8.175 7.875 9.163 7.512Q10.15 7.15 11.1 7.15Q12.05 7.15 13 7.487Q13.95 7.825 14.75 8.5L14.25 9.05Q13.575 8.45 12.738 8.15Q11.9 7.85 11.1 7.85Q10.3 7.85 9.438 8.15Q8.575 8.45 7.85 9.05ZM5.3 6.45 4.8 5.95Q6.15 4.7 7.775 4.125Q9.4 3.55 11.1 3.55Q12.8 3.55 14.4 4.125Q16 4.7 17.35 5.95L16.85 6.45Q15.6 5.4 14.1 4.825Q12.6 4.25 11.1 4.25Q9.6 4.25 8.075 4.825Q6.55 5.4 5.3 6.45ZM11.05 12.1Q10.625 12.1 10.338 11.812Q10.05 11.525 10.05 11.1Q10.05 10.675 10.338 10.387Q10.625 10.1 11.05 10.1Q11.475 10.1 11.763 10.387Q12.05 10.675 12.05 11.1Q12.05 11.525 11.763 11.812Q11.475 12.1 11.05 12.1Z"/>
    </Icon>
  );
});

IconMaterialCellWifiSharpW100.displayName = 'AmauiIconMaterialCellWifiSharpW100';

export default IconMaterialCellWifiSharpW100;
