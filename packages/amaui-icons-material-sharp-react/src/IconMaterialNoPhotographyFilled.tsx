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
      <path d="m20.475 23.3-2.3-2.3H2V5h2.85v2.675L.675 3.5 2.1 2.075l19.8 19.8ZM22 19.125 16.475 13.6q.125-1.05-.212-2.063-.338-1.012-1.063-1.737-.75-.75-1.737-1.063-.988-.312-2.038-.187L7.5 4.625 9 3h6l1.85 2H22ZM12 17.5q.575 0 1.125-.125t1.025-.4L8.025 10.85q-.275.475-.4 1.025Q7.5 12.425 7.5 13q0 1.875 1.312 3.188Q10.125 17.5 12 17.5Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographyFilled.displayName = 'AmauiIconMaterialNoPhotographyFilled';

export default IconMaterialNoPhotographyFilled;
