import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendTimeExtension = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendTimeExtension'

      short_name='SendTimeExtension'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 22v-4l4-1-4-1v-4l10 5Zm-4.2-1H3v-5.8q1.2 0 2.1-.762.9-.763.9-1.938 0-1.175-.9-1.938Q4.2 9.8 3 9.8V4h6q0-1.05.725-1.775Q10.45 1.5 11.5 1.5q1.05 0 1.775.725Q14 2.95 14 4h6v9.25l-2-1V6h-6V4q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15Q11 3.8 11 4v2H5v2.2q1.35.5 2.175 1.675Q8 11.05 8 12.5q0 1.425-.825 2.6T5 16.8V19h2.125q.425-1.125 1.45-1.962Q9.6 16.2 11 16.05v2q-1 .2-1.6.938-.6.737-.6 2.012Zm2.7-9.75Z"/>
    </Icon>
  );
});

IconMaterialSendTimeExtension.displayName = 'AmauiIconMaterialSendTimeExtension';

export default IconMaterialSendTimeExtension;
