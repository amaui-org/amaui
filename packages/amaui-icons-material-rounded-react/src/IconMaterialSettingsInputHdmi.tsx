import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputHdmi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmi'

      short_name='SettingsInputHdmi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8 19-3-6V7.975q0-.425.287-.7Q5.575 7 6 7V4q0-.825.588-1.413Q7.175 2 8 2h8q.825 0 1.413.587Q18 3.175 18 4v3q.425 0 .712.275.288.275.288.7V13l-3 6v2q0 .425-.287.712Q15.425 22 15 22H9q-.425 0-.712-.288Q8 21.425 8 21ZM8 7h2V5.475q0-.2.15-.338Q10.3 5 10.5 5q.2 0 .35.15.15.15.15.35V7h2V5.475q0-.2.15-.338Q13.3 5 13.5 5q.2 0 .35.15.15.15.15.35V7h2V4H8Zm2 13h4v-1.5l3-6V9H7v3.5l3 6Zm2-5.5Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputHdmi.displayName = 'AmauiIconMaterialSettingsInputHdmi';

export default IconMaterialSettingsInputHdmi;
