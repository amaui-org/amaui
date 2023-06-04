import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarRentalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRentalW100Filled'

      short_name='CarRental'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 6.85q-.975 0-1.662-.688Q6.15 5.475 6.15 4.5q0-.975.688-1.663.687-.687 1.662-.687.875 0 1.512.575.638.575.838 1.425h7v.7h-1v2h-.7v-2h-5.3q-.2.85-.838 1.425-.637.575-1.512.575Zm0-.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163Q9.175 2.85 8.5 2.85t-1.162.487Q6.85 3.825 6.85 4.5t.488 1.162q.487.488 1.162.488Zm0 10.6q.275 0 .488-.212.212-.213.212-.488t-.212-.488q-.213-.212-.488-.212t-.488.212q-.212.213-.212.488t.212.488q.213.212.488.212Zm7 0q.275 0 .488-.212.212-.213.212-.488t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-9.2 3.5v-5.9l1.575-4.5h8.25l1.575 4.5v5.9H17v-2H7v2Zm.9-6.4h9.6l-1.15-3.3h-7.3Z"/>
    </Icon>
  );
});

IconMaterialCarRentalW100Filled.displayName = 'AmauiIconMaterialCarRentalW100Filled';

export default IconMaterialCarRentalW100Filled;
