import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryMusic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusic'

      short_name='LibraryMusic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.5 15q1.05 0 1.775-.725Q15 13.55 15 12.5V7h2.025q.425 0 .7-.287Q18 6.425 18 6t-.288-.713Q17.425 5 17 5h-2q-.425 0-.712.287Q14 5.575 14 6v4.5q-.325-.25-.7-.375-.375-.125-.8-.125-1.05 0-1.775.725Q10 11.45 10 12.5q0 1.05.725 1.775Q11.45 15 12.5 15ZM8 18q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V6.975q0-.425.288-.7Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 22 17 22ZM8 4v12V4Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusic.displayName = 'AmauiIconMaterialLibraryMusic';

export default IconMaterialLibraryMusic;
