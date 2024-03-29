import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderColorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorFilled'

      short_name='BorderColor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 24q-.825 0-1.412-.587Q2 22.825 2 22q0-.825.588-1.413Q3.175 20 4 20h16q.825 0 1.413.587Q22 21.175 22 22q0 .825-.587 1.413Q20.825 24 20 24Zm1-6q-.425 0-.713-.288Q4 17.425 4 17v-2.325q0-.2.075-.388.075-.187.225-.337l8.75-8.75 3.75 3.75-8.75 8.75q-.15.15-.337.225-.188.075-.388.075ZM17.925 7.85l-3.75-3.75 1.8-1.8q.275-.3.7-.288.425.013.7.288l2.35 2.35q.275.275.275.688 0 .412-.275.712Z"/>
    </Icon>
  );
});

IconMaterialBorderColorFilled.displayName = 'AmauiIconMaterialBorderColorFilled';

export default IconMaterialBorderColorFilled;
