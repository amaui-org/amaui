import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTacticW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TacticW100Filled'

      short_name='Tactic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m641-172-19-19 63-64-63-63 19-20 64 64 63-64 20 20-64 63 64 64-20 19-63-63-64 63Zm-375-28q27 0 46.5-19.5T332-266q0-27-19.5-46.5T266-332q-27 0-46.5 19.5T200-266q0 27 19.5 46.5T266-200Zm0 28q-39 0-66.5-27.5T172-266q0-39 27.5-66.5T266-360q35 0 61.5 22.5T359-280q49-2 83-37t34-83v-145q0-72 51-123t123-51h84l-89-89 20-20 123 123-123 123-20-19 88-90h-83q-61 0-103.5 42.5T504-545v145q0 60-42.5 102.5T359-252q-5 35-31.5 57.5T266-172Zm-75-450-19-19 63-64-63-63 19-20 64 64 63-64 20 20-64 63 64 64-20 19-63-63-64 63Z"/>
    </Icon>
  );
});

IconMaterialTacticW100Filled.displayName = 'AmauiIconMaterialTacticW100Filled';

export default IconMaterialTacticW100Filled;
