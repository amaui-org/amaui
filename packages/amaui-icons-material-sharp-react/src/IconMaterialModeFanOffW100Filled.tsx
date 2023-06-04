import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeFanOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeFanOffW100Filled'

      short_name='ModeFanOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.45 12.4q0 1.2-.575 1.925-.575.725-1.575.725-.425 0-1.025-.25-.6-.25-.9-.525L9 7q-.275-1.825 1.25-2.638 1.525-.812 3-.812.8 0 1.3.462.5.463.5 1.188 0 .5-.212.925-.213.425-.588.7-.55.35-.95 1.037-.4.688-.6 1.613.35.125.6.263.25.137.45.337L16.1 9.2q.35-.125.65-.188.3-.062.625-.062 1.35 0 2.213.962.862.963.862 2.488Zm.025 9.9L15 16.8q.05.125.05.25v.25q0 1.375-1.162 2.262-1.163.888-3.038.888-.8 0-1.35-.488-.55-.487-.55-1.212 0-.5.213-.925.212-.425.587-.675.575-.375.963-1.063.387-.687.587-1.562-.325-.125-.575-.263-.25-.137-.475-.337l-2.35.85q-.35.125-.662.2-.313.075-.638.075-1.5 0-2.275-1.013-.775-1.012-.775-2.437 0-1.3.6-1.975t1.625-.675q.55 0 1.238.275.687.275 1.037.625l-6.625-6.6.5-.5 19.05 19.05Z"/>
    </Icon>
  );
});

IconMaterialModeFanOffW100Filled.displayName = 'AmauiIconMaterialModeFanOffW100Filled';

export default IconMaterialModeFanOffW100Filled;
