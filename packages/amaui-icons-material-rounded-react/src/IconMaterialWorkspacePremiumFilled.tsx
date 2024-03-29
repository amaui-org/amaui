import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkspacePremiumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacePremiumFilled'

      short_name='WorkspacePremium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.925 12.75 12 11.925l1.05.825q.3.225.6.012.3-.212.2-.562l-.425-1.35 1.2-.95q.275-.225.163-.563Q14.675 9 14.325 9H12.9l-.425-1.325q-.125-.35-.475-.35t-.475.35L11.1 9H9.675q-.375 0-.487.337-.113.338.162.563l1.2.95-.425 1.35q-.125.35.187.562.313.213.613-.012Zm-3.6 9.8q-.5.175-.913-.125-.412-.3-.412-.8v-6.35q-.95-1.05-1.475-2.4Q4 11.525 4 10q0-3.35 2.325-5.675Q8.65 2 12 2q3.35 0 5.675 2.325Q20 6.65 20 10q0 1.525-.525 2.875T18 15.275v6.35q0 .5-.413.8-.412.3-.912.125L12 21ZM12 16q2.5 0 4.25-1.75T18 10q0-2.5-1.75-4.25T12 4Q9.5 4 7.75 5.75T6 10q0 2.5 1.75 4.25T12 16Z"/>
    </Icon>
  );
});

IconMaterialWorkspacePremiumFilled.displayName = 'AmauiIconMaterialWorkspacePremiumFilled';

export default IconMaterialWorkspacePremiumFilled;
