import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaxW100'

      short_name='Fax'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.15 20.35V8.65h4.2v1H8.4V5.1h8.7v4.55h3v9.7H7.35v1Zm.7-.7h2.8V9.35h-2.8Zm5.25-10h7.3V5.8H9.1Zm-1.75 9H19.4v-8.3H7.35Zm7.4-4.65q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q15.175 12 14.75 12t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm2.75 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 12 17.5 12t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-2.75 3q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q15.175 15 14.75 15t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm2.75 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 15 17.5 15t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-8.75 0h4v-5h-4Zm-1.4 1.65v-8.3 8.3Z"/>
    </Icon>
  );
});

IconMaterialFaxW100.displayName = 'AmauiIconMaterialFaxW100';

export default IconMaterialFaxW100;
