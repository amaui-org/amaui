import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnchorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnchorFilled'

      short_name='Anchor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-1.525 0-3.125-.55t-2.9-1.5q-1.3-.95-2.138-2.225Q3 16.45 3 15v-2q0-.3.275-.45.275-.15.525.05l2.75 2.05q.2.125.213.35.012.225-.163.4l-1.15 1.15q.725 1.275 2.3 2.2 1.575.925 3.25 1.175V11H9q-.425 0-.712-.288Q8 10.425 8 10t.288-.713Q8.575 9 9 9h2V7.825q-.875-.325-1.438-1.088Q9 5.975 9 5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5q0 .975-.562 1.737Q13.875 7.5 13 7.825V9h2q.425 0 .713.287Q16 9.575 16 10t-.287.712Q15.425 11 15 11h-2v8.925q1.675-.25 3.25-1.175t2.3-2.2L17.4 15.4q-.175-.175-.162-.4.012-.225.212-.35l2.75-2.05q.25-.2.525-.05.275.15.275.45v2q0 1.45-.837 2.725-.838 1.275-2.138 2.225-1.3.95-2.9 1.5-1.6.55-3.125.55Zm0-16q.425 0 .713-.287Q13 5.425 13 5t-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5t.288.713Q11.575 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialAnchorFilled.displayName = 'AmauiIconMaterialAnchorFilled';

export default IconMaterialAnchorFilled;
