import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabProfileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfileFilled'

      short_name='LabProfile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 12h6q.425 0 .713-.288Q16 11.425 16 11t-.287-.713Q15.425 10 15 10H9q-.425 0-.712.287Q8 10.575 8 11t.288.712Q8.575 12 9 12Zm0-4h6q.425 0 .713-.287Q16 7.425 16 7t-.287-.713Q15.425 6 15 6H9q-.425 0-.712.287Q8 6.575 8 7t.288.713Q8.575 8 9 8Zm10.95 12.475L15.9 15.2q-.425-.575-1.05-.888Q14.225 14 13.5 14H4V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v16q0 .125-.012.238-.013.112-.038.237ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20v-4h9.5q.25 0 .463.113.212.112.362.312l4.2 5.5q-.125.05-.262.063Q18.125 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialLabProfileFilled.displayName = 'AmauiIconMaterialLabProfileFilled';

export default IconMaterialLabProfileFilled;
