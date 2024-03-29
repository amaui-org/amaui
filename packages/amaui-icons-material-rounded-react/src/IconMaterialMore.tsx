import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='More'

      short_name='More'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 13q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.925 11 9.5 11t-.712.287Q8.5 11.575 8.5 12t.288.712Q9.075 13 9.5 13Zm3.5 0q.425 0 .713-.288Q14 12.425 14 12t-.287-.713Q13.425 11 13 11t-.712.287Q12 11.575 12 12t.288.712Q12.575 13 13 13Zm3.5 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q16.925 11 16.5 11t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288ZM9 19q-.5 0-.938-.225-.437-.225-.712-.625l-3.525-5q-.35-.525-.35-1.15 0-.625.35-1.15l3.525-5q.275-.4.712-.625Q8.5 5 9 5h10q.825 0 1.413.588Q21 6.175 21 7v10q0 .825-.587 1.413Q19.825 19 19 19Zm-3.55-7L9 17h10V7H9ZM19 12V7v10Z"/>
    </Icon>
  );
});

IconMaterialMore.displayName = 'AmauiIconMaterialMore';

export default IconMaterialMore;
