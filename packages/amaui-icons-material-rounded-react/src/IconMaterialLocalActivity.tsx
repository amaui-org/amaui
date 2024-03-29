import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalActivity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivity'

      short_name='LocalActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18v-4q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v4q-.825 0-1.413.587Q20 11.175 20 12q0 .825.587 1.412Q21.175 14 22 14v4q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16v-2.55q-.95-.525-1.475-1.463Q18 13.05 18 12t.525-1.988Q19.05 9.075 20 8.55V6H4v2.55q.95.525 1.475 1.462Q6 10.95 6 12t-.525 1.987Q4.95 14.925 4 15.45Zm8-4.1 1.5 1.15q.3.225.613.012.312-.212.187-.562l-.6-1.9 1.675-1.3q.275-.2.163-.55-.113-.35-.488-.35H13.1l-.625-1.925q-.125-.35-.475-.35t-.475.35L10.9 10.4H8.925q-.35 0-.462.337-.113.338.162.563l1.625 1.3-.6 1.925q-.125.35.175.562.3.213.6-.012Zm0-1.9Z"/>
    </Icon>
  );
});

IconMaterialLocalActivity.displayName = 'AmauiIconMaterialLocalActivity';

export default IconMaterialLocalActivity;
