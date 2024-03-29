import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaxFilled'

      short_name='Fax'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20V4h10v5h4v11Zm-6 1h5V8H2Zm8-12h6V6h-6Zm6 5q.425 0 .712-.288Q17 13.425 17 13t-.288-.713Q16.425 12 16 12t-.712.287Q15 12.575 15 13t.288.712Q15.575 14 16 14Zm3 0q.425 0 .712-.288Q20 13.425 20 13t-.288-.713Q19.425 12 19 12t-.712.287Q18 12.575 18 13t.288.712Q18.575 14 19 14Zm-3 3q.425 0 .712-.288Q17 16.425 17 16t-.288-.713Q16.425 15 16 15t-.712.287Q15 15.575 15 16t.288.712Q15.575 17 16 17Zm3 0q.425 0 .712-.288Q20 16.425 20 16t-.288-.713Q19.425 15 19 15t-.712.287Q18 15.575 18 16t.288.712Q18.575 17 19 17Zm-9 0h4v-5h-4Z"/>
    </Icon>
  );
});

IconMaterialFaxFilled.displayName = 'AmauiIconMaterialFaxFilled';

export default IconMaterialFaxFilled;
