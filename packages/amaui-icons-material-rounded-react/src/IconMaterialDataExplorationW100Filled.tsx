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
      <path d="M19.2 19.9q.275 0 .488-.212.212-.213.212-.488t-.212-.488q-.213-.212-.488-.212t-.488.212q-.212.213-.212.488t.212.488q.213.212.488.212Zm-7.2.8q-2.45 0-4.5-1.25T4.325 16.1L8.1 12.325l2.75 2.35q.125.1.25.137.125.038.275.038.125 0 .25-.05t.25-.175l4.775-4.75V12q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V9.4q0-.325-.212-.538-.213-.212-.538-.212H14q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.15l-4.8 4.8-2.8-2.325q-.1-.1-.238-.15-.137-.05-.287-.025-.125 0-.25.05t-.225.15L4 15.4q-.35-.775-.525-1.65Q3.3 12.875 3.3 12q0-1.8.687-3.388.688-1.587 1.863-2.762t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12v7.2q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialDataExplorationW100Filled.displayName = 'AmauiIconMaterialDataExplorationW100Filled';

export default IconMaterialDataExplorationW100Filled;
