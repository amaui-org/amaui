import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseW100Filled'

      short_name='ShieldWithHouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.225 13.2 11.5 9.075q.225-.175.5-.175t.5.175l5.275 4.125q.05-.2.075-.388l.05-.387-4.975-3.875Q12.5 8.225 12 8.225t-.925.325L6.1 12.425q.05.2.063.387.012.188.062.388ZM12 19.9q.35-.125.688-.25.337-.125.662-.325V16.4q0-.325-.212-.537-.213-.213-.538-.213h-1.2q-.325 0-.537.213-.213.212-.213.537v2.925q.325.2.662.325.338.125.688.25Zm0 .675h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouseW100Filled.displayName = 'AmauiIconMaterialShieldWithHouseW100Filled';

export default IconMaterialShieldWithHouseW100Filled;
