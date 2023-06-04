import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlowMotionVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlowMotionVideoW100'

      short_name='SlowMotionVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 17.4q-.825-1.1-1.237-2.113Q3.5 14.275 3.35 13h.7q.15 1.1.55 2.087.4.988 1.05 1.813ZM3.35 11q.15-1.275.563-2.275.412-1 1.237-2.1l.5.5Q5 7.95 4.6 8.925 4.2 9.9 4.05 11Zm7.6 9.65q-1.425-.225-2.362-.637Q7.65 19.6 6.55 18.8l.5-.5q.8.625 1.788 1.063.987.437 2.112.587ZM7.1 5.675l-.5-.5q1.1-.8 2.038-1.2.937-.4 2.362-.625v.7q-1.125.15-2.113.575Q7.9 5.05 7.1 5.675Zm3.05 9.625V8.7L15.3 12ZM13 20.65v-.7q3.025-.425 5.013-2.675Q20 15.025 20 12q0-3.025-1.987-5.275Q16.025 4.475 13 4.05v-.7q3.325.35 5.513 2.825Q20.7 8.65 20.7 12t-2.187 5.825Q16.325 20.3 13 20.65Z"/>
    </Icon>
  );
});

IconMaterialSlowMotionVideoW100.displayName = 'AmauiIconMaterialSlowMotionVideoW100';

export default IconMaterialSlowMotionVideoW100;
