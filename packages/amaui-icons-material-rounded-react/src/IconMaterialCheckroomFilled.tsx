import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckroomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckroomFilled'

      short_name='Checkroom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20q-.725 0-.95-.688-.225-.687.35-1.112l8.6-6.45V10q0-.425.275-.713.275-.287.7-.287.65.025 1.087-.413.438-.437.438-1.087 0-.625-.425-1.062Q12.65 6 12.025 6q-.45 0-.837.262-.388.263-.563.688-.125.275-.363.412-.237.138-.537.138-.55 0-.838-.463-.287-.462-.062-.962.425-.95 1.275-1.513Q10.95 4 12 4q1.45 0 2.475 1Q15.5 6 15.5 7.45q0 1.2-.7 2.125T13 10.85v.9l8.6 6.45q.575.425.35 1.112Q21.725 20 21 20Zm3-2h12l-6-4.5Z"/>
    </Icon>
  );
});

IconMaterialCheckroomFilled.displayName = 'AmauiIconMaterialCheckroomFilled';

export default IconMaterialCheckroomFilled;
