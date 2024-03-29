import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoPhotographyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographyFilled'

      short_name='NoPhotography'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 19.125-5.525-5.55q.125-1.05-.212-2.038-.338-.987-1.063-1.712-.725-.725-1.737-1.075-1.013-.35-2.063-.225l-3.9-3.9.9-.975q.275-.3.662-.475Q9.45 3 9.875 3h4.25q.425 0 .813.175.387.175.662.475L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7ZM12 17.5q.575 0 1.125-.125t1.025-.4L8.025 10.85q-.275.475-.4 1.025Q7.5 12.425 7.5 13q0 1.875 1.312 3.188Q10.125 17.5 12 17.5Zm7.775 5.075L18.175 21H4q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h1.025v2.85L1.375 4.2q-.3-.3-.3-.713 0-.412.3-.712t.712-.3q.413 0 .713.3l18.4 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographyFilled.displayName = 'AmauiIconMaterialNoPhotographyFilled';

export default IconMaterialNoPhotographyFilled;
