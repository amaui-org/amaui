import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPhotoCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhotoCameraFilled'

      short_name='SettingsPhotoCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h3.15L9 2h6l1.85 2H20q.825 0 1.413.588Q22 5.175 22 6v5.25q-.875-.625-1.9-.938Q19.075 10 18 10q-.5 0-.962.062-.463.063-.888.188-.525-1.2-1.638-1.975Q13.4 7.5 12 7.5q-1.875 0-3.188 1.312Q7.5 10.125 7.5 12q0 1.65 1 2.85 1 1.2 2.525 1.55-.075.9.075 1.812.15.913.575 1.788Zm7.475-5.55q-.875-.175-1.425-.85T9.5 12q0-.525.2-.975.2-.45.538-.788.337-.337.787-.537T12 9.5q.775 0 1.4.438.625.437.9 1.112-.975.625-1.687 1.475-.713.85-1.138 1.925ZM17 22l-.3-1.5q-.3-.125-.562-.262-.263-.138-.538-.338l-1.45.45-1-1.7 1.15-1q-.05-.35-.05-.65 0-.3.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.538-.338.262-.137.562-.262L17 12h2l.3 1.5q.3.125.563.275.262.15.537.375l1.45-.5 1 1.75-1.15 1q.05.3.05.625t-.05.625l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262L19 22Zm1-3q.825 0 1.413-.587Q20 17.825 20 17q0-.825-.587-1.412Q18.825 15 18 15q-.825 0-1.413.588Q16 16.175 16 17t.587 1.413Q17.175 19 18 19Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhotoCameraFilled.displayName = 'AmauiIconMaterialSettingsPhotoCameraFilled';

export default IconMaterialSettingsPhotoCameraFilled;
