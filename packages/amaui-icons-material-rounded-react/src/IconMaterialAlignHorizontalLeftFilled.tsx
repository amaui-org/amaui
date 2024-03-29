import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftFilled'

      short_name='AlignHorizontalLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22q-.425 0-.712-.288Q2 21.425 2 21V3q0-.425.288-.713Q2.575 2 3 2t.713.287Q4 2.575 4 3v18q0 .425-.287.712Q3.425 22 3 22Zm4.5-12q-.625 0-1.062-.438Q6 9.125 6 8.5t.438-1.062Q6.875 7 7.5 7h13q.625 0 1.062.438Q22 7.875 22 8.5t-.438 1.062Q21.125 10 20.5 10Zm0 7q-.625 0-1.062-.438Q6 16.125 6 15.5t.438-1.062Q6.875 14 7.5 14h7q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q15.125 17 14.5 17Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeftFilled.displayName = 'AmauiIconMaterialAlignHorizontalLeftFilled';

export default IconMaterialAlignHorizontalLeftFilled;
