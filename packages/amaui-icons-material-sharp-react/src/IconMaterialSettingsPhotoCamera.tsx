import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPhotoCamera = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhotoCamera'

      short_name='SettingsPhotoCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.9 11.975Zm-.875 4.425q.2-2.225 1.613-3.9 1.412-1.675 3.512-2.25-.5-1.2-1.625-1.975Q13.4 7.5 12 7.5q-1.875 0-3.188 1.312Q7.5 10.125 7.5 12q0 1.65 1 2.85 1 1.2 2.525 1.55ZM4 18V6v4.3-.3 8Zm0 2q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h3.15L9 2h6l1.85 2H20q.825 0 1.413.588Q22 5.175 22 6v5.25q-.45-.325-.95-.55-.5-.225-1.05-.4V6H4v12h7.075q.075.525.225 1.025.15.5.375.975Zm13 2-.3-1.5q-.3-.125-.562-.262-.263-.138-.538-.338l-1.45.45-1-1.7 1.15-1q-.05-.35-.05-.65 0-.3.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.538-.338.262-.137.562-.262L17 12h2l.3 1.5q.3.125.563.275.262.15.537.375l1.45-.5 1 1.75-1.15 1q.05.3.05.625t-.05.625l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262L19 22Zm1-3q.825 0 1.413-.587Q20 17.825 20 17q0-.825-.587-1.412Q18.825 15 18 15q-.825 0-1.413.588Q16 16.175 16 17t.587 1.413Q17.175 19 18 19Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhotoCamera.displayName = 'AmauiIconMaterialSettingsPhotoCamera';

export default IconMaterialSettingsPhotoCamera;
