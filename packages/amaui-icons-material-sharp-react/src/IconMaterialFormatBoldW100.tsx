import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatBoldW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatBoldW100'

      short_name='FormatBold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.4 17.05V5h3.8q1.425 0 2.413.838.987.837.987 2.262 0 1.025-.525 1.712-.525.688-1.275.988.95.225 1.575 1.012.625.788.625 1.963 0 1.575-1.012 2.425-1.013.85-2.588.85Zm.75-6.55h3.025q1.2 0 1.913-.637.712-.638.712-1.763t-.712-1.763q-.713-.637-1.913-.637H9.15Zm0 5.85h3.2q1.25 0 2.05-.625.8-.625.8-1.95t-.8-1.95q-.8-.625-2.05-.625h-3.2Z"/>
    </Icon>
  );
});

IconMaterialFormatBoldW100.displayName = 'AmauiIconMaterialFormatBoldW100';

export default IconMaterialFormatBoldW100;
