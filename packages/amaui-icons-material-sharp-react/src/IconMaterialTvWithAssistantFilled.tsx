import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvWithAssistantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvWithAssistantFilled'

      short_name='TvWithAssistant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 12.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm3 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-6 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q7.925 10.5 7.5 10.5t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288Zm9 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288ZM4 21v-2q-.825 0-1.412-.587Q2 17.825 2 17V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v11q0 .825-.587 1.413Q20.825 19 20 19v2h-1l-.65-2H5.675L5 21Z"/>
    </Icon>
  );
});

IconMaterialTvWithAssistantFilled.displayName = 'AmauiIconMaterialTvWithAssistantFilled';

export default IconMaterialTvWithAssistantFilled;
