import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNewOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOff'

      short_name='OpenInNewOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5.85l-.925-.925Q1.8 4.65 1.8 4.237q0-.412.3-.712t.712-.3q.413 0 .713.3L20.5 20.5q.275.275.288.688.012.412-.288.712t-.712.3q-.413 0-.713-.3l-.925-.9Zm0-2h11.15l-4.875-4.875-.9.9q-.275.275-.675.275T9 15q-.275-.275-.275-.7 0-.425.275-.7l.875-.875L5 7.85V19Zm16-.85-2-2V13q0-.425.288-.713Q19.575 12 20 12t.712.287Q21 12.575 21 13Zm-6.875-6.875-1.4-1.4L17.6 5H15q-.425 0-.712-.288Q14 4.425 14 4t.288-.713Q14.575 3 15 3h5q.425 0 .712.287Q21 3.575 21 4v5q0 .425-.288.712Q20.425 10 20 10t-.712-.288Q19 9.425 19 9V6.4ZM7.85 5l-2-2H11q.425 0 .713.287Q12 3.575 12 4t-.287.712Q11.425 5 11 5Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewOff.displayName = 'AmauiIconMaterialOpenInNewOff';

export default IconMaterialOpenInNewOff;
