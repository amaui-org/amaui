import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewLabelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelFilled'

      short_name='NewLabel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-.425 0-.713-.288Q5 19.425 5 19v-2H3q-.425 0-.712-.288Q2 16.425 2 16t.288-.713Q2.575 15 3 15h2v-2q0-.425.287-.713Q5.575 12 6 12t.713.287Q7 12.575 7 13v2h2q.425 0 .713.287.287.288.287.713t-.287.712Q9.425 17 9 17H7v2q0 .425-.287.712Q6.425 20 6 20Zm6-1v-3.025q0-1.25-.863-2.112Q10.275 13 9.025 13H9v-.025q0-1.25-.863-2.112Q7.275 10 6.025 10H3V7q0-.825.587-1.412Q4.175 5 5 5h10q.5 0 .938.225.437.225.712.625l3.525 5q.375.525.375 1.15 0 .625-.375 1.15l-3.525 5q-.275.4-.712.625Q15.5 19 15 19Z"/>
    </Icon>
  );
});

IconMaterialNewLabelFilled.displayName = 'AmauiIconMaterialNewLabelFilled';

export default IconMaterialNewLabelFilled;
