import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsBusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBusW100'

      short_name='DirectionsBus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.35 19.7q-.15 0-.25-.1t-.1-.25V17.5q-.5-.125-1.1-.837-.6-.713-.6-1.663V6q0-1.4 1.613-2.05Q8.525 3.3 12 3.3q3.6 0 5.15.625Q18.7 4.55 18.7 6v9q0 .95-.6 1.663-.6.712-1.1.837v1.85q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V17.7H7.7v1.65q0 .15-.1.25t-.25.1ZM12 5.7h6H6h6Zm4 6.3H6h12-2Zm-10-.7h12V6.4H6Zm2.5 4.2q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q8.925 13.5 8.5 13.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm7 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM6 5.7h12q-.225-.875-1.6-1.288Q15.025 4 12 4q-3.025 0-4.4.412Q6.225 4.825 6 5.7ZM8 17h8q.825 0 1.413-.587Q18 15.825 18 15v-3H6v3q0 .825.588 1.413Q7.175 17 8 17Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBusW100.displayName = 'AmauiIconMaterialDirectionsBusW100';

export default IconMaterialDirectionsBusW100;
