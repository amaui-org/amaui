import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAltitude = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Altitude'

      short_name='Altitude'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 12q-.425 0-.712-.288Q18 11.425 18 11V7.8l-.925.9q-.275.275-.675.288Q16 9 15.7 8.7q-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.3-.3.7-.3.4 0 .7.3l2.6 2.6q.3.3.3.7 0 .4-.3.7-.3.3-.713.3-.412 0-.712-.3L20 7.825V11q0 .425-.288.712Q19.425 12 19 12ZM3 22q-.625 0-.9-.55t.1-1.05l4-5.325q.3-.4.8-.4t.8.4L11.5 20H19l-5-6.65-2.5 3.3L10.25 15l2.95-3.925q.3-.4.8-.4t.8.4l7 9.325q.375.5.1 1.05T21 22Zm8.5-2Z"/>
    </Icon>
  );
});

IconMaterialAltitude.displayName = 'AmauiIconMaterialAltitude';

export default IconMaterialAltitude;
