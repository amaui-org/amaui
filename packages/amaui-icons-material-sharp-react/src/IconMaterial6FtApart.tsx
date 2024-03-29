import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial6FtApart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6FtApart'

      short_name='6FtApart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 6q-.825 0-1.412-.588Q4 4.825 4 4t.588-1.413Q5.175 2 6 2t1.412.587Q8 3.175 8 4q0 .825-.588 1.412Q6.825 6 6 6Zm-4 4v-.575q0-.6.325-1.1.325-.5.9-.75.65-.275 1.337-.425Q5.25 7 6 7t1.438.15q.687.15 1.337.425.575.25.9.75.325.5.325 1.1V10Zm16-4q-.825 0-1.413-.588Q16 4.825 16 4t.587-1.413Q17.175 2 18 2q.825 0 1.413.587Q20 3.175 20 4q0 .825-.587 1.412Q18.825 6 18 6Zm-4 4v-.575q0-.6.325-1.1.325-.5.9-.75.65-.275 1.337-.425Q17.25 7 18 7t1.438.15q.687.15 1.337.425.575.25.9.75.325.5.325 1.1V10ZM7 22v-4h3v1H8v.5h2V22Zm1-1h1v-.5H8Zm7.5 1v-3h-1v-1h3v1h-1v3Zm-4 0v-4H14v1h-1.5v.5h1v1h-1V22ZM5 17l-3-3 3-3 1.05 1.05-.95.95h13.775l-.925-.95L19 11l3 3-3 3-1.05-1.05.95-.95H5.125l.925.95Z"/>
    </Icon>
  );
});

IconMaterial6FtApart.displayName = 'AmauiIconMaterial6FtApart';

export default IconMaterial6FtApart;
