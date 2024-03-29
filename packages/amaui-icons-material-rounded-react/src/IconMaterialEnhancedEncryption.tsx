import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnhancedEncryption = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnhancedEncryption'

      short_name='EnhancedEncryption'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V10q0-.825.588-1.413Q5.175 8 6 8h1V6q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6v2h1q.825 0 1.413.587Q20 9.175 20 10v10q0 .825-.587 1.413Q18.825 22 18 22ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6ZM6 20h12V10H6v10Zm0-10v10-10Zm6 9q.425 0 .713-.288Q13 18.425 13 18v-2h2q.425 0 .713-.288Q16 15.425 16 15t-.287-.713Q15.425 14 15 14h-2v-2q0-.425-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12v2H9q-.425 0-.712.287Q8 14.575 8 15t.288.712Q8.575 16 9 16h2v2q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialEnhancedEncryption.displayName = 'AmauiIconMaterialEnhancedEncryption';

export default IconMaterialEnhancedEncryption;
