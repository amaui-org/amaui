import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoomPreferences = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomPreferences'

      short_name='RoomPreferences'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2V3h10v1h4v6h-2V6h-2v6h-2V5H7v14h5v2Zm14 1-.3-1.5q-.3-.125-.562-.275-.263-.15-.513-.35l-1.45.5-1-1.725 1.125-1q-.05-.375-.05-.638 0-.262.05-.637l-1.125-1 1-1.725 1.45.5q.25-.2.513-.363.262-.162.562-.287L17 12h2l.3 1.5q.3.125.563.275.262.15.512.35l1.45-.5 1 1.725-1.125 1q.05.375.05.638 0 .262-.05.637l1.125 1-1 1.725-1.45-.475q-.25.2-.512.35-.263.15-.563.275L19 22Zm1-3q.825 0 1.413-.587Q20 17.825 20 17q0-.825-.587-1.412Q18.825 15 18 15q-.825 0-1.413.588Q16 16.175 16 17t.587 1.413Q17.175 19 18 19Zm-7-6q-.425 0-.712-.288Q10 12.425 10 12t.288-.713Q10.575 11 11 11t.713.287Q12 11.575 12 12t-.287.712Q11.425 13 11 13Zm-4 6V5v14Z"/>
    </Icon>
  );
});

IconMaterialRoomPreferences.displayName = 'AmauiIconMaterialRoomPreferences';

export default IconMaterialRoomPreferences;
