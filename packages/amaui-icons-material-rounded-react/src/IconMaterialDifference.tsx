import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDifference = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Difference'

      short_name='Difference'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 11q.425 0 .713-.288.287-.287.287-.712V9h1q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q15.925 7 15.5 7h-1V6q0-.425-.287-.713Q13.925 5 13.5 5t-.712.287Q12.5 5.575 12.5 6v1h-1q-.425 0-.712.287-.288.288-.288.713t.288.712Q11.075 9 11.5 9h1v1q0 .425.288.712.287.288.712.288Zm-2 4h4q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q15.925 13 15.5 13h-4q-.425 0-.712.287-.288.288-.288.713t.288.712q.287.288.712.288ZM8 19q-.825 0-1.412-.587Q6 17.825 6 17V3q0-.825.588-1.413Q7.175 1 8 1h6.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V17q0 .825-.587 1.413Q19.825 19 19 19Zm0-2h11V8l-5-5H8v14Zm-4 6q-.825 0-1.412-.587Q2 21.825 2 21V8q0-.425.288-.713Q2.575 7 3 7t.713.287Q4 7.575 4 8v13h10q.425 0 .713.288.287.287.287.712t-.287.712Q14.425 23 14 23Zm4-6V3v14Z"/>
    </Icon>
  );
});

IconMaterialDifference.displayName = 'AmauiIconMaterialDifference';

export default IconMaterialDifference;
