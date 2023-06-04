import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsW100'

      short_name='Drafts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V8.15q0-.2.1-.363.1-.162.25-.287L11.225 3q.175-.125.375-.163.2-.037.4-.037t.4.037q.2.038.375.163l7.575 4.5q.15.125.25.287.1.163.1.363V18.2q0 .65-.425 1.075-.425.425-1.075.425Zm7.2-7.175q.1 0 .188-.025.087-.025.187-.075L19.8 8l-7.425-4.425q-.1-.05-.187-.075-.088-.025-.188-.025t-.188.025q-.087.025-.187.075L4.2 8l7.425 4.425q.1.05.187.075.088.025.188.025ZM4.8 19h14.4q.35 0 .575-.225Q20 18.55 20 18.2V8.7L12.775 13q-.175.125-.375.162-.2.038-.4.038t-.4-.038q-.2-.037-.375-.162L4 8.7v9.5q0 .35.225.575Q4.45 19 4.8 19Zm0 0H4h16H19.2Z"/>
    </Icon>
  );
});

IconMaterialDraftsW100.displayName = 'AmauiIconMaterialDraftsW100';

export default IconMaterialDraftsW100;
