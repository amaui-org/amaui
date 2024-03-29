import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSimCardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardFilled'

      short_name='SimCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18q0 .425.287.712Q7.575 19 8 19t.713-.288Q9 18.425 9 18t-.287-.712Q8.425 17 8 17t-.713.288Q7 17.575 7 18Zm8 0q0 .425.288.712.287.288.712.288t.712-.288Q17 18.425 17 18t-.288-.712Q16.425 17 16 17t-.712.288Q15 17.575 15 18Zm-8-6v2q0 .425.287.712Q7.575 15 8 15t.713-.288Q9 14.425 9 14v-2q0-.425-.287-.713Q8.425 11 8 11t-.713.287Q7 11.575 7 12Zm4 4v2q0 .425.288.712.287.288.712.288t.713-.288Q13 18.425 13 18v-2q0-.425-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16Zm0-4q0 .425.288.712.287.288.712.288t.713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12Zm4 0v2q0 .425.288.712.287.288.712.288t.712-.288Q17 14.425 17 14v-2q0-.425-.288-.713Q16.425 11 16 11t-.712.287Q15 11.575 15 12ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V8.825q0-.4.15-.763.15-.362.425-.637l4.85-4.85q.275-.275.637-.425.363-.15.763-.15H18q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialSimCardFilled.displayName = 'AmauiIconMaterialSimCardFilled';

export default IconMaterialSimCardFilled;
