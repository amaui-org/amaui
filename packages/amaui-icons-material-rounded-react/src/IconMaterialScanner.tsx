import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Scanner'

      short_name='Scanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.6 12 4.425 7.225q-.375-.15-.537-.513-.163-.362-.038-.762t.512-.563q.388-.162.788-.037L19.8 10.7q.5.2.85.7.35.5.35 1.1V18q0 .825-.587 1.413Q19.825 20 19 20H5q-.825 0-1.413-.587Q3 18.825 3 18v-4q0-.825.587-1.413Q4.175 12 5 12Zm1.4 6v-4H5v4Zm-8-1h6q.425 0 .712-.288Q18 16.425 18 16t-.288-.713Q17.425 15 17 15h-6q-.425 0-.712.287Q10 15.575 10 16t.288.712Q10.575 17 11 17Zm-4 0q.425 0 .713-.288Q8 16.425 8 16t-.287-.713Q7.425 15 7 15t-.713.287Q6 15.575 6 16t.287.712Q6.575 17 7 17Zm-2 1v-4 4Z"/>
    </Icon>
  );
});

IconMaterialScanner.displayName = 'AmauiIconMaterialScanner';

export default IconMaterialScanner;
