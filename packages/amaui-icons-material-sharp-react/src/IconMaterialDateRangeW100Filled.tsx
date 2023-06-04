import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDateRangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DateRangeW100Filled'

      short_name='DateRange'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 13.85q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213ZM4.3 5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4H4.3ZM5 20h14v-9.2H5Z"/>
    </Icon>
  );
});

IconMaterialDateRangeW100Filled.displayName = 'AmauiIconMaterialDateRangeW100Filled';

export default IconMaterialDateRangeW100Filled;
