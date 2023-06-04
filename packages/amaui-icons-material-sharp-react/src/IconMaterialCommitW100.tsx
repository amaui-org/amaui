import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommitW100'

      short_name='Commit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.35q-1.725 0-2.925-1.137-1.2-1.138-1.45-2.863H3.3v-.7h4.325q.25-1.725 1.45-2.863Q10.275 7.65 12 7.65q1.725 0 2.938 1.137 1.212 1.138 1.437 2.863H20.7v.7h-4.325q-.225 1.725-1.437 2.863Q13.725 16.35 12 16.35Zm0-.7q1.5 0 2.575-1.075Q15.65 13.5 15.65 12q0-1.5-1.075-2.575Q13.5 8.35 12 8.35q-1.5 0-2.575 1.075Q8.35 10.5 8.35 12q0 1.5 1.075 2.575Q10.5 15.65 12 15.65Z"/>
    </Icon>
  );
});

IconMaterialCommitW100.displayName = 'AmauiIconMaterialCommitW100';

export default IconMaterialCommitW100;
