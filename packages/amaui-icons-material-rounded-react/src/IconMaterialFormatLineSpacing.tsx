import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLineSpacing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLineSpacing'

      short_name='FormatLineSpacing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 7q-.425 0-.712-.287Q12 6.425 12 6t.288-.713Q12.575 5 13 5h8q.425 0 .712.287Q22 5.575 22 6t-.288.713Q21.425 7 21 7Zm0 6q-.425 0-.712-.288Q12 12.425 12 12t.288-.713Q12.575 11 13 11h8q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13Zm0 6q-.425 0-.712-.288Q12 18.425 12 18t.288-.712Q12.575 17 13 17h8q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 19 21 19Zm-7.7.3-2.6-2.6q-.275-.275-.287-.688Q2.4 15.6 2.7 15.3q.275-.275.688-.288.412-.012.712.263l.9.875v-8.3l-.9.875Q3.825 9 3.413 9 3 9 2.7 8.7q-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.3-.3.7-.3.4 0 .7.3l2.6 2.6q.275.275.288.687Q9.6 8.4 9.3 8.7q-.275.275-.687.288Q8.2 9 7.9 8.725L7 7.85v8.3l.9-.875Q8.175 15 8.588 15q.412 0 .712.3.275.275.275.7 0 .425-.275.7l-2.6 2.6q-.3.3-.7.3-.4 0-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialFormatLineSpacing.displayName = 'AmauiIconMaterialFormatLineSpacing';

export default IconMaterialFormatLineSpacing;
