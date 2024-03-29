import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTokenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TokenFilled'

      short_name='Token'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.1 9.25 4.05 6.425 12 2l7.95 4.425L14.9 9.25q-.55-.575-1.287-.913Q12.875 8 12 8t-1.613.337q-.737.338-1.287.913Zm1.9 12.2L3 17V8.125L8.125 11q-.075.225-.1.475Q8 11.725 8 12q0 1.4.85 2.462.85 1.063 2.15 1.413ZM12 14q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm1 7.45v-5.575q1.3-.35 2.15-1.413Q16 13.4 16 12q0-.275-.025-.512-.025-.238-.1-.488L21 8.125V17Z"/>
    </Icon>
  );
});

IconMaterialTokenFilled.displayName = 'AmauiIconMaterialTokenFilled';

export default IconMaterialTokenFilled;
