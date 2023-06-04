import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDateRange = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DateRange'

      short_name='DateRange'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 14q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12t.713.287Q9 12.575 9 13t-.287.712Q8.425 14 8 14Zm4 0q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm4 0q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12t.712.287Q17 12.575 17 13t-.288.712Q16.425 14 16 14ZM3 4h3V2h2v2h8V2h2v2h3v18H3Zm2 16h14V10H5ZM5 8h14V6H5Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialDateRange.displayName = 'AmauiIconMaterialDateRange';

export default IconMaterialDateRange;
