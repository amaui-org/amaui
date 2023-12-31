import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProgressActivityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProgressActivityW100Filled'

      short_name='ProgressActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.684-132Q408-132 344.642-159.34q-63.359-27.339-110.661-74.641-47.302-47.302-74.641-110.661Q132-408 132-479.684q0-72.558 27.5-135.937Q187-679 234-726q47-47 110.715-74.5T480-828q5.95 0 9.975 4.035 4.025 4.035 4.025 10T489.975-804q-4.025 4-9.975 4-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975 0 71.57-27.5 135.285T726-234q-47 47-110.379 74.5Q552.242-132 479.684-132Z"/>
    </Icon>
  );
});

IconMaterialProgressActivityW100Filled.displayName = 'AmauiIconMaterialProgressActivityW100Filled';

export default IconMaterialProgressActivityW100Filled;
