import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubscriptions = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subscriptions'

      short_name='Subscriptions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 4q-.425 0-.713-.288Q7 3.425 7 3t.287-.713Q7.575 2 8 2h8q.425 0 .712.287Q17 2.575 17 3t-.288.712Q16.425 4 16 4ZM5 7q-.425 0-.713-.287Q4 6.425 4 6t.287-.713Q4.575 5 5 5h14q.425 0 .712.287Q20 5.575 20 6t-.288.713Q19.425 7 19 7ZM4 22q-.825 0-1.412-.587Q2 20.825 2 20V10q0-.825.588-1.413Q3.175 8 4 8h16q.825 0 1.413.587Q22 9.175 22 10v10q0 .825-.587 1.413Q20.825 22 20 22Zm0-2h16V10H4v10Zm7.55-2.025 3.2-2.15q.45-.3.45-.825 0-.525-.45-.825l-3.2-2.15q-.5-.35-1.025-.05-.525.3-.525.9v4.25q0 .6.525.9.525.3 1.025-.05ZM4 10v10-10Z"/>
    </Icon>
  );
});

IconMaterialSubscriptions.displayName = 'AmauiIconMaterialSubscriptions';

export default IconMaterialSubscriptions;
