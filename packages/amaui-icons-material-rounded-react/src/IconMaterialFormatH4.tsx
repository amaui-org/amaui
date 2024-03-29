import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH4'

      short_name='FormatH4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.425 0-.712-.288Q3 16.425 3 16V8q0-.425.288-.713Q3.575 7 4 7t.713.287Q5 7.575 5 8v3h4V8q0-.425.288-.713Q9.575 7 10 7t.713.287Q11 7.575 11 8v8q0 .425-.287.712Q10.425 17 10 17t-.712-.288Q9 16.425 9 16v-3H5v3q0 .425-.287.712Q4.425 17 4 17Zm15 0q-.425 0-.712-.288Q18 16.425 18 16v-2h-4q-.425 0-.712-.288Q13 13.425 13 13V8q0-.425.288-.713Q13.575 7 14 7t.713.287Q15 7.575 15 8v4h3V8q0-.425.288-.713Q18.575 7 19 7t.712.287Q20 7.575 20 8v4h1q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 14 21 14h-1v2q0 .425-.288.712Q19.425 17 19 17Z"/>
    </Icon>
  );
});

IconMaterialFormatH4.displayName = 'AmauiIconMaterialFormatH4';

export default IconMaterialFormatH4;
