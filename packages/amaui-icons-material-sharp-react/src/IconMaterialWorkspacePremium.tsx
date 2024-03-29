import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkspacePremium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacePremium'

      short_name='WorkspacePremium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.675 13.7.875-2.85L8.25 9h2.85l.9-2.8.9 2.8h2.85l-2.325 1.85.875 2.85-2.3-1.775ZM6 23v-7.725q-.95-1.05-1.475-2.4Q4 11.525 4 10q0-3.35 2.325-5.675Q8.65 2 12 2q3.35 0 5.675 2.325Q20 6.65 20 10q0 1.525-.525 2.875T18 15.275V23l-6-2Zm6-7q2.5 0 4.25-1.75T18 10q0-2.5-1.75-4.25T12 4Q9.5 4 7.75 5.75T6 10q0 2.5 1.75 4.25T12 16Zm-4 4.025L12 19l4 1.025v-3.1q-.875.5-1.887.787Q13.1 18 12 18t-2.113-.288Q8.875 17.425 8 16.925Zm4-1.55Z"/>
    </Icon>
  );
});

IconMaterialWorkspacePremium.displayName = 'AmauiIconMaterialWorkspacePremium';

export default IconMaterialWorkspacePremium;
