import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsCell = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsCell'

      short_name='SettingsCell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20q-.825 0-1.412-.587Q6 18.825 6 18V2q0-.825.588-1.413Q7.175 0 8 0h8q.825 0 1.413.587Q18 1.175 18 2v16q0 .825-.587 1.413Q16.825 20 16 20Zm8-3H8v1h8Zm0-2V5H8v10Zm0-12V2H8v1ZM8 24q-.425 0-.713-.288Q7 23.425 7 23t.287-.712Q7.575 22 8 22t.713.288Q9 22.575 9 23t-.287.712Q8.425 24 8 24Zm4 0q-.425 0-.712-.288Q11 23.425 11 23t.288-.712Q11.575 22 12 22t.713.288Q13 22.575 13 23t-.287.712Q12.425 24 12 24Zm4 0q-.425 0-.712-.288Q15 23.425 15 23t.288-.712Q15.575 22 16 22t.712.288Q17 22.575 17 23t-.288.712Q16.425 24 16 24Zm-8-7v1ZM8 2v1-1Z"/>
    </Icon>
  );
});

IconMaterialSettingsCell.displayName = 'AmauiIconMaterialSettingsCell';

export default IconMaterialSettingsCell;
