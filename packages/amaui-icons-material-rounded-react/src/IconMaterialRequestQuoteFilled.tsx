import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestQuoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuoteFilled'

      short_name='RequestQuote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm6-3q.425 0 .713-.288Q13 18.425 13 18h1q.425 0 .713-.288Q15 17.425 15 17v-3q0-.425-.287-.713Q14.425 13 14 13h-3v-1h3q.425 0 .713-.288Q15 11.425 15 11t-.287-.713Q14.425 10 14 10h-1q0-.425-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10h-1q-.425 0-.712.287Q9 10.575 9 11v3q0 .425.288.712Q9.575 15 10 15h3v1h-3q-.425 0-.712.288Q9 16.575 9 17t.288.712Q9.575 18 10 18h1q0 .425.288.712.287.288.712.288Zm2-11h3.5L13 3.5V7q0 .425.288.713Q13.575 8 14 8Z"/>
    </Icon>
  );
});

IconMaterialRequestQuoteFilled.displayName = 'AmauiIconMaterialRequestQuoteFilled';

export default IconMaterialRequestQuoteFilled;
