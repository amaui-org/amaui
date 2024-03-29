import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicFilled'

      short_name='Topic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 12h10q.425 0 .712-.288Q18 11.425 18 11t-.288-.713Q17.425 10 17 10H7q-.425 0-.713.287Q6 10.575 6 11t.287.712Q6.575 12 7 12Zm0 4h6q.425 0 .713-.288Q14 15.425 14 15t-.287-.713Q13.425 14 13 14H7q-.425 0-.713.287Q6 14.575 6 15t.287.712Q6.575 16 7 16Zm-3 4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialTopicFilled.displayName = 'AmauiIconMaterialTopicFilled';

export default IconMaterialTopicFilled;
