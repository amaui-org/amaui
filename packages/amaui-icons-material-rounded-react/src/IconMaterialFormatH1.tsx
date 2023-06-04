import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH1'

      short_name='FormatH1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17q-.425 0-.713-.288Q5 16.425 5 16V8q0-.425.287-.713Q5.575 7 6 7t.713.287Q7 7.575 7 8v3h4V8q0-.425.288-.713Q11.575 7 12 7t.713.287Q13 7.575 13 8v8q0 .425-.287.712Q12.425 17 12 17t-.712-.288Q11 16.425 11 16v-3H7v3q0 .425-.287.712Q6.425 17 6 17Zm12 0q-.425 0-.712-.288Q17 16.425 17 16V9h-1q-.425 0-.712-.288Q15 8.425 15 8t.288-.713Q15.575 7 16 7h2q.425 0 .712.287Q19 7.575 19 8v8q0 .425-.288.712Q18.425 17 18 17Z"/>
    </Icon>
  );
});

IconMaterialFormatH1.displayName = 'AmauiIconMaterialFormatH1';

export default IconMaterialFormatH1;
