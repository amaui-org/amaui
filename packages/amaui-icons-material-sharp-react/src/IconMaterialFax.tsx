import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFax = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fax'

      short_name='Fax'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V8h6v1-5h10v5h4v11H8v1Zm2-2h2v-9H4Zm6-10h6V6h-6Zm-2 9h12v-7H8Zm7-4q.425 0 .713-.288Q16 13.425 16 13t-.287-.713Q15.425 12 15 12t-.712.287Q14 12.575 14 13t.288.712Q14.575 14 15 14Zm3 0q.425 0 .712-.288Q19 13.425 19 13t-.288-.713Q18.425 12 18 12t-.712.287Q17 12.575 17 13t.288.712Q17.575 14 18 14Zm-3 3q.425 0 .713-.288Q16 16.425 16 16t-.287-.713Q15.425 15 15 15t-.712.287Q14 15.575 14 16t.288.712Q14.575 17 15 17Zm3 0q.425 0 .712-.288Q19 16.425 19 16t-.288-.713Q18.425 15 18 15t-.712.287Q17 15.575 17 16t.288.712Q17.575 17 18 17Zm-9 0h4v-5H9Zm-1 1v-7 7Z"/>
    </Icon>
  );
});

IconMaterialFax.displayName = 'AmauiIconMaterialFax';

export default IconMaterialFax;
