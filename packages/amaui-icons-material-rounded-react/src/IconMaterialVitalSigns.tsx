import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVitalSigns = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VitalSigns'

      short_name='VitalSigns'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20q-.475 0-.85-.275t-.55-.7L5.3 13H2q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h4q.325 0 .562.175.238.175.363.475L9 17.1l4.6-12.125q.175-.425.55-.7Q14.525 4 15 4t.85.275q.375.275.55.7L18.7 11H22q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13h-4q-.325 0-.562-.175-.238-.175-.363-.475L15 6.9l-4.6 12.125q-.175.425-.55.7Q9.475 20 9 20Z"/>
    </Icon>
  );
});

IconMaterialVitalSigns.displayName = 'AmauiIconMaterialVitalSigns';

export default IconMaterialVitalSigns;
