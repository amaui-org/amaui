import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryBooks = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryBooks'

      short_name='LibraryBooks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 11h6q.425 0 .712-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9h-6q-.425 0-.712.287Q10 9.575 10 10t.288.712Q10.575 11 11 11Zm0 3h2q.425 0 .713-.288Q14 13.425 14 13t-.287-.713Q13.425 12 13 12h-2q-.425 0-.712.287Q10 12.575 10 13t.288.712Q10.575 14 11 14Zm0-6h6q.425 0 .712-.287Q18 7.425 18 7t-.288-.713Q17.425 6 17 6h-6q-.425 0-.712.287Q10 6.575 10 7t.288.713Q10.575 8 11 8ZM8 18q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22ZM8 4v12V4Z"/>
    </Icon>
  );
});

IconMaterialLibraryBooks.displayName = 'AmauiIconMaterialLibraryBooks';

export default IconMaterialLibraryBooks;
