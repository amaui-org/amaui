import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaxW100Filled'

      short_name='Fax'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 19.35v-9.7h1V5.1h8.7v4.55h3v9.7Zm-4.25 1H6.7V8.65H3.15ZM9.1 9.65h7.3V5.8H9.1ZM14.75 14q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q15.175 12 14.75 12t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm2.75 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 12 17.5 12t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-2.75 3q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q15.175 15 14.75 15t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm2.75 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 15 17.5 15t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-8.75 0h4v-5h-4Z"/>
    </Icon>
  );
});

IconMaterialFaxW100Filled.displayName = 'AmauiIconMaterialFaxW100Filled';

export default IconMaterialFaxW100Filled;
