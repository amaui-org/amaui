import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDescriptionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionFilled'

      short_name='Description'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 18h6q.425 0 .713-.288Q16 17.425 16 17t-.287-.712Q15.425 16 15 16H9q-.425 0-.712.288Q8 16.575 8 17t.288.712Q8.575 18 9 18Zm0-4h6q.425 0 .713-.288Q16 13.425 16 13t-.287-.713Q15.425 12 15 12H9q-.425 0-.712.287Q8 12.575 8 13t.288.712Q8.575 14 9 14Zm-3 8q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm7-14q0 .425.288.712Q13.575 9 14 9h4l-5-5Z"/>
    </Icon>
  );
});

IconMaterialDescriptionFilled.displayName = 'AmauiIconMaterialDescriptionFilled';

export default IconMaterialDescriptionFilled;
