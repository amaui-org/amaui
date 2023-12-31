import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccess2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccess2Filled'

      short_name='SwitchAccess2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-160q-33 0-56.5-23.5T520-240v-40q0-17 11.5-28.5T560-320q17 0 28.5 11.5T600-280v40h40q17 0 28.5 11.5T680-200q0 17-11.5 28.5T640-160h-40Zm200 0q-17 0-28.5-11.5T760-200q0-17 11.5-28.5T800-240h40v-40q0-17 11.5-28.5T880-320q17 0 28.5 11.5T920-280v40q0 33-23.5 56.5T840-160h-40ZM560-640q-17 0-28.5-11.5T520-680v-40q0-33 23.5-56.5T600-800h40q17 0 28.5 11.5T680-760q0 17-11.5 28.5T640-720h-40v40q0 17-11.5 28.5T560-640Zm320 0q-17 0-28.5-11.5T840-680v-40h-40q-17 0-28.5-11.5T760-760q0-17 11.5-28.5T800-800h40q33 0 56.5 23.5T920-720v40q0 17-11.5 28.5T880-640ZM708-348q-11 11-27.5 11.5T652-348q-11-11-11-28t11-28l35-36H280q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520h407l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L708-348ZM120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h240q33 0 56.5 23.5T440-720v120H240q-33 0-56.5 23.5T160-520v80q0 33 23.5 56.5T240-360h200v120q0 33-23.5 56.5T360-160H120Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccess2Filled.displayName = 'AmauiIconMaterialSwitchAccess2Filled';

export default IconMaterialSwitchAccess2Filled;
