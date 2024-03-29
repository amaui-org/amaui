import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH4Filled'

      short_name='FormatH4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 17q-.425 0-.712-.288Q2.5 16.425 2.5 16V8q0-.425.288-.713Q3.075 7 3.5 7t.713.287Q4.5 7.575 4.5 8v3h4V8q0-.425.288-.713Q9.075 7 9.5 7t.713.287q.287.288.287.713v8q0 .425-.287.712Q9.925 17 9.5 17t-.712-.288Q8.5 16.425 8.5 16v-3h-4v3q0 .425-.287.712Q3.925 17 3.5 17Zm15 0q-.425 0-.712-.288-.288-.287-.288-.712v-2h-4q-.425 0-.712-.288-.288-.287-.288-.712V8q0-.425.288-.713Q13.075 7 13.5 7t.713.287q.287.288.287.713v4h3V8q0-.425.288-.713Q18.075 7 18.5 7t.712.287q.288.288.288.713v4h1q.425 0 .712.287.288.288.288.713t-.288.712Q20.925 14 20.5 14h-1v2q0 .425-.288.712-.287.288-.712.288Z"/>
    </Icon>
  );
});

IconMaterialFormatH4Filled.displayName = 'AmauiIconMaterialFormatH4Filled';

export default IconMaterialFormatH4Filled;
