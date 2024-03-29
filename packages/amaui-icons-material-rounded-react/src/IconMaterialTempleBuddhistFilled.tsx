import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempleBuddhistFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleBuddhistFilled'

      short_name='TempleBuddhist'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.25 6 2.95-3.925q.15-.2.362-.3.213-.1.438-.1t.438.1q.212.1.362.3L15.75 6ZM6 10V8.85Q5 8.6 4.25 7.9T3.175 6.225q-.15-.45.175-.825.325-.375.875-.375.275 0 .525.2t.4.55q.225.525.725.875t1.1.35h10.05q.6 0 1.1-.35.5-.35.725-.875.15-.35.4-.55.25-.2.525-.2.525 0 .863.375.337.375.187.825Q20.5 7.2 19.75 7.9q-.75.7-1.75.95V10Zm0 12q-.825 0-1.412-.587Q4 20.825 4 20v-7.15q-1-.25-1.75-.95t-1.075-1.675q-.15-.45.175-.825.325-.375.875-.375.275 0 .525.2t.4.55q.225.525.725.875t1.1.35h14.05q.6 0 1.1-.35.5-.35.725-.875.15-.35.4-.55.25-.2.525-.2.525 0 .863.375.337.375.187.825-.325.975-1.075 1.675-.75.7-1.75.95V20q0 .825-.587 1.413Q18.825 22 18 22h-5v-4q0-.425-.287-.712Q12.425 17 12 17t-.712.288Q11 17.575 11 18v4Z"/>
    </Icon>
  );
});

IconMaterialTempleBuddhistFilled.displayName = 'AmauiIconMaterialTempleBuddhistFilled';

export default IconMaterialTempleBuddhistFilled;
