import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowAboveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowAboveFilled'

      short_name='AddRowAbove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-640q-17 0-28.5-11.5T440-680v-40h-40q-17 0-28.5-11.5T360-760q0-17 11.5-28.5T400-800h40v-40q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v40h40q17 0 28.5 11.5T600-760q0 17-11.5 28.5T560-720h-40v40q0 17-11.5 28.5T480-640ZM200-80q-33 0-56.5-23.5T120-160v-240h720v240q0 33-23.5 56.5T760-80H200Zm-80-400v-240q0-33 23.5-56.5T200-800h44q16 0 26.5 12t9.5 28q0 83 58 141.5T480-560q84 0 142-58.5T680-760q0-16 10-28t26-12h44q33 0 56.5 23.5T840-720v240H120Z"/>
    </Icon>
  );
});

IconMaterialAddRowAboveFilled.displayName = 'AmauiIconMaterialAddRowAboveFilled';

export default IconMaterialAddRowAboveFilled;
