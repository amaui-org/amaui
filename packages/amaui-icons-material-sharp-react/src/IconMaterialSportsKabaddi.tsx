import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsKabaddi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsKabaddi'

      short_name='SportsKabaddi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.475 4.5q-.825 0-1.413-.588-.587-.587-.587-1.412t.587-1.413Q15.65.5 16.475.5q.825 0 1.413.587.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588Zm-5 4q-.825 0-1.413-.588-.587-.587-.587-1.412t.587-1.412q.588-.588 1.413-.588.825 0 1.413.588.587.587.587 1.412t-.587 1.412q-.588.588-1.413.588ZM1.425 22l-1.4-1.4 3.65-3.65-1.525-4.125L6.375 8.6q.3-.3.65-.45Q7.375 8 7.8 8q.425 0 .775.15.35.15.65.45l2 1.95q.675.675 1.65 1.063.975.387 2.1.387v2q-1.5 0-2.8-.475-1.3-.475-2.25-1.425l-.7-.7-2.35 2.35 2.1 2.15V22h-2v-5.25l-1.3-1.2v2.2Zm13.55 0v-7l2.1-2-.6-3.5q-.375.45-.825.8-.45.35-.975.65-.825-.05-1.562-.35-.738-.3-1.238-.8 1.125-.2 1.988-.763.862-.562 1.412-1.437l1-1.6q.425-.675 1.175-.913.75-.237 1.475.063l5.05 2.15V12h-2V8.6l-1.8-.7 2.8 14.1h-2.1l-1.8-7.5-2.1 2V22Z"/>
    </Icon>
  );
});

IconMaterialSportsKabaddi.displayName = 'AmauiIconMaterialSportsKabaddi';

export default IconMaterialSportsKabaddi;
