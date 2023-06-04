import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlenderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlenderW100Filled'

      short_name='Blender'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20.7q-.3 0-.5-.2t-.2-.5v-1q0-.95.488-1.812.487-.863 1.462-1.438L8.5 10.6H7.15q-.65 0-1.075-.425Q5.65 9.75 5.65 9.1V5.8q0-.65.425-1.075Q6.5 4.3 7.15 4.3h4v-.25q0-.325.213-.538.212-.212.537-.212h.2q.325 0 .538.212.212.213.212.538v.25h2.775q.35 0 .575.262.225.263.175.613L14.75 15.75q.975.575 1.462 1.438.488.862.488 1.812v1q0 .3-.2.5t-.5.2Zm.4-10.8L7.65 5h-.5q-.3 0-.55.25-.25.25-.25.55v3.3q0 .3.25.55.25.25.55.25Zm3.6 8.8q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm-2.1-3.4h4.2L15.7 5H8.35Z"/>
    </Icon>
  );
});

IconMaterialBlenderW100Filled.displayName = 'AmauiIconMaterialBlenderW100Filled';

export default IconMaterialBlenderW100Filled;
