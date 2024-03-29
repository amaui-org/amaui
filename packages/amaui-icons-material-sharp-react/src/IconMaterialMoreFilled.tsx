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
      <path d="M9.5 13q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.925 11 9.5 11t-.712.287Q8.5 11.575 8.5 12t.288.712Q9.075 13 9.5 13Zm3.5 0q.425 0 .713-.288Q14 12.425 14 12t-.287-.713Q13.425 11 13 11t-.712.287Q12 11.575 12 12t.288.712Q12.575 13 13 13Zm3.5 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q16.925 11 16.5 11t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288Zm-8.55 6L3 12l4.95-7H21v14Z"/>
    </Icon>
  );
});

IconMaterialMoreFilled.displayName = 'AmauiIconMaterialMoreFilled';

export default IconMaterialMoreFilled;
