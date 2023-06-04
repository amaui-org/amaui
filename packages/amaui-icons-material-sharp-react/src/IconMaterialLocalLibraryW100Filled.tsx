import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalLibraryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibraryW100Filled'

      short_name='LocalLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.65-1.275-3.6-2.037-1.95-.763-4.1-.963V8.85q2.225.175 4.212 1.15 1.988.975 3.488 2.3 1.5-1.325 3.488-2.3 1.987-.975 4.212-1.15v8.85q-2.15.2-4.1.963-1.95.762-3.6 2.037Zm0-12.25q-1.25 0-2.125-.875T9 5.45q0-1.25.875-2.125T12 2.45q1.25 0 2.125.875T15 5.45q0 1.25-.875 2.125T12 8.45Z"/>
    </Icon>
  );
});

IconMaterialLocalLibraryW100Filled.displayName = 'AmauiIconMaterialLocalLibraryW100Filled';

export default IconMaterialLocalLibraryW100Filled;
