import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestQuote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuote'

      short_name='RequestQuote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22ZM6 8V4v16V8Zm4 10q-.425 0-.712-.288Q9 17.425 9 17t.288-.712Q9.575 16 10 16h3v-1h-3q-.425 0-.712-.288Q9 14.425 9 14v-3q0-.425.288-.713Q9.575 10 10 10h1q0-.425.288-.713Q11.575 9 12 9t.713.287Q13 9.575 13 10h1q.425 0 .713.287.287.288.287.713t-.287.712Q14.425 12 14 12h-3v1h3q.425 0 .713.287.287.288.287.713v3q0 .425-.287.712Q14.425 18 14 18h-1q0 .425-.287.712Q12.425 19 12 19t-.712-.288Q11 18.425 11 18Zm8-10h-4q-.425 0-.712-.287Q13 7.425 13 7V4H6v16h12Z"/>
    </Icon>
  );
});

IconMaterialRequestQuote.displayName = 'AmauiIconMaterialRequestQuote';

export default IconMaterialRequestQuote;
