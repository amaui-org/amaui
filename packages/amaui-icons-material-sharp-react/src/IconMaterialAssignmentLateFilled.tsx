import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentLateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentLateFilled'

      short_name='AssignmentLate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm-1-4h2V7h-2Zm-8 8V3h6.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H21v18Zm9-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentLateFilled.displayName = 'AmauiIconMaterialAssignmentLateFilled';

export default IconMaterialAssignmentLateFilled;
