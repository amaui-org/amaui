import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdCardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardFilled'

      short_name='SdCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 11q.425 0 .713-.288Q11 10.425 11 10V8q0-.425-.287-.713Q10.425 7 10 7t-.712.287Q9 7.575 9 8v2q0 .425.288.712Q9.575 11 10 11Zm3 0q.425 0 .713-.288Q14 10.425 14 10V8q0-.425-.287-.713Q13.425 7 13 7t-.712.287Q12 7.575 12 8v2q0 .425.288.712.287.288.712.288Zm3 0q.425 0 .712-.288Q17 10.425 17 10V8q0-.425-.288-.713Q16.425 7 16 7t-.712.287Q15 7.575 15 8v2q0 .425.288.712.287.288.712.288ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V8.825q0-.4.15-.763.15-.362.425-.637l4.85-4.85q.275-.275.637-.425.363-.15.763-.15H18q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialSdCardFilled.displayName = 'AmauiIconMaterialSdCardFilled';

export default IconMaterialSdCardFilled;
