import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastFilled'

      short_name='Cast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 20q0-2.275-.863-4.275-.862-2-2.362-3.5t-3.5-2.362Q4.275 9 2 9V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm-3 0q-.4 0-.712-.288-.313-.287-.363-.712-.325-2.325-1.962-3.963Q5.325 13.4 3 13.075q-.425-.05-.712-.35Q2 12.425 2 12t.3-.713q.3-.287.7-.237 3.15.35 5.375 2.575T10.95 19q.05.4-.237.7-.288.3-.713.3Zm-4 0q-.35 0-.688-.275-.337-.275-.487-.7-.225-.65-.712-1.138-.488-.487-1.138-.712-.425-.15-.7-.475Q2 16.375 2 16q0-.425.288-.7.287-.275.687-.2 1.5.3 2.563 1.362Q6.6 17.525 6.9 19.025q.075.4-.187.687Q6.45 20 6 20Z"/>
    </Icon>
  );
});

IconMaterialCastFilled.displayName = 'AmauiIconMaterialCastFilled';

export default IconMaterialCastFilled;
