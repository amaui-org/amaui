import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalRight'

      short_name='AlignHorizontalRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 22q-.425 0-.712-.288Q20 21.425 20 21V3q0-.425.288-.713Q20.575 2 21 2t.712.287Q22 2.575 22 3v18q0 .425-.288.712Q21.425 22 21 22ZM3.5 10q-.625 0-1.062-.438Q2 9.125 2 8.5t.438-1.062Q2.875 7 3.5 7h13q.625 0 1.062.438Q18 7.875 18 8.5t-.438 1.062Q17.125 10 16.5 10Zm6 7q-.625 0-1.062-.438Q8 16.125 8 15.5t.438-1.062Q8.875 14 9.5 14h7q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q17.125 17 16.5 17Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalRight.displayName = 'AmauiIconMaterialAlignHorizontalRight';

export default IconMaterialAlignHorizontalRight;
