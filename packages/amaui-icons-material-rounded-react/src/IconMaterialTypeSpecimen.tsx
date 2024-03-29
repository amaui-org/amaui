import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTypeSpecimen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TypeSpecimen'

      short_name='TypeSpecimen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.65 10.9 1.3-3.75h.1l1.3 3.75ZM8 18q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22ZM8 4v12V4Zm2.85 10.5q.25 0 .45-.137.2-.138.275-.363l.625-1.8h3.65l.625 1.825q.075.2.263.338.187.137.412.137.375 0 .6-.3.225-.3.1-.65l-2.775-7.3q-.125-.35-.425-.55-.3-.2-.65-.2-.35 0-.65.2-.3.2-.425.55l-2.75 7.25q-.125.35.088.675.212.325.587.325Z"/>
    </Icon>
  );
});

IconMaterialTypeSpecimen.displayName = 'AmauiIconMaterialTypeSpecimen';

export default IconMaterialTypeSpecimen;
