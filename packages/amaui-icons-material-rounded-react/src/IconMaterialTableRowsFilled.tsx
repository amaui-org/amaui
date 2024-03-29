import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsFilled'

      short_name='TableRows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 6.625q0 .425-.288.713-.287.287-.712.287H4q-.425 0-.712-.287Q3 7.05 3 6.625V4q0-.425.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4Zm0 6.725q0 .425-.288.712-.287.288-.712.288H4q-.425 0-.712-.288Q3 13.775 3 13.35v-2.725q0-.425.288-.713.287-.287.712-.287h16q.425 0 .712.287.288.288.288.713ZM21 20q0 .425-.288.712Q20.425 21 20 21H4q-.425 0-.712-.288Q3 20.425 3 20v-2.65q0-.425.288-.712.287-.288.712-.288h16q.425 0 .712.288.288.287.288.712Z"/>
    </Icon>
  );
});

IconMaterialTableRowsFilled.displayName = 'AmauiIconMaterialTableRowsFilled';

export default IconMaterialTableRowsFilled;
