import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVisibilityOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityOffW100'

      short_name='VisibilityOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.25 12.45-.6-.6q.225-1.35-.763-2.288-.987-.937-2.237-.712l-.6-.6q.2-.075.425-.113Q11.7 8.1 12 8.1q1.425 0 2.413.987.987.988.987 2.413 0 .3-.037.55-.038.25-.113.4Zm3.15 3.05-.55-.45q.95-.725 1.688-1.588.737-.862 1.262-1.962-1.25-2.525-3.588-4.013Q14.875 6 12 6q-.725 0-1.425.1-.7.1-1.375.3l-.55-.55q.825-.3 1.675-.425Q11.175 5.3 12 5.3q3.1 0 5.725 1.7 2.625 1.7 3.875 4.5-.525 1.125-1.312 2.125-.788 1-1.888 1.875Zm1.3 5.2-3.8-3.8q-.6.3-1.612.55-1.013.25-2.288.25-3.125 0-5.725-1.7-2.6-1.7-3.875-4.5Q3 10.175 4 9.012 5 7.85 6.1 7.1L3.3 4.3l.5-.5 16.4 16.4ZM6.6 7.6q-.9.6-1.887 1.662Q3.725 10.325 3.2 11.5q1.25 2.525 3.587 4.012Q9.125 17 12 17q.975 0 1.975-.2t1.425-.4l-1.85-1.85q-.225.15-.7.25t-.85.1q-1.425 0-2.412-.988Q8.6 12.925 8.6 11.5q0-.35.1-.812.1-.463.25-.738Zm6.925 3.125ZM11 12Z"/>
    </Icon>
  );
});

IconMaterialVisibilityOffW100.displayName = 'AmauiIconMaterialVisibilityOffW100';

export default IconMaterialVisibilityOffW100;
