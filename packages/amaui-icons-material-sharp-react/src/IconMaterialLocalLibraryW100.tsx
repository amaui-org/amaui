import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalLibraryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibraryW100'

      short_name='LocalLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.65-1.275-3.6-2.037-1.95-.763-4.1-.963V8.85q2.225.175 4.212 1.15 1.988.975 3.488 2.3 1.5-1.325 3.488-2.3 1.987-.975 4.212-1.15v8.85q-2.15.2-4.1.963-1.95.762-3.6 2.037Zm0-.85q1.575-1.15 3.35-1.863 1.775-.712 3.65-.937v-7.4q-2 .325-3.787 1.25-1.788.925-3.213 2.35-1.425-1.425-3.212-2.35Q7 9.975 5 9.65v7.4q1.875.225 3.65.937 1.775.713 3.35 1.863Zm0-11.4q-1.225 0-2.113-.888Q9 6.675 9 5.45q0-1.25.887-2.125.888-.875 2.113-.875 1.25 0 2.125.875T15 5.45q0 1.225-.875 2.112-.875.888-2.125.888Zm0-.7q.95 0 1.625-.675T14.3 5.45q0-.95-.675-1.625T12 3.15q-.95 0-1.625.675T9.7 5.45q0 .95.675 1.625T12 7.75Zm0-2.3Zm0 9.3Z"/>
    </Icon>
  );
});

IconMaterialLocalLibraryW100.displayName = 'AmauiIconMaterialLocalLibraryW100';

export default IconMaterialLocalLibraryW100;
