import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataExplorationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataExplorationW100Filled'

      short_name='DataExploration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.2 19.9q.275 0 .488-.212.212-.213.212-.488t-.212-.488q-.213-.212-.488-.212t-.488.212q-.212.213-.212.488t.212.488q.213.212.488.212Zm-7.2.8q-2.425 0-4.487-1.238Q5.45 18.225 4.325 16.1L8.1 12.325l3.275 2.8 5.275-5.25v2.475h.7v-3.7h-3.7v.7h2.5l-4.8 4.8-3.325-2.775L4 15.4q-.35-.7-.525-1.638Q3.3 12.825 3.3 12q0-1.8.687-3.388.688-1.587 1.863-2.762t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12v8.7Z"/>
    </Icon>
  );
});

IconMaterialDataExplorationW100Filled.displayName = 'AmauiIconMaterialDataExplorationW100Filled';

export default IconMaterialDataExplorationW100Filled;
