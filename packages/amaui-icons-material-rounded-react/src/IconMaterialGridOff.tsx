import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOff'

      short_name='GridOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 19.15-2-2V16h-1.15l-2-2H20v-4h-4v3.15l-2-2V10h-1.15l-2-2H14V4h-4v3.15l-2-2V4H6.85l-2-2H20q.825 0 1.413.587Q22 3.175 22 4ZM16 8h4V4h-4Zm3.8 14.625L19.15 22H4q-.825 0-1.412-.587Q2 20.825 2 20V4.8l-.6-.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.275.7 0 .425-.3.725-.275.275-.675.275t-.7-.275ZM16 20h1.15L16 18.8Zm-6-6h1.15L10 12.8Zm0 6h4v-3.2l-.85-.8H10ZM4 8h1.15L4 6.8Zm0 6h4v-3.2l-.85-.8H4Zm4 6v-4H4v4Z"/>
    </Icon>
  );
});

IconMaterialGridOff.displayName = 'AmauiIconMaterialGridOff';

export default IconMaterialGridOff;
