import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHourglassDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassDisabledW100'

      short_name='HourglassDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.9 20.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.8v-3q0-1.675.925-3.038Q9.55 12.6 11.1 12.1l-.325-.325q-.9-.35-1.587-1.05-.688-.7-1.063-1.6L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125L19.7 20.7Zm8.2-9.4-.45-.45q.9-.55 1.425-1.6T15.6 7V4H8.4v1.6l-.7-.7V4h-.9l-.7-.7h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.8v3q0 1.325-.587 2.462Q15.125 10.6 14.1 11.3ZM8.4 20h7.2v-3.4l-3.875-3.875q-1.5.125-2.413 1.388Q8.4 15.375 8.4 17Zm7.9 0H19l-2.7-2.7Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabledW100.displayName = 'AmauiIconMaterialHourglassDisabledW100';

export default IconMaterialHourglassDisabledW100;
