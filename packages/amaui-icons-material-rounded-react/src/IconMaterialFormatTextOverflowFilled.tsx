import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextOverflowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextOverflowFilled'

      short_name='FormatTextOverflow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20q-.425 0-.713-.288Q4 19.425 4 19V5q0-.425.287-.713Q4.575 4 5 4t.713.287Q6 4.575 6 5v14q0 .425-.287.712Q5.425 20 5 20Zm8-11q-.425 0-.712-.288Q12 8.425 12 8V5q0-.425.288-.713Q12.575 4 13 4t.713.287Q14 4.575 14 5v3q0 .425-.287.712Q13.425 9 13 9Zm4.175 5.825q-.3.3-.713.3-.412 0-.712-.3t-.3-.7q0-.4.3-.7l.425-.425H9q-.425 0-.712-.288Q8 12.425 8 12t.288-.713Q8.575 11 9 11h7.175l-.425-.425q-.3-.3-.3-.7 0-.4.3-.7.3-.3.712-.3.413 0 .713.3L19.3 11.3q.3.3.3.7 0 .4-.3.7ZM13 20q-.425 0-.712-.288Q12 19.425 12 19v-3q0-.425.288-.713Q12.575 15 13 15t.713.287Q14 15.575 14 16v3q0 .425-.287.712Q13.425 20 13 20Z"/>
    </Icon>
  );
});

IconMaterialFormatTextOverflowFilled.displayName = 'AmauiIconMaterialFormatTextOverflowFilled';

export default IconMaterialFormatTextOverflowFilled;
