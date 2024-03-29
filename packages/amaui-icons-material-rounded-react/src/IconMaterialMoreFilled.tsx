import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreFilled'

      short_name='More'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.525 13q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.95 11 9.525 11t-.713.287q-.287.288-.287.713t.287.712Q9.1 13 9.525 13Zm3.5 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q13.45 11 13.025 11t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288Zm3.5 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q16.95 11 16.525 11t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288Zm-7.5 6q-.5 0-.937-.225-.438-.225-.713-.625l-3.525-5q-.375-.525-.375-1.15 0-.625.375-1.15l3.525-5q.275-.4.713-.625Q8.525 5 9.025 5h10q.825 0 1.413.588.587.587.587 1.412v10q0 .825-.587 1.413-.588.587-1.413.587Z"/>
    </Icon>
  );
});

IconMaterialMoreFilled.displayName = 'AmauiIconMaterialMoreFilled';

export default IconMaterialMoreFilled;
