import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsW100Filled'

      short_name='Drafts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V8.15q0-.2.1-.363.1-.162.25-.287L11.225 3q.175-.125.375-.163.2-.037.4-.037t.4.037q.2.038.375.163l7.575 4.5q.15.125.25.287.1.163.1.363V18.2q0 .65-.425 1.075-.425.425-1.075.425Zm7.2-7.175q.1 0 .188-.025.087-.025.187-.075L19.8 8l-7.425-4.425q-.1-.05-.187-.075-.088-.025-.188-.025t-.188.025q-.087.025-.187.075L4.2 8l7.425 4.425q.1.05.187.075.088.025.188.025Z"/>
    </Icon>
  );
});

IconMaterialDraftsW100Filled.displayName = 'AmauiIconMaterialDraftsW100Filled';

export default IconMaterialDraftsW100Filled;
